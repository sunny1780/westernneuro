import React, { useEffect } from 'react';

const bullet = (text) => (
  <li className="flex items-start" key={text}>
    <span className="text-blue-600 mr-2">•</span>
    <span>{text}</span>
  </li>
);

const Section = ({ title, children }) => (
  <section className="mb-10">
    <h2 className="text-3xl font-bold text-gray-900 mb-4 text-left">{title}</h2>
    {children}
  </section>
);

const Blog5 = () => {
  useEffect(() => {
    document.title = 'Bronchitis: Symptoms, Causes & Treatment';

    const description =
      'Learn about bronchitis symptoms, causes, and treatments. Discover when to see a doctor and how to recover faster.';
    let metaDescription = document.querySelector('meta[name="description"]');

    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }

    metaDescription.setAttribute('content', description);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-left">
            Bronchitis Explained: Symptoms, Causes, and Effective Treatments
          </h1>

          <div className="w-full mb-8">
            <img
              src="/images/59.png"
              alt="Bronchitis symptoms and treatment guide"
              className="w-full h-auto rounded-lg shadow-md object-cover"
            />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-gray-700 leading-relaxed mb-4 text-left">
              A persistent cough that just won't quit can be exhausting and worrying. If you've been dealing with a stubborn cough, chest discomfort, and fatigue, bronchitis may be to blame. While it can feel miserable, most cases of bronchitis are manageable and resolve with proper care.
            </p>
            <p className="text-gray-700 leading-relaxed text-left">
              This guide explains what bronchitis is, what causes it, how it is diagnosed, and what you can do to feel better and prevent it from coming back.
            </p>
          </div>

          <Section title="What Is Bronchitis?">
            <p className="text-gray-700 leading-relaxed mb-4 text-left">
              Bronchitis is an inflammation of the bronchial tubes, the airways that carry air to and from your lungs. When these tubes become irritated and swollen, they produce excess mucus, which leads to coughing, breathing difficulties, and chest discomfort.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4 text-left">Bronchitis comes in two forms:</p>
            <ul className="space-y-2 text-gray-700 text-left">
              {[
                'Acute bronchitis: A short-term condition usually triggered by a viral infection. It typically lasts 1 to 3 weeks and is very common.',
                'Chronic bronchitis: A long-term condition defined as a productive cough lasting at least 3 months in two consecutive years. It is a form of Chronic Obstructive Pulmonary Disease (COPD) and is most often caused by long-term smoking.',
              ].map(bullet)}
            </ul>
          </Section>

          <Section title="Signs and Symptoms of Bronchitis">
            <p className="text-gray-700 leading-relaxed mb-4 text-left">
              The most prominent symptom of bronchitis is a cough. Other symptoms may include:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4 text-left">
              {[
                'A persistent cough that may produce clear, white, yellow, or greenish mucus',
                'Chest soreness or tightness',
                'Shortness of breath or wheezing',
                'Low-grade fever and chills',
                'Fatigue and general body aches',
                'Sore throat or mild headache',
                'Runny or blocked nose (in acute bronchitis)',
              ].map(bullet)}
            </ul>
            <p className="text-gray-700 leading-relaxed text-left">
              In chronic bronchitis, the cough may be present most days and worsen over time. Breathlessness tends to become more noticeable with physical activity.
            </p>
          </Section>

          <Section title="What Causes Bronchitis?">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3 text-left">Acute Bronchitis</h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-left">
                Acute bronchitis is almost always caused by a viral infection, often the same viruses responsible for colds and flu. Less commonly, a bacterial infection may be involved.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-left">Common triggers include:</p>
              <ul className="space-y-2 text-gray-700 text-left">
                {[
                  'Influenza (flu) virus',
                  'Respiratory syncytial virus (RSV)',
                  'Common cold viruses',
                  'Exposure to irritants such as smoke, dust, or chemical fumes',
                ].map(bullet)}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3 text-left">Chronic Bronchitis</h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-left">Chronic bronchitis is most commonly caused by:</p>
              <ul className="space-y-2 text-gray-700 text-left">
                {[
                  'Long-term cigarette smoking (the leading cause)',
                  'Prolonged exposure to air pollution, dust, or chemical irritants',
                  'Recurrent respiratory infections over time',
                ].map(bullet)}
              </ul>
            </div>
          </Section>

          <Section title="Risk Factors for Bronchitis">
            <p className="text-gray-700 leading-relaxed mb-4 text-left">
              Anyone can develop acute bronchitis, but certain factors increase the risk:
            </p>
            <ul className="space-y-2 text-gray-700 text-left">
              {[
                'Smoking or regular exposure to secondhand smoke',
                'Weakened immune system (due to illness, age, or medication)',
                'Gastroesophageal reflux disease (GERD), which can irritate the airways',
                'Frequent exposure to lung irritants in the workplace',
                'Living in areas with high air pollution',
                'Cold and flu season contact',
              ].map(bullet)}
            </ul>
          </Section>

          <Section title="How Is Bronchitis Diagnosed?">
            <p className="text-gray-700 leading-relaxed mb-4 text-left">
              Your doctor will typically diagnose bronchitis based on your symptoms and a physical examination. During the exam, they will listen to your lungs with a stethoscope to check for abnormal breathing sounds.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4 text-left">Additional tests may include:</p>
            <ul className="space-y-2 text-gray-700 text-left">
              {[
                'Chest X-ray: To rule out pneumonia or other lung conditions',
                'Sputum tests: To check for bacterial infection or signs of allergies',
                'Pulmonary function tests: To assess lung capacity (often used for chronic bronchitis)',
                'Blood tests: To identify infection or inflammation',
              ].map(bullet)}
            </ul>
          </Section>

          <Section title="Treatment Options for Bronchitis">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3 text-left">Treating Acute Bronchitis</h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-left">
                Since acute bronchitis is usually caused by a virus, antibiotics are not effective and are not typically prescribed. Treatment focuses on relieving symptoms:
              </p>
              <ul className="space-y-2 text-gray-700 mb-4 text-left">
                {[
                  'Rest and adequate fluid intake',
                  'Over-the-counter cough suppressants or expectorants',
                  'Pain relievers such as ibuprofen or acetaminophen for fever and discomfort',
                  'A humidifier to add moisture to the air and ease breathing',
                  'Avoiding smoke and other respiratory irritants',
                ].map(bullet)}
              </ul>
              <p className="text-gray-700 leading-relaxed text-left">
                Most people recover from acute bronchitis fully within 2 to 3 weeks, though a mild cough may linger for several weeks afterward.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3 text-left">Treating Chronic Bronchitis</h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-left">Chronic bronchitis requires ongoing management. Treatment options include:</p>
              <ul className="space-y-2 text-gray-700 text-left">
                {[
                  'Quitting smoking, the single most important step',
                  'Bronchodilators (inhalers) to open the airways and ease breathing',
                  'Inhaled corticosteroids to reduce airway inflammation',
                  'Pulmonary rehabilitation programs',
                  'Oxygen therapy in advanced cases',
                  'Antibiotics when a bacterial infection is confirmed',
                ].map(bullet)}
              </ul>
            </div>
          </Section>

          <Section title="Medications for Bronchitis">
            <p className="text-gray-700 leading-relaxed mb-4 text-left">
              Depending on the type and severity of bronchitis, the following medications may be used:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4 text-left">
              {[
                'Cough suppressants: Help reduce the urge to cough and improve sleep',
                'Expectorants: Thin mucus and make it easier to cough up',
                'Bronchodilators: Relax and widen the airways, used mainly for chronic bronchitis',
                'Corticosteroids: Reduce inflammation in the airways',
                'Antibiotics: Only if a bacterial infection is confirmed by your doctor',
              ].map(bullet)}
            </ul>
            <p className="text-gray-700 leading-relaxed text-left">
              Always consult a healthcare provider before starting or combining medications.
            </p>
          </Section>

          <Section title="Side Effects of Bronchitis Treatment">
            <p className="text-gray-700 leading-relaxed mb-4 text-left">
              Common side effects, depending on the treatment, may include:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4 text-left">
              {[
                'Drowsiness or dizziness from cough medications',
                'Stomach upset from certain pain relievers',
                'Dry mouth or throat irritation from inhalers',
                'Increased heart rate from some bronchodilators',
              ].map(bullet)}
            </ul>
            <p className="text-gray-700 leading-relaxed text-left">
              Discuss any concerns about side effects with your healthcare provider before beginning treatment.
            </p>
          </Section>

          <Section title="Living With Bronchitis">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3 text-left">Managing Acute Bronchitis at Home</h3>
              <ul className="space-y-2 text-gray-700 text-left">
                {[
                  'Get plenty of rest and stay well hydrated',
                  'Use honey and warm liquids to soothe the throat',
                  'Breathe in steam to loosen mucus',
                  'Avoid smoke and polluted environments',
                  'Elevate your head when sleeping to ease nighttime coughing',
                ].map(bullet)}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3 text-left">Managing Chronic Bronchitis</h3>
              <ul className="space-y-2 text-gray-700 mb-4 text-left">
                {[
                  'Work closely with your doctor to monitor lung function',
                  'Follow your prescribed medication plan consistently',
                  'Exercise regularly within your safe limits - pulmonary rehab can help',
                  'Get annual flu vaccines and recommended pneumococcal vaccines',
                  'Avoid respiratory infections by washing hands frequently',
                ].map(bullet)}
              </ul>
              <p className="text-gray-700 leading-relaxed bg-green-50 p-4 rounded-lg font-medium text-left">
                With proper management, many people with chronic bronchitis maintain a good quality of life.
              </p>
            </div>
          </Section>

          <Section title="When to See a Doctor">
            <p className="text-gray-700 leading-relaxed mb-4 text-left">
              Seek medical attention if you experience any of the following:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4 text-left">
              {[
                'A cough lasting more than 3 weeks',
                'High fever (above 100.4 degrees F / 38 degrees C)',
                'Coughing up blood or blood-streaked mucus',
                'Shortness of breath at rest',
                'Symptoms that worsen rather than improve after a week',
              ].map(bullet)}
            </ul>
            <p className="text-gray-700 leading-relaxed text-left">
              These may indicate pneumonia, asthma, or another condition that requires prompt medical evaluation.
            </p>
          </Section>

          <Section title="Bronchitis Support and Resources">
            <p className="text-gray-700 leading-relaxed text-left">
              For individuals with chronic bronchitis or COPD, pulmonary rehabilitation programs, support groups, and online communities can provide education, motivation, and connection. Organizations such as the American Lung Association offer helpful resources for patients and families.
            </p>
          </Section>

          <section className="mb-10">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-left">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                {
                  question: '1. Is bronchitis contagious?',
                  answer:
                    'Acute bronchitis caused by a viral infection can be contagious. The virus can spread through airborne droplets when an infected person coughs or sneezes. Chronic bronchitis is not contagious, as it is caused by long-term irritation rather than infection.',
                },
                {
                  question: '2. Can bronchitis turn into pneumonia?',
                  answer:
                    'In some cases, particularly in individuals with weakened immune systems, bronchitis can progress to pneumonia. This is why it is important to monitor symptoms and seek medical attention if they worsen or do not improve.',
                },
                {
                  question: '3. Do I need antibiotics for bronchitis?',
                  answer:
                    'In most cases, no. Acute bronchitis is caused by viruses, and antibiotics are not effective against viruses. Antibiotics are only appropriate when a bacterial infection has been confirmed by a doctor.',
                },
                {
                  question: '4. How long does bronchitis last?',
                  answer:
                    'Acute bronchitis typically resolves within 1 to 3 weeks. However, a lingering cough may persist for several weeks after the main illness clears. Chronic bronchitis is a long-term condition that requires ongoing management.',
                },
                {
                  question: '5. Can I exercise with bronchitis?',
                  answer:
                    'Light activity may be tolerable depending on how you feel, but it is generally advisable to rest during the acute phase of illness. Avoid strenuous exercise until your symptoms have significantly improved.',
                },
              ].map((item) => (
                <div className="bg-gray-50 p-6 rounded-lg" key={item.question}>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 text-left">{item.question}</h3>
                  <p className="text-gray-700 leading-relaxed text-left">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <Section title="Final Thoughts">
            <p className="text-gray-700 leading-relaxed mb-4 text-left">
              Bronchitis, whether acute or chronic, is a condition that deserves proper attention and care. While acute bronchitis usually clears on its own, chronic bronchitis requires consistent management and lifestyle changes to protect lung health over the long term.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4 text-left">
              The most powerful step anyone can take to prevent and manage bronchitis is to avoid smoking and limit exposure to lung irritants. With the right care, most people with bronchitis can breathe easier and get back to living their lives fully.
            </p>
            <p className="text-gray-700 leading-relaxed text-left">
              If you have concerns about your symptoms, do not hesitate to speak with your healthcare provider.
            </p>
          </Section>

          <section className="border-t pt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-left">References</h2>
            <div className="space-y-3 text-sm text-gray-600">
              <div className="text-left">
                <p className="font-medium text-gray-800">American Lung Association.</p>
                <p>Bronchitis - Symptoms, Diagnosis & Treatment.</p>
                <a href="https://www.lung.org/lung-health-diseases/lung-disease-lookup/bronchitis" className="text-blue-600 hover:underline break-all">
                  https://www.lung.org/lung-health-diseases/lung-disease-lookup/bronchitis
                </a>
              </div>
              <div className="text-left">
                <p className="font-medium text-gray-800">National Heart, Lung, and Blood Institute (NHLBI).</p>
                <p>Bronchitis.</p>
                <a href="https://www.nhlbi.nih.gov/health/bronchitis" className="text-blue-600 hover:underline break-all">
                  https://www.nhlbi.nih.gov/health/bronchitis
                </a>
              </div>
              <div className="text-left">
                <p className="font-medium text-gray-800">MedlinePlus.</p>
                <p>Bronchitis - Symptoms and Information.</p>
                <a href="https://medlineplus.gov/bronchitis.html" className="text-blue-600 hover:underline break-all">
                  https://medlineplus.gov/bronchitis.html
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Blog5;
