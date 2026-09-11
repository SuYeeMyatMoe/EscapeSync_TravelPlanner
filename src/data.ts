import { Traveller, DayItinerary, Recommendation, Expense, Activity } from './types';

export const INITIAL_TRAVELLERS: Traveller[] = [
  {
    id: 'alice',
    name: 'Alice',
    avatar: '👩‍🍳',
    interests: ['Food', 'Cafés', 'Shopping'],
    preferences: {
      food: 95,
      adventure: 40,
      culture: 60,
      nightlife: 50,
      relaxation: 70
    },
    walkingTolerance: 'MEDIUM',
    budgetSensitivity: 'MEDIUM',
    travelPace: 'MODERATE',
    mustHave: ['Aesthetic cafés', 'Air-conditioned spots'],
    avoid: ['Long hikes'],
    representationScore: 91
  },
  {
    id: 'ben',
    name: 'Ben',
    avatar: '📸',
    interests: ['Photography', 'Culture', 'Sightseeing'],
    preferences: {
      food: 75,
      adventure: 65,
      culture: 95,
      nightlife: 45,
      relaxation: 55
    },
    walkingTolerance: 'HIGH',
    budgetSensitivity: 'MEDIUM',
    travelPace: 'MODERATE',
    mustHave: ['Good lighting', 'Scenic overlooks'],
    avoid: ['Crowded gift shops'],
    representationScore: 84
  },
  {
    id: 'chris',
    name: 'Chris',
    avatar: '🎒',
    interests: ['Low budget', 'Local food', 'Backpacking'],
    preferences: {
      food: 90,
      adventure: 75,
      culture: 70,
      nightlife: 60,
      relaxation: 40
    },
    walkingTolerance: 'HIGH',
    budgetSensitivity: 'HIGH',
    travelPace: 'FAST',
    mustHave: ['Street food', 'Free entries'],
    avoid: ['Overpriced tourist traps'],
    representationScore: 66
  },
  {
    id: 'david',
    name: 'David',
    avatar: '☕',
    interests: ['Low walking', 'Relaxation', 'Museums'],
    preferences: {
      food: 80,
      adventure: 20,
      culture: 85,
      nightlife: 30,
      relaxation: 95
    },
    walkingTolerance: 'LOW',
    budgetSensitivity: 'LOW',
    travelPace: 'SLOW',
    mustHave: ['Comfy seating', 'Elevators'],
    avoid: ['Stairs', 'Long walking overload'],
    representationScore: 82
  }
];

export const INITIAL_ITINERARY: DayItinerary[] = [
  {
    dayNumber: 1,
    date: 'Friday, Sep 4',
    activities: [
      {
        id: 'd1-a1',
        time: '08:00',
        title: 'KL Sentral Departure',
        image: 'https://images.unsplash.com/photo-1596422846543-75c6fc18a523?auto=format&fit=crop&w=400&q=80',
        location: 'Kuala Lumpur Sentral',
        cost: 15,
        travelTime: '2h 15m',
        travelMode: 'transit',
        groupFit: 90,
        weatherStatus: 'sunny',
        status: 'preserved',
        description: 'Catch the express bus from KL Sentral directly to Melaka Sentral.',
        whyChosen: 'Cheaper transit option requested by Chris, and highly comfortable seats for David.'
      },
      {
        id: 'd1-a2',
        time: '10:15',
        title: 'Hotel Check-In',
        image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=400&q=80',
        location: 'The Pines Melaka',
        cost: 0,
        travelTime: '15 min',
        travelMode: 'car',
        groupFit: 91,
        weatherStatus: 'sunny',
        status: 'preserved',
        description: 'Drop off bags and freshen up. Excellent views of the Melaka river.',
        whyChosen: 'Low walking distance to main attractions for David, and budget-friendly split 4 ways.'
      },
      {
        id: 'd1-a3',
        time: '12:00',
        title: 'Jonker Street Exploration',
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=400&q=80',
        location: 'Jalan Hang Jebat',
        cost: 20,
        travelTime: '10 min',
        travelMode: 'walk',
        groupFit: 94,
        weatherStatus: 'sunny',
        status: 'preserved',
        description: 'Vibrant historical street with local street snacks, shops, and heritage architecture.',
        whyChosen: 'Combines amazing food (Alice, Chris) with rich colonial photography spots (Ben).'
      },
      {
        id: 'd1-a4',
        time: '15:30',
        title: 'A Famosa Historical Fort',
        image: 'https://images.unsplash.com/photo-1601919051950-bb9f3ffb3fee?auto=format&fit=crop&w=400&q=80',
        location: 'Jalan Parameswara',
        cost: 10,
        travelTime: '12 min',
        travelMode: 'walk',
        groupFit: 88,
        weatherStatus: 'sunny',
        status: 'preserved',
        description: 'Porta de Santiago ruin, a key piece of Portuguese architectural history in Asia.',
        whyChosen: 'Highly rated culture and history point for Ben and David.'
      },
      {
        id: 'd1-a5',
        time: '19:00',
        title: 'Dinner at Nyonya Makko',
        image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=400&q=80',
        location: 'Taman Melaka Raya',
        cost: 25,
        travelTime: '8 min',
        travelMode: 'car',
        groupFit: 93,
        weatherStatus: 'cloudy',
        status: 'preserved',
        description: 'Authentic Peranakan/Nyonya cuisine in a cozy family-style setting.',
        whyChosen: 'Stellar traditional food matching Alice\'s preference, and Chris\'s budget guidelines.'
      }
    ]
  },
  {
    dayNumber: 2,
    date: 'Saturday, Sep 5',
    activities: [
      {
        id: 'd2-a1',
        time: '09:30',
        title: 'Melaka River Cruise',
        image: 'https://images.unsplash.com/photo-1590001155093-a3c66ab0c3ff?auto=format&fit=crop&w=400&q=80',
        location: 'Jalan Graha Maju',
        cost: 30,
        travelTime: '15 min',
        travelMode: 'car',
        groupFit: 92,
        weatherStatus: 'sunny',
        status: 'preserved',
        description: '45-minute scenic boat cruise along the historic Melaka River.',
        whyChosen: 'Provides excellent photography views (Ben) and requires zero walking (David).'
      },
      {
        id: 'd2-a2',
        time: '11:45',
        title: 'Stadthuys and Red Square',
        image: 'https://images.unsplash.com/photo-1601919051950-bb9f3ffb3fee?auto=format&fit=crop&w=400&q=80',
        location: 'Bandar Hilir',
        cost: 5,
        travelTime: '10 min',
        travelMode: 'walk',
        groupFit: 89,
        weatherStatus: 'sunny',
        status: 'preserved',
        description: 'The iconic terracotta-red Dutch buildings built in 1650, housing history museums.',
        whyChosen: 'Stunning cultural landmarks and extremely low entrance cost (Chris).'
      },
      {
        id: 'd2-a3',
        time: '14:30',
        title: 'Outdoor Heritage Market',
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=400&q=80',
        location: 'Kampung Jawa Lane',
        cost: 15,
        travelTime: '15 min',
        travelMode: 'walk',
        groupFit: 85,
        weatherStatus: 'sunny',
        status: 'preserved', // Start as preserved, but will change in Rescue Mode
        description: 'Bustling outdoor market with local crafts, antiques, and seasonal fruits.',
        whyChosen: 'Great local shopping and cheap treats for Chris and Alice.'
      },
      {
        id: 'd2-a4',
        time: '16:30',
        title: 'St. Paul’s Hill Viewpoint Walk',
        image: 'https://images.unsplash.com/photo-1596422846543-75c6fc18a523?auto=format&fit=crop&w=400&q=80',
        location: 'Bukit St. Paul',
        cost: 0,
        travelTime: '20 min',
        travelMode: 'walk',
        groupFit: 80,
        weatherStatus: 'sunny',
        status: 'preserved',
        description: 'A beautiful walk up the hill to see the ruins of St. Paul’s Church and panoramic ocean views.',
        whyChosen: 'Ideal lighting for photography (Ben), but note that walking is medium-high.'
      },
      {
        id: 'd2-a5',
        time: '19:00',
        title: 'Restoran Peranakan Dinner',
        image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=400&q=80',
        location: 'Jalan Tun Tan Cheng Lock',
        cost: 35,
        travelTime: '12 min',
        travelMode: 'car',
        groupFit: 90,
        weatherStatus: 'cloudy',
        status: 'preserved',
        description: 'Stately heritage mansion converted into a beautiful local dining hall.',
        whyChosen: 'Perfect historical dining vibe. David can relax, Alice gets premium culinary heritage.'
      }
    ]
  },
  {
    dayNumber: 3,
    date: 'Sunday, Sep 6',
    activities: [
      {
        id: 'd3-a1',
        time: '10:00',
        title: 'Baba & Nyonya Heritage Museum',
        image: 'https://images.unsplash.com/photo-1580136579312-94651dfd596d?auto=format&fit=crop&w=400&q=80',
        location: 'Jalan Tun Tan Cheng Lock',
        cost: 16,
        travelTime: '15 min',
        travelMode: 'walk',
        groupFit: 91,
        weatherStatus: 'sunny',
        status: 'preserved',
        description: 'A beautiful town house museum showing the lifestyle of late 19th-century Peranakan families.',
        whyChosen: 'Fully indoor air-conditioned walkthrough (David) combined with stunning culture (Ben).'
      },
      {
        id: 'd3-a2',
        time: '12:30',
        title: 'Lunch at Daily Fix Café',
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=400&q=80',
        location: 'Jalan Hang Lekir',
        cost: 25,
        travelTime: '5 min',
        travelMode: 'walk',
        groupFit: 95,
        weatherStatus: 'sunny',
        status: 'preserved',
        description: 'Trendy, popular café inside a retro heritage building, famous for pandan pancakes.',
        whyChosen: 'Highest group satisfaction score, Alice’s top café choice!'
      },
      {
        id: 'd3-a3',
        time: '15:00',
        title: 'Departure Back to KL',
        image: 'https://images.unsplash.com/photo-1596422846543-75c6fc18a523?auto=format&fit=crop&w=400&q=80',
        location: 'Melaka Sentral Bus Terminal',
        cost: 15,
        travelTime: '2h 15m',
        travelMode: 'transit',
        groupFit: 92,
        weatherStatus: 'sunny',
        status: 'preserved',
        description: 'Board return express bus back to Kuala Lumpur Sentral.',
        whyChosen: 'Standard return schedule, highly coordinated with check-out times.'
      }
    ]
  }
];

// Replaced activities for Rescue Mode / Heavy Rain (Plan B for Day 2)
export const RESCUED_DAY2_ACTIVITIES: Activity[] = [
  {
    id: 'd2-a1',
    time: '09:30',
    title: 'Melaka River Cruise',
    image: 'https://images.unsplash.com/photo-1590001155093-a3c66ab0c3ff?auto=format&fit=crop&w=400&q=80',
    location: 'Jalan Graha Maju',
    cost: 30,
    travelTime: '15 min',
    travelMode: 'car',
    groupFit: 92,
    weatherStatus: 'sunny',
    status: 'preserved',
    description: '45-minute scenic boat cruise along the historic Melaka River.'
  },
  {
    id: 'd2-a2',
    time: '11:45',
    title: 'Stadthuys and Red Square',
    image: 'https://images.unsplash.com/photo-1601919051950-bb9f3ffb3fee?auto=format&fit=crop&w=400&q=80',
    location: 'Bandar Hilir',
    cost: 5,
    travelTime: '10 min',
    travelMode: 'walk',
    groupFit: 89,
    weatherStatus: 'sunny',
    status: 'preserved',
    description: 'The iconic terracotta-red Dutch buildings built in 1650.'
  },
  {
    id: 'd2-a3-replaced',
    time: '14:30',
    title: 'Indoor Food Hall (Nancy’s Kitchen)',
    originalTitle: 'Outdoor Heritage Market',
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=400&q=80',
    location: 'Jalan Hang Lekir',
    cost: 12,
    travelTime: '8 min',
    travelMode: 'walk',
    groupFit: 93, // +8% increase
    weatherStatus: 'rainy',
    status: 'added',
    description: 'Comfortable indoor air-conditioned Peranakan food hall. Safeguards against rain.',
    whyChosen: 'Excellent local food. Completely indoor to avoid heavy rain. Highly represents Chris\'s underrepresented budget preference.'
  },
  {
    id: 'd2-a4-replaced',
    time: '16:15',
    title: 'Straits Chinese Jewellery Museum',
    originalTitle: 'St. Paul’s Hill Viewpoint Walk',
    image: 'https://images.unsplash.com/photo-1580136579312-94651dfd596d?auto=format&fit=crop&w=400&q=80',
    location: 'Jalan Tun Tan Cheng Lock',
    cost: 12,
    travelTime: '10 min',
    travelMode: 'walk',
    groupFit: 91, // +11% increase
    weatherStatus: 'rainy',
    status: 'added',
    description: 'Indoor heritage museum displaying elegant Baba Nyonya antiques, porcelain, and jewelry.',
    whyChosen: 'Stunning photography and rich culture for Ben and David without climbing St. Paul’s Hill in heavy rain.'
  },
  {
    id: 'd2-a5',
    time: '19:00',
    title: 'Restoran Peranakan Dinner',
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=400&q=80',
    location: 'Jalan Tun Tan Cheng Lock',
    cost: 35,
    travelTime: '12 min',
    travelMode: 'car',
    groupFit: 90,
    weatherStatus: 'rainy',
    status: 'preserved',
    description: 'Stately heritage mansion converted into a beautiful local dining hall.'
  }
];

export const SMART_RECOMMENDATIONS: Recommendation[] = [
  {
    id: 'rec-1',
    name: 'Nyonya Makko Restaurant',
    rating: 4.7,
    price: 25,
    distance: '8 min away',
    cuisine: 'Peranakan / Nyonya',
    stars: 5,
    groupFit: 93,
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=400&q=80',
    whyThis: {
      foodFit: true,
      photoFit: false,
      budgetFit: true,
      walkingFit: true,
      distanceText: '650 m away',
      priceText: 'RM25/person',
      weatherFit: 'Indoor / Air-conditioned',
      explanation: 'Nyonya Makko offers traditional Peranakan flavours (satisfying Alice), highly affordable prices (Chris), and features street-level access with minimal walking (David).'
    }
  },
  {
    id: 'rec-2',
    name: 'The Daily Fix Café',
    rating: 4.8,
    price: 30,
    distance: '5 min from Jonker Walk',
    cuisine: 'Local Heritage Coffee & Sweets',
    stars: 5,
    groupFit: 95,
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=400&q=80',
    whyThis: {
      foodFit: true,
      photoFit: true,
      budgetFit: false,
      walkingFit: true,
      distanceText: '400 m away',
      priceText: 'RM30/person',
      weatherFit: 'Indoor Cozy Spot',
      explanation: 'Unbelievably photogenic vintage courtyard layout for Ben\'s camera, award-winning pandan pancakes for Alice, and deep local culture notes.'
    }
  },
  {
    id: 'rec-3',
    name: 'Geographer Café',
    rating: 4.4,
    price: 22,
    distance: '10 min away',
    cuisine: 'Fusion / Live Music',
    stars: 4,
    groupFit: 88,
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=400&q=80',
    whyThis: {
      foodFit: true,
      photoFit: true,
      budgetFit: true,
      walkingFit: false,
      distanceText: '950 m away',
      priceText: 'RM22/person',
      weatherFit: 'Covered Patio',
      explanation: 'Great live music and budget-friendly mocktails. High score for Chris and Ben, slightly lower for David due to the walk.'
    }
  }
];

export const HOTEL_RECOMMENDATIONS = [
  {
    id: 'hotel-1',
    name: 'The Pines Melaka',
    rating: 4.5,
    price: 180,
    groupFit: 91,
    distance: '8 min from Jonker Walk',
    goodFor: ['Low walking', 'Budget friendly', 'Central location'],
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=400&q=80',
    description: 'Highly rated spacious suites with floor-to-ceiling windows overlooking Melaka River. Great value split among 4 people.'
  },
  {
    id: 'hotel-2',
    name: 'Majestic Malacca',
    rating: 4.9,
    price: 420,
    groupFit: 78,
    distance: '12 min from Red Square',
    goodFor: ['Ultra luxury', 'Historical estate', 'Photography'],
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=400&q=80',
    description: 'A beautifully restored 1920s mansion. Excellent for cultural preservation, but higher budget limit.'
  }
];

export const INITIAL_EXPENSES: Expense[] = [
  {
    id: 'exp-1',
    description: 'Group Dinner at Nyonya Makko',
    amount: 120,
    paidBy: 'Alice',
    splitWith: ['Alice', 'Ben', 'Chris', 'David']
  },
  {
    id: 'exp-2',
    description: 'Melaka River Cruise Tickets',
    amount: 120,
    paidBy: 'Ben',
    splitWith: ['Alice', 'Ben', 'Chris', 'David']
  },
  {
    id: 'exp-3',
    description: 'Stadthuys Entry Tickets',
    amount: 20,
    paidBy: 'Alice',
    splitWith: ['Alice', 'Ben', 'Chris', 'David']
  }
];
