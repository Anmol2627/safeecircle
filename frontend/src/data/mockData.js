// Mock Users
export const mockUsers = [
  {
    id: 'user1',
    name: 'Sarah Johnson',
    email: 'sarah@safecircle.com',
    phone: '+1 555-0101',
    profilePic: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
    bio: 'Computer Science student, always ready to help',
    profileComplete: true,
    level: 3,
    points: 450,
    responses: 12,
    rating: 4.8,
    badges: ['first-responder', 'speed-demon', 'guardian-angel'],
    bloodType: 'O+',
    allergies: 'Penicillin, Peanuts',
    medications: 'Insulin, EpiPen',
    medicalConditions: 'Type 1 Diabetes',
    emergencyContacts: [
      { name: 'Mom', relationship: 'Mother', phone: '+1 555-1234' },
      { name: 'Dad', relationship: 'Father', phone: '+1 555-1235' }
    ],
    trustedCircle: ['user2', 'user3', 'user4'],
    preferences: {
      receiveAlerts: { medical: true, assault: true, accident: true, other: true },
      alertRadius: 1000,
      silentMode: false
    }
  },
  {
    id: 'user2',
    name: 'Mike Chen',
    email: 'mike@safecircle.com',
    phone: '+1 555-0102',
    profilePic: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mike',
    bio: 'Pre-med student with first aid certification',
    profileComplete: true,
    level: 4,
    points: 680,
    responses: 20,
    rating: 4.9,
    badges: ['first-responder', 'speed-demon', 'lifesaver', 'certified-helper'],
    bloodType: 'A+',
    allergies: 'None',
    medications: 'None',
    medicalConditions: 'None',
    emergencyContacts: [
      { name: 'Emily Chen', relationship: 'Sister', phone: '+1 555-2234' }
    ],
    trustedCircle: ['user1', 'user5'],
    preferences: {
      receiveAlerts: { medical: true, assault: true, accident: true, other: true },
      alertRadius: 1500,
      silentMode: false
    }
  },
  {
    id: 'user3',
    name: 'Emma Wilson',
    email: 'emma@safecircle.com',
    phone: '+1 555-0103',
    profilePic: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma',
    bio: 'Psychology major, mental health advocate',
    profileComplete: true,
    level: 2,
    points: 280,
    responses: 8,
    rating: 4.7,
    badges: ['first-responder', 'guardian-angel'],
    bloodType: 'B+',
    allergies: 'Latex',
    medications: 'None',
    medicalConditions: 'None',
    emergencyContacts: [
      { name: 'Mom', relationship: 'Mother', phone: '+1 555-3234' }
    ],
    trustedCircle: ['user1', 'user2'],
    preferences: {
      receiveAlerts: { medical: true, assault: true, accident: false, other: true },
      alertRadius: 800,
      silentMode: false
    }
  },
  {
    id: 'user4',
    name: 'James Rodriguez',
    email: 'james@safecircle.com',
    phone: '+1 555-0104',
    profilePic: 'https://api.dicebear.com/7.x/avataaars/svg?seed=James',
    bio: 'Engineering student, campus security volunteer',
    profileComplete: true,
    level: 5,
    points: 1250,
    responses: 35,
    rating: 4.9,
    badges: ['first-responder', 'speed-demon', 'lifesaver', 'community-hero', 'night-watch', 'legend'],
    bloodType: 'AB+',
    allergies: 'None',
    medications: 'None',
    medicalConditions: 'None',
    emergencyContacts: [
      { name: 'Maria Rodriguez', relationship: 'Mother', phone: '+1 555-4234' }
    ],
    trustedCircle: ['user1', 'user5'],
    preferences: {
      receiveAlerts: { medical: true, assault: true, accident: true, other: true },
      alertRadius: 2000,
      silentMode: false
    }
  },
  {
    id: 'user5',
    name: 'Lily Park',
    email: 'lily@safecircle.com',
    phone: '+1 555-0105',
    profilePic: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lily',
    bio: 'Nursing student, certified EMT',
    profileComplete: true,
    level: 4,
    points: 920,
    responses: 28,
    rating: 5.0,
    badges: ['first-responder', 'speed-demon', 'lifesaver', 'certified-helper', 'accuracy-expert'],
    bloodType: 'O-',
    allergies: 'None',
    medications: 'None',
    medicalConditions: 'None',
    emergencyContacts: [
      { name: 'David Park', relationship: 'Father', phone: '+1 555-5234' }
    ],
    trustedCircle: ['user2', 'user4'],
    preferences: {
      receiveAlerts: { medical: true, assault: true, accident: true, other: true },
      alertRadius: 1500,
      silentMode: false
    }
  }
];

// Mock Badges
export const badges = [
  {
    id: 'first-responder',
    name: 'First Responder',
    icon: '🥇',
    description: 'Responded to 1st incident',
    requirement: 'Respond to your first emergency',
    points: 50
  },
  {
    id: 'speed-demon',
    name: 'Speed Demon',
    icon: '⚡',
    description: 'Avg response time < 3 mins',
    requirement: 'Maintain average response time under 3 minutes',
    points: 100
  },
  {
    id: 'guardian-angel',
    name: 'Guardian Angel',
    icon: '👼',
    description: 'Helped 5+ people',
    requirement: 'Successfully help 5 or more people',
    points: 150
  },
  {
    id: 'lifesaver',
    name: 'Lifesaver',
    icon: '❤️',
    description: '10+ medical responses',
    requirement: 'Respond to 10 medical emergencies',
    points: 200
  },
  {
    id: 'night-watch',
    name: 'Night Watch',
    icon: '🌙',
    description: 'Responded 10 PM-6 AM',
    requirement: 'Respond to emergencies during late night hours',
    points: 150
  },
  {
    id: 'community-hero',
    name: 'Community Hero',
    icon: '🏆',
    description: '20+ responses',
    requirement: 'Complete 20 successful responses',
    points: 250
  },
  {
    id: 'certified-helper',
    name: 'Certified Helper',
    icon: '📋',
    description: 'Uploaded first aid certificate',
    requirement: 'Upload verified first aid certification',
    points: 100
  },
  {
    id: 'streak-master',
    name: 'Streak Master',
    icon: '🔥',
    description: 'Responded 7 days in a row',
    requirement: 'Maintain a 7-day response streak',
    points: 200
  },
  {
    id: 'accuracy-expert',
    name: 'Accuracy Expert',
    icon: '🎯',
    description: 'Arrived within ETA 90% of time',
    requirement: 'Consistently arrive within estimated time',
    points: 150
  },
  {
    id: 'communicator',
    name: 'Communicator',
    icon: '💬',
    description: 'Sent 50+ chat messages',
    requirement: 'Actively communicate during emergencies',
    points: 100
  },
  {
    id: 'lightning-fast',
    name: 'Lightning Fast',
    icon: '🚀',
    description: 'Arrived in under 2 mins',
    requirement: 'Arrive at an emergency in under 2 minutes',
    points: 300
  },
  {
    id: 'trusted-guardian',
    name: 'Trusted Guardian',
    icon: '👥',
    description: 'In 5+ trusted circles',
    requirement: 'Be added to 5 people\'s trusted circles',
    points: 200
  },
  {
    id: 'area-protector',
    name: 'Area Protector',
    icon: '📍',
    description: '15+ responses in same area',
    requirement: 'Protect your local area consistently',
    points: 150
  },
  {
    id: 'five-star',
    name: 'Five Star Helper',
    icon: '⭐',
    description: '4.8+ average rating',
    requirement: 'Maintain excellent rating from victims',
    points: 250
  },
  {
    id: 'legend',
    name: 'Legend',
    icon: '🏅',
    description: 'Level 5 + 50+ responses',
    requirement: 'Become a true SafeCircle legend',
    points: 500
  }
];

// Mock Active Incidents
export const mockIncidents = [
  {
    id: 'incident1',
    type: 'Medical',
    victim: mockUsers[0],
    location: { lat: 37.7749, lng: -122.4194, address: 'Main Library, Campus' },
    distance: 350,
    description: 'Feeling dizzy and disoriented',
    timestamp: new Date(Date.now() - 3 * 60 * 1000).toISOString(),
    status: 'active',
    respondingHelpers: ['user2', 'user4', 'user5'],
    arrivedHelpers: [],
    emergencyServicesNotified: ['campus-security', 'ambulance'],
    chatMessages: [
      { id: 'msg1', sender: 'user2', message: "I'm 2 minutes away with first aid kit", timestamp: new Date(Date.now() - 2 * 60 * 1000).toISOString() },
      { id: 'msg2', sender: 'user1', message: "I'm at the library near the entrance", timestamp: new Date(Date.now() - 1.5 * 60 * 1000).toISOString() },
      { id: 'msg3', sender: 'user4', message: 'Campus security has been notified', timestamp: new Date(Date.now() - 1 * 60 * 1000).toISOString() }
    ]
  },
  {
    id: 'incident2',
    type: 'Assault',
    victim: mockUsers[2],
    location: { lat: 37.7739, lng: -122.4200, address: 'North Parking Lot' },
    distance: 580,
    description: 'Feeling unsafe, someone following me',
    timestamp: new Date(Date.now() - 5 * 60 * 1000).toISOString(),
    status: 'active',
    respondingHelpers: ['user4'],
    arrivedHelpers: [],
    emergencyServicesNotified: ['campus-security', 'police'],
    chatMessages: [
      { id: 'msg4', sender: 'user4', message: "On my way, stay in well-lit area", timestamp: new Date(Date.now() - 3 * 60 * 1000).toISOString() },
      { id: 'msg5', sender: 'user3', message: "I'm near the campus store, moving towards the lot entrance", timestamp: new Date(Date.now() - 2 * 60 * 1000).toISOString() }
    ]
  },
  {
    id: 'incident3',
    type: 'Accident',
    victim: mockUsers[1],
    location: { lat: 37.7759, lng: -122.4184, address: 'Sports Complex' },
    distance: 920,
    description: 'Twisted ankle during basketball',
    timestamp: new Date(Date.now() - 8 * 60 * 1000).toISOString(),
    status: 'active',
    respondingHelpers: ['user5'],
    arrivedHelpers: ['user5'],
    emergencyServicesNotified: ['campus-security'],
    chatMessages: [
      { id: 'msg6', sender: 'user5', message: "I'm here with ice pack and compression wrap", timestamp: new Date(Date.now() - 1 * 60 * 1000).toISOString() }
    ]
  }
];

// Mock Incident History
export const mockHistory = [
  {
    id: 'history1',
    type: 'Medical',
    role: 'helper',
    location: { address: 'Student Center' },
    timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    outcome: 'resolved',
    helpersCount: 3,
    responseTime: '2:15',
    rating: 5,
    pointsEarned: 120,
    victim: { name: 'Alex Turner', profilePic: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex' }
  },
  {
    id: 'history2',
    type: 'Accident',
    role: 'victim',
    location: { address: 'Engineering Building' },
    timestamp: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    outcome: 'resolved',
    helpersCount: 2,
    responseTime: '3:45',
    rating: 4,
    helpers: [
      { name: 'Mike Chen', profilePic: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mike' },
      { name: 'Lily Park', profilePic: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lily' }
    ]
  }
];

// Leaderboard Data
export const leaderboardData = [
  {
    rank: 1,
    user: mockUsers[3],
    points: 1250,
    responses: 35,
    change: '+2'
  },
  {
    rank: 2,
    user: mockUsers[4],
    points: 920,
    responses: 28,
    change: '+1'
  },
  {
    rank: 3,
    user: mockUsers[1],
    points: 680,
    responses: 20,
    change: '-1'
  },
  {
    rank: 4,
    user: mockUsers[0],
    points: 450,
    responses: 12,
    change: '0'
  },
  {
    rank: 5,
    user: mockUsers[2],
    points: 280,
    responses: 8,
    change: '+3'
  }
];
