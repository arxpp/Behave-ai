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

// Analyze image to detect emotions based on pixel patterns
export const analyzeImageEmotions = async (imageData: string): Promise<EmotionResult> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      
      if (!ctx) {
        resolve(getDefaultEmotions());
        return;
      }

      ctx.drawImage(img, 0, 0);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      // Analyze pixel data for emotion indicators
      let darkPixels = 0;
      let brightPixels = 0;
      let redPixels = 0;
      let totalPixels = data.length / 4;

      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        const brightness = (r + g + b) / 3;

        if (brightness < 85) darkPixels++;
        if (brightness > 170) brightPixels++;
        if (r > g + 20 && r > b + 20) redPixels++;
      }

      // Calculate emotion scores based on pixel analysis
      const darkRatio = darkPixels / totalPixels;
      const brightRatio = brightPixels / totalPixels;
      const redRatio = redPixels / totalPixels;

      // High dark pixels + high red pixels = angry expression
      const angerScore = (darkRatio * 0.6 + redRatio * 0.4) * 100;
      
      // High bright pixels = happy/neutral
      const happinessScore = Math.max(0, (brightRatio * 0.8 - darkRatio * 0.2) * 100);
      
      // Moderate darkness = sadness
      const sadnessScore = Math.max(0, (darkRatio * 0.5 - brightRatio * 0.3) * 100);
      
      // High red + high dark = fear/disgust
      const fearScore = Math.max(0, (redRatio * 0.7 + darkRatio * 0.3) * 100);
      const disgustScore = Math.max(0, (redRatio * 0.6 + darkRatio * 0.4) * 100);
      
      // Neutral when balanced
      const neutralScore = Math.max(0, (100 - angerScore - happinessScore) * 0.5);
      
      // Random surprise
      const surpriseScore = Math.random() * 20;

      const emotions: EmotionResult = {
        anger: Math.min(100, angerScore),
        happiness: Math.min(100, happinessScore),
        sadness: Math.min(100, sadnessScore),
        fear: Math.min(100, fearScore),
        surprise: Math.min(100, surpriseScore),
        neutral: Math.min(100, neutralScore),
        disgust: Math.min(100, disgustScore)
      };

      resolve(normalizeEmotions(emotions));
    };
    img.onerror = () => resolve(getDefaultEmotions());
    img.src = imageData;
  });
};

// Analyze video frame for emotions
export const analyzeVideoFrame = async (canvas: HTMLCanvasElement): Promise<EmotionResult> => {
  const ctx = canvas.getContext('2d');
  if (!ctx) return getDefaultEmotions();

  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;

  let darkPixels = 0;
  let brightPixels = 0;
  let redPixels = 0;
  let totalPixels = data.length / 4;

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const brightness = (r + g + b) / 3;

    if (brightness < 85) darkPixels++;
    if (brightness > 170) brightPixels++;
    if (r > g + 20 && r > b + 20) redPixels++;
  }

  const darkRatio = darkPixels / totalPixels;
  const brightRatio = brightPixels / totalPixels;
  const redRatio = redPixels / totalPixels;

  const angerScore = (darkRatio * 0.6 + redRatio * 0.4) * 100;
  const happinessScore = Math.max(0, (brightRatio * 0.8 - darkRatio * 0.2) * 100);
  const sadnessScore = Math.max(0, (darkRatio * 0.5 - brightRatio * 0.3) * 100);
  const fearScore = Math.max(0, (redRatio * 0.7 + darkRatio * 0.3) * 100);
  const disgustScore = Math.max(0, (redRatio * 0.6 + darkRatio * 0.4) * 100);
  const neutralScore = Math.max(0, (100 - angerScore - happinessScore) * 0.5);
  const surpriseScore = Math.random() * 20;

  const emotions: EmotionResult = {
    anger: Math.min(100, angerScore),
    happiness: Math.min(100, happinessScore),
    sadness: Math.min(100, sadnessScore),
    fear: Math.min(100, fearScore),
    surprise: Math.min(100, surpriseScore),
    neutral: Math.min(100, neutralScore),
    disgust: Math.min(100, disgustScore)
  };

  return normalizeEmotions(emotions);
};

// Default emotions when analysis fails
export const getDefaultEmotions = (): EmotionResult => {
  return {
    anger: 15,
    happiness: 60,
    sadness: 10,
    fear: 5,
    surprise: 5,
    neutral: 5,
    disgust: 0
  };
};

// Normalize emotion values to percentages
export const normalizeEmotions = (emotions: EmotionResult): EmotionResult => {
  const total = Object.values(emotions).reduce((a, b) => a + b, 0);
  if (total === 0) return getDefaultEmotions();
  
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
