export interface PatientEmotionDataPoint {
  timestamp: string;
  time: string;
  angerLevel: number;
  happiness: number;
  sadness: number;
  fear: number;
  neutral: number;
  event?: string;
  intervention?: string;
}

export interface PatientProfile {
  id: string;
  name: string;
  age: number;
  room: string;
  condition: string;
  riskLevel: 'low' | 'medium' | 'high';
  emotionData: PatientEmotionDataPoint[];
  photoAngry: string;
  photoCalm: string;
}

// Sample patient: John Doe - showing a complete behavioral cycle
export const johnDoeData: PatientProfile = {
  id: 'P001',
  name: 'John Doe',
  age: 78,
  room: '101',
  condition: 'Moderate Dementia',
  riskLevel: 'high',
  photoAngry: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663443695839/AXPs7eqtPwFeJ4dGi4DHLo/john-doe-angry-NPN9SZjYCddDS4T29ZUJAN.webp',
  photoCalm: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663443695839/AXPs7eqtPwFeJ4dGi4DHLo/john-doe-calm-8q8AZnpqeDF9gq8C7DujRR.webp',
  emotionData: [
    {
      timestamp: '2024-03-17T08:00:00',
      time: '08:00 AM',
      angerLevel: 15,
      happiness: 70,
      sadness: 10,
      fear: 5,
      neutral: 0,
      event: 'Morning breakfast'
    },
    {
      timestamp: '2024-03-17T09:00:00',
      time: '09:00 AM',
      angerLevel: 18,
      happiness: 65,
      sadness: 12,
      fear: 5,
      neutral: 0,
      event: 'Medication time'
    },
    {
      timestamp: '2024-03-17T10:00:00',
      time: '10:00 AM',
      angerLevel: 25,
      happiness: 55,
      sadness: 15,
      fear: 5,
      neutral: 0,
      event: 'Visitor left'
    },
    {
      timestamp: '2024-03-17T11:00:00',
      time: '11:00 AM',
      angerLevel: 35,
      happiness: 40,
      sadness: 20,
      fear: 5,
      neutral: 0,
      event: 'Confusion about location'
    },
    {
      timestamp: '2024-03-17T11:30:00',
      time: '11:30 AM',
      angerLevel: 52,
      happiness: 20,
      sadness: 18,
      fear: 10,
      neutral: 0,
      event: 'Escalating agitation',
      intervention: 'Caregiver check-in'
    },
    {
      timestamp: '2024-03-17T12:00:00',
      time: '12:00 PM',
      angerLevel: 78,
      happiness: 5,
      sadness: 10,
      fear: 7,
      neutral: 0,
      event: 'Peak outburst - refusing care',
      intervention: 'Immediate caregiver response + calming techniques'
    },
    {
      timestamp: '2024-03-17T12:15:00',
      time: '12:15 PM',
      angerLevel: 72,
      happiness: 8,
      sadness: 12,
      fear: 8,
      neutral: 0,
      event: 'Still elevated'
    },
    {
      timestamp: '2024-03-17T12:30:00',
      time: '12:30 PM',
      angerLevel: 58,
      happiness: 15,
      sadness: 15,
      fear: 12,
      neutral: 0,
      event: 'De-escalation in progress',
      intervention: 'Continued support, familiar caregiver'
    },
    {
      timestamp: '2024-03-17T13:00:00',
      time: '01:00 PM',
      angerLevel: 38,
      happiness: 35,
      sadness: 18,
      fear: 9,
      neutral: 0,
      event: 'Calming down'
    },
    {
      timestamp: '2024-03-17T13:30:00',
      time: '01:30 PM',
      angerLevel: 22,
      happiness: 55,
      sadness: 15,
      fear: 8,
      neutral: 0,
      event: 'Lunch provided'
    },
    {
      timestamp: '2024-03-17T14:00:00',
      time: '02:00 PM',
      angerLevel: 15,
      happiness: 70,
      sadness: 10,
      fear: 5,
      neutral: 0,
      event: 'Back to baseline'
    },
    {
      timestamp: '2024-03-17T15:00:00',
      time: '03:00 PM',
      angerLevel: 12,
      happiness: 75,
      sadness: 8,
      fear: 5,
      neutral: 0,
      event: 'Relaxed, watching TV'
    }
  ]
};

// Sample patient: Margaret Smith - showing low-risk pattern
export const margaretSmithData: PatientProfile = {
  id: 'P002',
  name: 'Margaret Smith',
  age: 82,
  room: '205',
  condition: 'Mild Dementia',
  riskLevel: 'low',
  photoAngry: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663443695839/AXPs7eqtPwFeJ4dGi4DHLo/margaret-smith-concerned-Mr4ZpdbnDVTZ6Swuotmhed.webp',
  photoCalm: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663443695839/AXPs7eqtPwFeJ4dGi4DHLo/margaret-smith-calm-G9B3TWwGawBeAfPjKAddn3.webp',
  emotionData: [
    {
      timestamp: '2024-03-17T08:00:00',
      time: '08:00 AM',
      angerLevel: 5,
      happiness: 85,
      sadness: 5,
      fear: 5,
      neutral: 0,
      event: 'Morning routine'
    },
    {
      timestamp: '2024-03-17T09:00:00',
      time: '09:00 AM',
      angerLevel: 8,
      happiness: 80,
      sadness: 7,
      fear: 5,
      neutral: 0,
      event: 'Activities'
    },
    {
      timestamp: '2024-03-17T10:00:00',
      time: '10:00 AM',
      angerLevel: 10,
      happiness: 78,
      sadness: 8,
      fear: 4,
      neutral: 0,
      event: 'Social time'
    },
    {
      timestamp: '2024-03-17T11:00:00',
      time: '11:00 AM',
      angerLevel: 8,
      happiness: 82,
      sadness: 5,
      fear: 5,
      neutral: 0,
      event: 'Stable'
    },
    {
      timestamp: '2024-03-17T12:00:00',
      time: '12:00 PM',
      angerLevel: 6,
      happiness: 85,
      sadness: 5,
      fear: 4,
      neutral: 0,
      event: 'Lunch'
    },
    {
      timestamp: '2024-03-17T13:00:00',
      time: '01:00 PM',
      angerLevel: 5,
      happiness: 88,
      sadness: 4,
      fear: 3,
      neutral: 0,
      event: 'Rest time'
    },
    {
      timestamp: '2024-03-17T14:00:00',
      time: '02:00 PM',
      angerLevel: 7,
      happiness: 83,
      sadness: 6,
      fear: 4,
      neutral: 0,
      event: 'Afternoon activities'
    },
    {
      timestamp: '2024-03-17T15:00:00',
      time: '03:00 PM',
      angerLevel: 6,
      happiness: 86,
      sadness: 5,
      fear: 3,
      neutral: 0,
      event: 'Stable throughout day'
    }
  ]
};

// Sample patient: Robert Johnson - showing medium-risk pattern with warning signs
export const robertJohnsonData: PatientProfile = {
  id: 'P003',
  name: 'Robert Johnson',
  age: 75,
  room: '312',
  condition: 'Moderate-Severe Dementia',
  riskLevel: 'high',
  photoAngry: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663443695839/AXPs7eqtPwFeJ4dGi4DHLo/robert-johnson-agitated-bEePKXUZBTcDgVurcM3f8f.webp',
  photoCalm: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663443695839/AXPs7eqtPwFeJ4dGi4DHLo/robert-johnson-calm-kd5MW68TbHJndNrMvYjTL6.webp',
  emotionData: [
    {
      timestamp: '2024-03-17T08:00:00',
      time: '08:00 AM',
      angerLevel: 20,
      happiness: 60,
      sadness: 15,
      fear: 5,
      neutral: 0,
      event: 'Woke up confused'
    },
    {
      timestamp: '2024-03-17T09:00:00',
      time: '09:00 AM',
      angerLevel: 28,
      happiness: 50,
      sadness: 18,
      fear: 4,
      neutral: 0,
      event: 'Disoriented'
    },
    {
      timestamp: '2024-03-17T10:00:00',
      time: '10:00 AM',
      angerLevel: 35,
      happiness: 40,
      sadness: 20,
      fear: 5,
      neutral: 0,
      event: 'Becoming agitated',
      intervention: 'Preventive caregiver engagement'
    },
    {
      timestamp: '2024-03-17T11:00:00',
      time: '11:00 AM',
      angerLevel: 42,
      happiness: 30,
      sadness: 22,
      fear: 6,
      neutral: 0,
      event: 'Escalating'
    },
    {
      timestamp: '2024-03-17T12:00:00',
      time: '12:00 PM',
      angerLevel: 55,
      happiness: 20,
      sadness: 20,
      fear: 5,
      neutral: 0,
      event: 'High agitation',
      intervention: 'Structured activity + reassurance'
    },
    {
      timestamp: '2024-03-17T13:00:00',
      time: '01:00 PM',
      angerLevel: 48,
      happiness: 25,
      sadness: 22,
      fear: 5,
      neutral: 0,
      event: 'Responding to intervention'
    },
    {
      timestamp: '2024-03-17T14:00:00',
      time: '02:00 PM',
      angerLevel: 32,
      happiness: 42,
      sadness: 20,
      fear: 6,
      neutral: 0,
      event: 'Improving'
    },
    {
      timestamp: '2024-03-17T15:00:00',
      time: '03:00 PM',
      angerLevel: 22,
      happiness: 58,
      sadness: 15,
      fear: 5,
      neutral: 0,
      event: 'Stabilized'
    }
  ]
};

// All patients for dashboard
export const allPatients: PatientProfile[] = [johnDoeData, margaretSmithData, robertJohnsonData];

// Get patient by ID
export const getPatientById = (id: string): PatientProfile | undefined => {
  return allPatients.find(p => p.id === id);
};

// Get all high-risk patients
export const getHighRiskPatients = (): PatientProfile[] => {
  return allPatients.filter(p => p.riskLevel === 'high');
};

// Calculate average anger level for a patient
export const getAverageAngerLevel = (patient: PatientProfile): number => {
  const total = patient.emotionData.reduce((sum, point) => sum + point.angerLevel, 0);
  return total / patient.emotionData.length;
};

// Get peak anger level for a patient
export const getPeakAngerLevel = (patient: PatientProfile): PatientEmotionDataPoint => {
  return patient.emotionData.reduce((max, point) => 
    point.angerLevel > max.angerLevel ? point : max
  );
};

// Get interventions for a patient
export const getInterventions = (patient: PatientProfile): PatientEmotionDataPoint[] => {
  return patient.emotionData.filter(point => point.intervention);
};
