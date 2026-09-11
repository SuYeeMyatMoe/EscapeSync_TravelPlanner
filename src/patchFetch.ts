/**
 * Polyfill / defensive patch for environments where window.fetch has only a getter.
 * In sandboxed iframes or certain browser extension / host environments, assigning to
 * `window.fetch` or `fetch` throws:
 * "TypeError: Cannot set property fetch of #<Window> which has only a getter".
 * This defines both a getter and setter on `window.fetch` so any library, polyfill, or tool
 * can intercept or assign `fetch` safely.
 */
(function setupSafeFetch() {
  if (typeof window === 'undefined') return;
  try {
    const nativeFetch = window.fetch;
    let activeFetch = typeof nativeFetch === 'function' ? nativeFetch.bind(window) : nativeFetch;

    const winDesc = Object.getOwnPropertyDescriptor(window, 'fetch');
    const protoDesc = window.Window ? Object.getOwnPropertyDescriptor(window.Window.prototype, 'fetch') : null;
    const desc = winDesc || protoDesc;

    if (!desc || !desc.set || desc.writable === false) {
      try {
        Object.defineProperty(window, 'fetch', {
          get() {
            return activeFetch;
          },
          set(newFetch) {
            activeFetch = typeof newFetch === 'function' && newFetch.bind ? newFetch.bind(window) : newFetch;
          },
          configurable: true,
          enumerable: true,
        });
      } catch {
        if (window.Window && window.Window.prototype) {
          try {
            Object.defineProperty(window.Window.prototype, 'fetch', {
              get() {
                return activeFetch;
              },
              set(newFetch) {
                activeFetch = typeof newFetch === 'function' && newFetch.bind ? newFetch.bind(window) : newFetch;
              },
              configurable: true,
              enumerable: true,
            });
          } catch {
            // Silently ignore if descriptor is immutable
          }
        }
      }
    }
  } catch {
    // Silently continue
  }
})();
