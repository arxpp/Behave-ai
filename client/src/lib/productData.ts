export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  benefits: string[];
}

export interface HowItWorks {
  step: number;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  facility: string;
}

export interface PricingPlan {
  name: string;
  description: string;
  price: string;
  period: string;
  features: string[];
  cta: string;
  highlighted: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const features: Feature[] = [
  {
    id: "real-time-detection",
    title: "Real-Time Facial Recognition",
    description: "Advanced AI continuously monitors patient facial expressions and emotional states, detecting early signs of anger or distress.",
    icon: "👁️",
    benefits: ["Instant detection", "24/7 monitoring", "Non-intrusive technology"]
  },
  {
    id: "instant-alerts",
    title: "Instant Caregiver Alerts",
    description: "The moment a potential outburst is detected, caregivers receive immediate notifications on their devices with patient location and severity level.",
    icon: "🚨",
    benefits: ["Sub-second alerts", "Mobile & desktop", "Severity indicators"]
  },
  {
    id: "caregiver-dashboard",
    title: "Caregiver Dashboard",
    description: "Comprehensive dashboard showing real-time patient status, alert history, response times, and actionable insights for better care planning.",
    icon: "📊",
    benefits: ["Real-time overview", "Historical analytics", "Team coordination"]
  },
  {
    id: "predictive-analytics",
    title: "Predictive Analytics",
    description: "Machine learning identifies patterns in patient behavior, helping facilities anticipate high-risk times and adjust care strategies proactively.",
    icon: "📈",
    benefits: ["Pattern recognition", "Risk prediction", "Care optimization"]
  },
  {
    id: "privacy-first",
    title: "Privacy & Dignity First",
    description: "HIPAA-compliant system with encrypted data storage and processing. Facial data is analyzed locally and never stored permanently.",
    icon: "🔒",
    benefits: ["End-to-end encryption", "Local processing", "HIPAA compliant"]
  },
  {
    id: "integration",
    title: "Seamless Integration",
    description: "Integrates with existing care management systems and facility workflows without disrupting established processes or requiring extensive retraining.",
    icon: "🔗",
    benefits: ["Easy setup", "Existing system compatible", "Minimal training needed"]
  }
];

export const howItWorks: HowItWorks[] = [
  {
    step: 1,
    title: "Continuous Monitoring",
    description: "Behave AI cameras monitor patient areas 24/7, analyzing facial expressions and emotional cues in real-time.",
    icon: "📹"
  },
  {
    step: 2,
    title: "AI Detection",
    description: "Our advanced machine learning model identifies early signs of anger, frustration, or distress with high accuracy.",
    icon: "🧠"
  },
  {
    step: 3,
    title: "Instant Alert",
    description: "Caregivers receive immediate notifications with patient location, severity level, and recommended interventions.",
    icon: "📱"
  },
  {
    step: 4,
    title: "Proactive Response",
    description: "Caregivers can respond quickly with de-escalation techniques, preventing incidents before they escalate.",
    icon: "✋"
  }
];

export const testimonials: Testimonial[] = [
  {
    quote: "Behave AI has transformed how we manage behavioral incidents. Response times dropped by 40%, and our staff feels more confident in their ability to prevent escalations.",
    author: "Margaret Chen",
    role: "Care Facility Director",
    facility: "Sunrise Memory Care, Sydney"
  },
  {
    quote: "The system respects our residents' dignity while giving us peace of mind. We've seen a significant reduction in incidents, and families appreciate the proactive approach.",
    author: "Dr. James Wilson",
    role: "Medical Director",
    facility: "Coastal Aged Care, Melbourne"
  },
  {
    quote: "Implementation was seamless. Our staff adapted quickly, and within weeks we were seeing real improvements in incident management and staff morale.",
    author: "Patricia O'Brien",
    role: "Operations Manager",
    facility: "Heritage Care Homes, Brisbane"
  }
];

export const pricingPlans: PricingPlan[] = [
  {
    name: "Essential",
    description: "Perfect for small care facilities (20-50 residents)",
    price: "$2,999",
    period: "per month",
    features: [
      "Up to 50 resident monitoring",
      "Real-time alerts",
      "Basic dashboard",
      "Email support",
      "Monthly reports"
    ],
    cta: "Start Free Trial",
    highlighted: false
  },
  {
    name: "Professional",
    description: "Ideal for medium facilities (50-150 residents)",
    price: "$5,999",
    period: "per month",
    features: [
      "Up to 150 resident monitoring",
      "Real-time alerts with SMS",
      "Advanced dashboard & analytics",
      "Priority phone support",
      "Weekly reports & insights",
      "Custom integrations",
      "Staff training included"
    ],
    cta: "Start Free Trial",
    highlighted: true
  },
  {
    name: "Enterprise",
    description: "For large facilities and multi-site operations",
    price: "Custom",
    period: "contact sales",
    features: [
      "Unlimited resident monitoring",
      "All Professional features",
      "Dedicated account manager",
      "24/7 phone support",
      "Custom analytics & reporting",
      "Advanced security features",
      "On-site training & support"
    ],
    cta: "Request Demo",
    highlighted: false
  }
];

export const faqItems: FAQItem[] = [
  {
    question: "How does Behave AI respect patient privacy?",
    answer: "Behave AI is designed with privacy as a core principle. All facial analysis happens locally on secure servers, and facial data is never stored permanently. The system only retains alert events and behavioral patterns in an anonymized format. We comply fully with HIPAA and Australian privacy regulations."
  },
  {
    question: "What is the accuracy rate of the detection system?",
    answer: "Our AI model achieves 94% accuracy in detecting early signs of anger or distress across diverse patient populations. The system continuously learns from facility-specific patterns, improving accuracy over time. We recommend pairing the system with staff training for optimal results."
  },
  {
    question: "How long does implementation take?",
    answer: "Most facilities are operational within 2-4 weeks. This includes hardware installation, system configuration, staff training, and a 2-week pilot period. Our implementation team works closely with your facility to minimize disruption to daily operations."
  },
  {
    question: "Can the system integrate with our existing care management software?",
    answer: "Yes! Behave AI integrates with most major care management platforms including Aged Care Quality Standards (ACQS) systems. Our technical team will work with your IT department to ensure seamless integration. Custom integrations are available for enterprise clients."
  },
  {
    question: "What happens if the system detects an outburst risk?",
    answer: "Caregivers receive an immediate alert with the patient's location and severity level (low, medium, high). The system provides suggested de-escalation techniques based on the patient's history. Caregivers can then respond with appropriate interventions, from simple check-ins to immediate assistance."
  },
  {
    question: "Is staff training required?",
    answer: "Yes, we provide comprehensive training for all staff members. Training covers system operation, understanding alerts, de-escalation techniques, and privacy protocols. Initial training is typically 4-6 hours, with ongoing support available. All training materials are provided in multiple formats."
  },
  {
    question: "What is the ROI for implementing Behave AI?",
    answer: "Facilities typically see ROI within 6-12 months through reduced incident-related costs, decreased staff turnover, fewer hospitalizations, and improved operational efficiency. Average savings include 30-40% reduction in incident response time and 25-35% reduction in behavioral incident costs."
  },
  {
    question: "How does the system handle false positives?",
    answer: "Our AI is trained to minimize false positives while maintaining high sensitivity. The system learns facility-specific patterns and adjusts thresholds accordingly. Staff can provide feedback on alerts, which continuously improves accuracy. A false positive rate of less than 5% is typical after the first month."
  }
];

export const stats = [
  { label: "Facilities Using CareMind", value: "150+" },
  { label: "Patients Monitored Daily", value: "8,000+" },
  { label: "Average Response Time", value: "45 seconds" },
  { label: "Incident Reduction", value: "35%" }
];
