export interface Traveller {
  id: string;
  name: string;
  avatar: string;
  interests: string[];
  preferences: {
    food: number;
    adventure: number;
    culture: number;
    nightlife: number;
    relaxation: number;
  };
  walkingTolerance: 'LOW' | 'MEDIUM' | 'HIGH';
  budgetSensitivity: 'LOW' | 'MEDIUM' | 'HIGH';
  travelPace: 'SLOW' | 'MODERATE' | 'FAST';
  mustHave: string[];
  avoid: string[];
  representationScore: number; // For Fairness Engine / Preference Debt
}

export interface Activity {
  id: string;
  time: string;
  title: string;
  image: string;
  location: string;
  cost: number;
  travelTime: string; // e.g., "15 min"
  travelMode: 'walk' | 'car' | 'transit';
  groupFit: number; // e.g., 92
  weatherStatus: 'sunny' | 'cloudy' | 'rainy';
  isCustom?: boolean;
  addedBy?: string;
  isReplaced?: boolean;
  replacedBy?: string;
  status: 'preserved' | 'replaced' | 'added';
  description?: string;
  originalTitle?: string;
  whyChosen?: string;
}

export interface DayItinerary {
  dayNumber: number;
  date: string;
  activities: Activity[];
}

export interface Trip {
  origin: string;
  destination: string;
  startDate: string;
  endDate: string;
  crewType: 'Friends' | 'Solo' | 'Couple' | 'Family';
  travellersCount: number;
  budgetPerPerson: number;
  selectedStyles: string[];
  groupCompatibility: number;
}

export interface Expense {
  id: string;
  description: string;
  amount: number;
  paidBy: string; // Traveller Name
  splitWith: string[]; // Traveller Names
  category?: string;
  date?: string;
}

export interface Recommendation {
  id: string;
  name: string;
  rating: number;
  price: number;
  distance: string;
  cuisine?: string;
  stars: number;
  groupFit: number;
  image: string;
  whyThis: {
    foodFit: boolean;
    photoFit: boolean;
    budgetFit: boolean;
    walkingFit: boolean;
    distanceText: string;
    priceText: string;
    weatherFit: string;
    explanation: string;
  };
}

export interface Message {
  id: string;
  sender: 'user' | 'pip';
  text: string;
  cards?: Recommendation[];
  options?: string[];
}
