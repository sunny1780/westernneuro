/**
 * Content for each service page. Same design (ServiceSection + InfoSection), different data & pictures.
 * Edit this file to change text and image paths per service.
 */

export const epilepsyContent = {
  serviceSection: {
    title: "Epilepsy",
    description: "Expert care for epilepsy management with advanced diagnostics, personalized treatment plans, and ongoing support to help you achieve optimal seizure control and quality of life.",
    image: "/images/services/1.jpg",
    descriptionColor: "text-[#687076]",
    showButtons: true,
  },
  infoSection: {
    image1: "/images/services/2.jpg",
    image2: "/images/services/3.jpg",
    block1ImageOnly: true,
    block1ImageStyle: { width: '100%', maxWidth: '1280px', aspectRatio: '1280/520', borderRadius: '17.59px' },
    block1: {
      title1: "Understanding Epilepsy",
      desc1: "Epilepsy is a chronic neurological condition characterized by recurrent seizures that are caused by abnormal cerebral nerve cell activity. There is a distinction between a patient who has one seizure and a patient who has epilepsy.",
      title2: "Types of Epilepsy",
      desc2: "Epilepsy can be classified as either idiopathic or symptomatic. Idiopathic epilepsy has no known cause, and the person has no other signs of neurological disease or mental deficiency. Symptomatic epilepsy results from a known condition such as stroke, head injury, poisoning, Lennox-Gastaut syndrome, or cerebral palsy.",
    },
    contentBlock: {
      mainTitle: "Our Diagnostic and Treatment Approach for Epilepsy",
      intro: "Dr. Faisal offers comprehensive epilepsy care using advanced diagnostic tools combined with individualized neurological evaluation. Each patient's care plan is developed based on seizure type, frequency, triggers, lifestyle factors, and overall health.",
      sections: [
        {
          title: "Diagnostic Evaluation Includes:",
          items: [
            "Advanced EEG testing and expert interpretation",
            "Detailed seizure history and neurological examination",
            "Identification of seizure patterns, triggers, and risk factors",
          ],
        },
        {
          title: "Treatment Strategies May Include:",
          items: [
            "Personalized anti-seizure medication selection and adjustment",
            "Ongoing medication monitoring to minimize side effects",
            "Trigger identification and lifestyle modification guidance",
            "Patient and family education for safety and seizure preparedness",
            "Long-term follow-up and care optimization",
          ],
        },
      ],
    },
    animate: true,
  },
};

export const headachesContent = {
  serviceSection: {
    title: "Headaches & Migraines",
    titleLines: ["Headaches &", "Migraines"],
    description: "Specialized treatment for headaches and migraines using evidence-based approaches to reduce frequency, severity, and impact on your daily life.",
    image: "/images/services/head1.jpg",
    imageStyle: { width: "510.24px", maxWidth: "100%", height: "599.97px", borderRadius: "17.59px" },
    textFirst: true,
    descriptionColor: "text-[#687076]",
    showButtons: true,
  },
  infoSection: {
    image1: "/images/services/head2.jpg",
    image2: "/images/services/head3.png",
    block1ImageLeft: true,
    imageDimensions: "short",
    animate: true,
    block1: {
      title1: "Types of Headaches",
      desc1: "We diagnose and treat various headache types including tension headaches, migraines, cluster headaches, and secondary headaches caused by underlying conditions. Each type requires specific treatment approaches.",
      title2: "Our Treatment Approach",
      desc2: "Dr. Faisal conducts thorough neurological examinations to identify headache patterns and triggers, developing personalized treatment plans to provide effective relief and prevent future episodes.",
    },
    extra: {
      sections: [
        {
          title: "Treatment Options",
          desc: "We offer preventive medication therapy, acute headache relief medications, lifestyle modification counseling, trigger identification, and advanced treatment options for chronic conditions.",
        },
      ],
      list: null,
    },
    block2: {
      title1: "Headache & Migraine Care",
      desc1: "We evaluate and treat all types of headaches—migraine, tension-type, cluster, and others. Our approach combines accurate diagnosis with preventive and acute treatments tailored to your pattern and goals.",
      title2: "Prevention & Acute Relief",
      desc2: "We help you reduce headache frequency with preventive therapies and improve acute relief with the right medications and lifestyle adjustments. Your comfort and daily function are our focus.",
    },
  },
};

export const neuromuscularContent = {
  serviceSection: {
    title: "Neuromuscular Disorders",
    titleLines: ["Neuromuscular", "Disorders"],
    description: "Specialized care for neuromuscular disorders using advanced EMG and nerve conduction studies for accurate diagnosis and targeted treatment.",
    image: "/images/kira.png",
    layout: "sideBySide",
    textFirst: true,
    descriptionColor: "text-[#687076]",
    showButtons: true,
    imageStyle: { width: "510px", maxWidth: "100%", height: "600px", borderRadius: "17.59px" },
  },
  infoSection: {
    image1: "/images/services/disorder2.jpg",
    image2: "/images/services/disorder3.jpg",
    block1TextOnly: true,
    block1ImageLeft: true,
    animate: true,
    block1: {
      title1: "What Are Neuromuscular Disorders",
      desc1: "Neuromuscular disorders affect the peripheral nervous system, including nerves that control voluntary muscles and transmit sensory information. These conditions can cause muscle weakness, pain, numbness, and impaired mobility.",
      title2: "Electromyography (EMG)",
      desc2: "EMG testing measures the electrical activity of muscles at rest and during contraction, helping identify muscle or nerve dysfunction with precision and accuracy.",
    },
    block2: {
      title1: "Muscle and Nerve Disorders",
      desc1: "We diagnose and treat various conditions including peripheral neuropathy, carpal tunnel syndrome, radiculopathy, myopathy, and other nerve compression syndromes affecting daily function.",
      title2: "Nerve Conduction Studies",
      desc2: "Nerve conduction studies evaluate how well and how fast nerves send electrical signals, essential for diagnosing nerve damage, compression, or disease with detailed analysis.",
    },
    block3: {
      title1: "Our Diagnostic Process",
      desc1: "Dr. Faisal's specialized training in clinical neurophysiology and neuromuscular disorders ensures expert interpretation of all diagnostic tests combined with comprehensive clinical evaluation.",
      title2: "Treatment and Management",
      desc2: "Treatment plans are individualized based on the specific disorder and may include medications, physical therapy referrals, lifestyle modifications, and ongoing monitoring to improve function and quality of life.",
      image: "/images/services/disorder1.png",
    },
    extra: { sections: [], list: null },
  },
};

export const nerveConductionContent = {
  serviceSection: {
    title: "Nerve Conduction Studies",
    description: "Nerve conduction studies (NCS) and electromyography (EMG) help diagnose conditions affecting nerves and muscles. We perform these tests in a comfortable setting and use results to guide your treatment plan.",
    image: "/images/services/3.jpg",
  },
  infoSection: {
    image1: "/images/services/1.jpg",
    image2: "/images/services/2.jpg",
    block1: {
      title1: "What Are NCS & EMG?",
      desc1: "Nerve conduction studies measure how well your nerves carry electrical signals. EMG assesses muscle response. Together they help diagnose neuropathy, carpal tunnel syndrome, radiculopathy, myopathy, and other conditions.",
      title2: "What to Expect",
      desc2: "Tests are performed in our office. You may feel brief mild sensations during the test. Results are interpreted by our board-certified specialists and discussed with you to guide next steps.",
    },
    block2: {
      title1: "When Are They Used?",
      desc1: "We recommend NCS/EMG when you have symptoms such as numbness, tingling, weakness, or pain that may stem from nerve or muscle disease. Testing helps confirm or rule out specific diagnoses.",
      title2: "Expert Interpretation",
      desc2: "Our physicians are trained in clinical neurophysiology and perform and interpret these studies to ensure accurate diagnosis and a clear plan for your care.",
    },
  },
};

export const sleepDisordersContent = {
  serviceSection: {
    title: "Sleep Disorders",
    description: "Expert diagnosis and treatment of sleep disorders, including sleep apnea, narcolepsy, and restless leg syndrome, through advanced sleep studies and personalized care.",
    image: "/images/services/sleep1.jpg",
    descriptionColor: "text-[#687076]",
    showButtons: true,
  },
  infoSection: {
    image1: "/images/services/sleep2.jpg",
    image2: "/images/services/sleep3.jpg",
    block1: {
      title1: "The Importance of Sleep",
      desc1: "Sleep is absolutely essential for normal, healthy function. Scientists and medical professionals still have much to learn about this complicated physiological phenomenon.",
      title2: "Prevalence of Sleep Disorders",
      desc2: "According to the National Institute of Neurological Disorders and Stroke, about 40 million people in the United States suffer from chronic long-term sleep disorders each year and an additional 20 million people experience occasional sleep problems.",
    },
    block2: {
      title1: "Sleep Medicine Expertise",
      desc1: "We diagnose and treat sleep apnea, insomnia, restless legs syndrome, narcolepsy, and other sleep disorders. Poor sleep affects your health, mood, and safety—we help you get the right diagnosis and treatment.",
      title2: "Sleep Studies",
      desc2: "When indicated, we arrange in-lab or home sleep studies to evaluate breathing, sleep stages, and other factors. Results guide treatment such as CPAP, oral appliances, or other therapies.",
    },
    hideBlock2: true,
    block3: {
      image: "/images/services/sleep3.jpg",
      items: [
        {
          title: "Narcolepsy",
          desc: "A chronic neurological disorder affecting the brain's ability to regulate sleep-wake cycles, causing excessive daytime sleepiness and sudden sleep attacks that significantly impact daily activities.",
        },
        {
          title: "Restless Leg Syndrome",
          desc: "An uncomfortable sensation in the legs accompanied by an irresistible urge to move them, typically worsening during rest and evening hours, significantly disrupting sleep quality and daytime function.",
        },
        {
          title: "Sleep Apnea",
          desc: "A potentially serious disorder where breathing repeatedly stops and starts during sleep, leading to daytime fatigue, cardiovascular problems, and other health complications if left untreated.",
        },
      ],
    },
    block3Stacked: true,
    animate: true,
  },
};
