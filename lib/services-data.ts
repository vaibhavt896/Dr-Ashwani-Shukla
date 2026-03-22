export interface ServiceData {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  icon: string;
  color: string;
  conditions: string[];
  whenToVisit: string[];
  faq: { q: string; a: string }[];
}

export const servicesData: Record<string, ServiceData> = {
  "general-pediatrics": {
    slug: "general-pediatrics",
    title: "General Pediatrics",
    description: "Trusted treatment for everyday childhood illnesses — from fever to flu.",
    longDescription:
      "General pediatrics covers the full spectrum of childhood health issues. Dr. Shukla brings 25+ years of experience to diagnosing and treating common childhood illnesses, ensuring your child recovers quickly and safely. From seasonal infections to chronic cough, from skin rashes to stomach problems — we've seen it all.",
    icon: "Stethoscope",
    color: "sky",
    conditions: [
      "Fever and viral infections",
      "Cough, cold, and respiratory issues",
      "Ear infections (otitis media)",
      "Throat infections and tonsillitis",
      "Stomach pain and digestive issues",
      "Skin rashes and allergies",
      "Urinary tract infections",
      "Worm infestations",
      "Seasonal diseases (dengue, malaria, typhoid)",
      "Routine health check-ups",
    ],
    whenToVisit: [
      "Fever lasting more than 3 days",
      "Persistent cough or difficulty breathing",
      "Ear pain or discharge",
      "Rash that doesn't improve",
      "Recurring stomach pain",
      "Routine wellness check-ups",
    ],
    faq: [
      {
        q: "How often should I bring my child for check-ups?",
        a: "For healthy children, we recommend check-ups at 1, 2, 4, 6, 9, 12, 15, 18, and 24 months, then annually. More frequent visits may be needed if your child has specific health concerns.",
      },
      {
        q: "When should I worry about a fever?",
        a: "For newborns (0-3 months), any fever above 100.4°F needs immediate attention. For older children, worry if fever exceeds 104°F, lasts more than 3 days, or is accompanied by other concerning symptoms like difficulty breathing or unusual lethargy.",
      },
    ],
  },
  "growth-development": {
    slug: "growth-development",
    title: "Growth & Development",
    description: "Monitoring milestones, addressing concerns, and ensuring healthy growth.",
    longDescription:
      "Every child grows at their own pace, but certain milestones help us understand if development is on track. Dr. Shukla provides comprehensive growth monitoring, developmental screening, and nutritional guidance to ensure your child reaches their full potential.",
    icon: "TrendingUp",
    color: "honey",
    conditions: [
      "Growth monitoring (height, weight, head circumference)",
      "Developmental milestone assessment",
      "Speech and language delay evaluation",
      "Motor skill development concerns",
      "Nutritional assessment and guidance",
      "Failure to thrive evaluation",
      "Short stature assessment",
      "Obesity management",
      "Learning difficulty screening",
      "Behavioral concern assessment",
    ],
    whenToVisit: [
      "Child not meeting expected milestones",
      "Concerns about height or weight",
      "Speech delay or regression",
      "Not walking by 18 months",
      "Feeding difficulties",
      "Regular growth monitoring visits",
    ],
    faq: [
      {
        q: "When should I worry about my child's growth?",
        a: "If your child falls below the 3rd percentile or above the 97th percentile on growth charts, or if growth velocity suddenly changes, it's worth a consultation. Dr. Shukla will evaluate using standardized charts and determine if investigation is needed.",
      },
      {
        q: "My 2-year-old isn't talking yet. Should I be concerned?",
        a: "By 2 years, most children have 50+ words and are starting to combine words. If your child has fewer than 20 words by 18 months or isn't combining words by 24 months, a developmental assessment is recommended.",
      },
    ],
  },
  "adolescent-health": {
    slug: "adolescent-health",
    title: "Adolescent Health",
    description: "Specialized care for teenagers — growth, nutrition, and health guidance.",
    longDescription:
      "Adolescence brings unique health challenges — rapid growth, hormonal changes, nutritional needs, and emotional well-being. Dr. Shukla provides confidential, empathetic care for teenagers, addressing their specific health concerns during this critical transition period.",
    icon: "Users",
    color: "sky",
    conditions: [
      "Puberty-related concerns",
      "Growth and height assessment",
      "Nutritional guidance for teens",
      "Acne and skin problems",
      "Menstrual health concerns",
      "Sports-related health",
      "Obesity and eating concerns",
      "Anemia screening",
      "Thyroid issues",
      "General wellness check-ups",
    ],
    whenToVisit: [
      "Delayed or early puberty signs",
      "Concerns about growth or height",
      "Persistent acne or skin issues",
      "Nutritional or weight concerns",
      "Menstrual irregularities",
      "Annual wellness visit",
    ],
    faq: [
      {
        q: "At what age should a child see a pediatrician vs. a regular doctor?",
        a: "Pediatricians are trained to care for children from birth through 18 years. The adolescent years involve unique health changes that a pediatrician is best equipped to handle. We recommend continuing with a pediatrician until at least 16-18 years.",
      },
    ],
  },
  "chronic-conditions": {
    slug: "chronic-conditions",
    title: "Chronic Condition Management",
    description: "Long-term care for asthma, diabetes, allergies, and more.",
    longDescription:
      "Managing chronic conditions in children requires patience, expertise, and a long-term treatment plan. Dr. Shukla provides comprehensive ongoing care for children with chronic health conditions, working closely with families to ensure optimal quality of life.",
    icon: "Wind",
    color: "forest",
    conditions: [
      "Childhood asthma management",
      "Type 1 diabetes care",
      "Allergic conditions (food, environmental)",
      "Cerebral palsy management",
      "Epilepsy and seizure disorders",
      "Chronic kidney conditions",
      "Heart conditions in children",
      "Autoimmune disorders",
      "Chronic respiratory conditions",
      "Long-term medication management",
    ],
    whenToVisit: [
      "Newly diagnosed chronic condition",
      "Worsening of existing condition",
      "Medication review and adjustment",
      "Regular monitoring visits",
      "Emergency episodes",
      "Growth and development checks",
    ],
    faq: [
      {
        q: "Can my child live a normal life with asthma?",
        a: "Absolutely! With proper management, most asthmatic children lead fully active lives, including sports. The key is identifying triggers, having an action plan, and using preventive medications correctly. Dr. Shukla will create a personalized asthma action plan for your child.",
      },
    ],
  },
  "specialized-treatments": {
    slug: "specialized-treatments",
    title: "Specialized Treatments",
    description: "Targeted care for specific conditions — bed wetting, developmental disorders, and more.",
    longDescription:
      "Some childhood conditions require targeted, specialized treatment approaches. Dr. Shukla offers expert management of specific pediatric conditions that need focused attention and customized treatment plans.",
    icon: "Droplets",
    color: "sky",
    conditions: [
      "Bed wetting (enuresis) treatment",
      "Chronic diarrhea management",
      "Congenital disease management",
      "Child development disorders",
      "Recurrent infection evaluation",
      "Immune deficiency assessment",
      "Genetic condition monitoring",
      "Metabolic disorder management",
    ],
    whenToVisit: [
      "Bed wetting beyond age 5-6",
      "Persistent or recurrent diarrhea",
      "Known congenital condition follow-up",
      "Developmental delay concerns",
      "Frequent infections",
      "Specialist referral evaluation",
    ],
    faq: [
      {
        q: "My 7-year-old still wets the bed. Is this normal?",
        a: "Bed wetting (nocturnal enuresis) is more common than you think — about 10% of 7-year-olds still experience it. It's not your child's fault and not caused by laziness. Dr. Shukla can evaluate underlying causes and create a treatment plan that may include behavioral strategies, alarms, or medication if needed.",
      },
    ],
  },
};
