export interface EmotionResult {
  anger: number;
  happiness: number;
  sadness: number;
  fear: number;
  surprise: number;
  neutral: number;
  disgust: number;
}

export interface AlertNotification {
  id: string;
  type: 'sms' | 'email';
  timestamp: Date;
  patientName: string;
  angerLevel: number;
  location: string;
  message: string;
  phoneNumber?: string;
  email?: string;
  status: 'sent' | 'delivered' | 'read';
}

// Mock emotion detection - simulates API response
export const mockEmotionDetection = (imageData?: string): EmotionResult => {
  // In a real scenario, this would call an actual emotion detection API
  // For demo purposes, we'll return realistic emotion distributions
  return {
    anger: Math.random() * 100,
    happiness: Math.random() * 100,
    sadness: Math.random() * 100,
    fear: Math.random() * 100,
    surprise: Math.random() * 100,
    neutral: Math.random() * 100,
    disgust: Math.random() * 100
  };
};

// Normalize emotion values to percentages
export const normalizeEmotions = (emotions: EmotionResult): EmotionResult => {
  const total = Object.values(emotions).reduce((a, b) => a + b, 0);
  return {
    anger: (emotions.anger / total) * 100,
    happiness: (emotions.happiness / total) * 100,
    sadness: (emotions.sadness / total) * 100,
    fear: (emotions.fear / total) * 100,
    surprise: (emotions.surprise / total) * 100,
    neutral: (emotions.neutral / total) * 100,
    disgust: (emotions.disgust / total) * 100
  };
};

// Generate mock alert notification
export const generateAlert = (angerLevel: number, patientName: string = "John Doe"): AlertNotification => {
  const locations = ["Room 101", "Room 205", "Dining Area", "Recreation Room", "Hallway B"];
  const location = locations[Math.floor(Math.random() * locations.length)];

  return {
    id: `ALERT-${Date.now()}`,
    type: Math.random() > 0.5 ? 'sms' : 'email',
    timestamp: new Date(),
    patientName,
    angerLevel,
    location,
    message: `High anger level detected (${Math.round(angerLevel)}%) for patient ${patientName} in ${location}. Immediate caregiver attention recommended.`,
    phoneNumber: '+61 2 XXXX XXXX',
    email: 'caregiver@facility.com.au',
    status: 'delivered'
  };
};

// Get anger level severity
export const getAngerSeverity = (angerLevel: number): 'low' | 'medium' | 'high' | 'critical' => {
  if (angerLevel < 25) return 'low';
  if (angerLevel < 50) return 'medium';
  if (angerLevel < 75) return 'high';
  return 'critical';
};

// Get color for severity level
export const getSeverityColor = (severity: string): string => {
  switch (severity) {
    case 'low':
      return '#10b981'; // green
    case 'medium':
      return '#f59e0b'; // amber
    case 'high':
      return '#ef4444'; // red
    case 'critical':
      return '#7c2d12'; // dark red
    default:
      return '#6b7280'; // gray
  }
};
