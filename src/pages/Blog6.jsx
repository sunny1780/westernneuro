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

const Blog6 = () => {
  useEffect(() => {
    document.title = 'Common Cold: Symptoms, Causes & Remedies';

    const description =
      'Discover common cold symptoms, causes, and proven remedies. Learn when to rest at home and when to see a doctor.';
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
            The Common Cold: Everything You Need to Know About Symptoms, Causes, and Recovery
          </h1>

          <div className="w-full mb-8">
            <img
              src="/images/61.jpeg"
              alt="Common cold symptoms and recovery guide"
              className="w-full h-auto rounded-lg shadow-md object-cover"
            />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-gray-700 leading-relaxed mb-4 text-left">
              A runny nose, sore throat, and that unmistakable feeling of coming down with something - the common cold is one of the most familiar illnesses in the world. While it is rarely serious, a cold can disrupt your daily routine and leave you feeling drained for days.
            </p>
            <p className="text-gray-700 leading-relaxed text-left">
              This guide covers everything you need to know about the common cold, including what causes it, how long it lasts, and how to feel better faster.
            </p>
          </div>

          <Section title="What Is the Common Cold?">
            <p className="text-gray-700 leading-relaxed mb-4 text-left">
              The common cold is a mild viral infection of the upper respiratory tract, primarily affecting the nose and throat. It is one of the most frequent illnesses in humans, adults typically catch 2 to 3 colds per year, while young children may experience even more.
            </p>
            <p className="text-gray-700 leading-relaxed text-left">
              More than 200 different viruses can cause a cold, but rhinoviruses are responsible for the majority of cases. Despite being so common, there is still no cure for the cold, but symptoms can be managed effectively.
            </p>
          </Section>

          <div className="w-full mb-10">
            <img
              src="/images/62.jpeg"
              alt="Common cold symptoms and diagnosis"
              className="w-full h-auto rounded-lg shadow-md object-cover"
            />
          </div>

          <Section title="Signs and Symptoms of the Common Cold">
            <p className="text-gray-700 leading-relaxed mb-4 text-left">Cold symptoms usually develop gradually and may include:</p>
            <ul className="space-y-2 text-gray-700 mb-4 text-left">
              {[
                'Runny or stuffy nose',
                'Sore or scratchy throat',
                'Sneezing',
                'Mild cough',
                'Low-grade fever (more common in children)',
                'Mild body aches or headache',
                'Watery eyes',
                'Fatigue or feeling generally unwell',
                'Thick yellow or green nasal discharge as the cold progresses',
              ].map(bullet)}
            </ul>
            <p className="text-gray-700 leading-relaxed text-left">
              Symptoms typically appear 1 to 3 days after exposure to the virus and peak around days 2 to 3. Most people recover fully within 7 to 10 days, although a cough or congestion may linger slightly longer.
            </p>
          </Section>

          <div className="w-full mb-10">
            <img
              src="/images/63.jpeg"
              alt="Common cold recovery and supportive care"
              className="w-full h-auto rounded-lg shadow-md object-cover"
            />
          </div>

          <Section title="Common Cold vs. Flu: What Is the Difference?">
            <p className="text-gray-700 leading-relaxed mb-4 text-left">
              Many people confuse a cold with the flu, but there are key differences:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4 text-left">
              {[
                'Colds come on gradually; flu symptoms appear suddenly and are more severe',
                'Fever is rare with a cold but common and high with the flu',
                'Significant fatigue and body aches are more characteristic of flu than a cold',
                'The flu can lead to serious complications such as pneumonia; colds rarely do',
              ].map(bullet)}
            </ul>
            <p className="text-gray-700 leading-relaxed text-left">
              If you are unsure whether you have a cold or the flu, your doctor can perform a test to determine which virus is responsible.
            </p>
          </Section>

          <Section title="What Causes the Common Cold?">
            <p className="text-gray-700 leading-relaxed mb-4 text-left">
              The common cold is caused by viral infections, most commonly rhinoviruses. The virus enters the body through the eyes, nose, or mouth and quickly infects the lining of the upper respiratory tract.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4 text-left">Colds spread easily through:</p>
            <ul className="space-y-2 text-gray-700 mb-4 text-left">
              {[
                'Direct contact with an infected person (touching, shaking hands)',
                'Touching a contaminated surface and then touching your face',
                'Inhaling airborne droplets from a cough or sneeze',
              ].map(bullet)}
            </ul>
            <p className="text-gray-700 leading-relaxed text-left">
              A person with a cold is most contagious during the first 2 to 3 days of symptoms and generally remains contagious for up to a week.
            </p>
          </Section>

          <Section title="Risk Factors for the Common Cold">
            <p className="text-gray-700 leading-relaxed mb-4 text-left">
              While anyone can catch a cold, certain factors increase susceptibility:
            </p>
            <ul className="space-y-2 text-gray-700 text-left">
              {[
                'Age: Young children are most vulnerable due to immature immune systems',
                'Season: Colds are more common in fall and winter, though they can occur year-round',
                'Weakened immune system: Illness, stress, poor sleep, or medication can reduce immunity',
                'Close contact: Schools, offices, and crowded public spaces increase exposure',
                'Smoking: Damages the respiratory tract lining, making it easier for viruses to take hold',
              ].map(bullet)}
            </ul>
          </Section>

          <Section title="How Is the Common Cold Diagnosed?">
            <p className="text-gray-700 leading-relaxed mb-4 text-left">
              A common cold is usually diagnosed based on symptoms alone and does not typically require a visit to the doctor. However, your doctor may recommend an evaluation if:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4 text-left">
              {[
                'Symptoms are unusually severe or persist beyond 10 days',
                'You develop a high fever',
                'There are signs of a secondary bacterial infection such as a sinus infection or ear infection',
                'You have an underlying condition that makes respiratory illness risky',
              ].map(bullet)}
            </ul>
            <p className="text-gray-700 leading-relaxed text-left">
              In some cases, a throat swab or nasal test may be used to rule out strep throat, the flu, or COVID-19.
            </p>
          </Section>

          <Section title="Treatment Options for the Common Cold">
            <p className="text-gray-700 leading-relaxed mb-6 text-left">
              There is no antiviral medication that cures the common cold. Treatment focuses on relieving symptoms and supporting your body's immune response.
            </p>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3 text-left">Home Remedies and Self-Care</h3>
              <ul className="space-y-2 text-gray-700 text-left">
                {[
                  'Rest: Allow your body the energy it needs to fight the infection',
                  'Stay hydrated: Drink plenty of water, warm broth, or herbal teas',
                  'Honey and lemon: Can soothe a sore throat and reduce coughing (not for children under 1 year)',
                  'Steam inhalation or a warm shower: Helps loosen nasal congestion',
                  'Saltwater gargle: Relieves sore throat discomfort',
                  'Humidifier: Adds moisture to the air, easing breathing',
                  'Saline nasal spray: Helps rinse the nasal passages and reduce stuffiness',
                ].map(bullet)}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3 text-left">Over-the-Counter Medications</h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-left">Several OTC products can help manage cold symptoms:</p>
              <ul className="space-y-2 text-gray-700 mb-4 text-left">
                {[
                  'Decongestants: Reduce nasal stuffiness',
                  'Antihistamines: May help with a runny nose and sneezing',
                  'Cough suppressants and expectorants: Ease coughing',
                  'Pain relievers such as acetaminophen or ibuprofen: Relieve sore throat, headache, and mild fever',
                ].map(bullet)}
              </ul>
              <p className="text-gray-700 leading-relaxed bg-blue-50 p-4 rounded-lg text-left">
                Important: Do not give aspirin to children or teenagers. Always follow dosage instructions carefully.
              </p>
            </div>
          </Section>

          <Section title="Medications for the Common Cold">
            <p className="text-gray-700 leading-relaxed mb-4 text-left">
              No prescription antiviral medications are approved to treat the common cold. Antibiotics are ineffective against viral infections and should not be used unless a secondary bacterial infection is confirmed.
            </p>
            <p className="text-gray-700 leading-relaxed text-left">
              Zinc lozenges and vitamin C supplements have been studied for cold prevention and symptom reduction, with mixed results. Speak with your healthcare provider before starting any supplement routine.
            </p>
          </Section>

          <Section title="Side Effects of Cold Treatments">
            <p className="text-gray-700 leading-relaxed mb-4 text-left">
              Over-the-counter cold medications can have side effects, including:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4 text-left">
              {[
                'Drowsiness from antihistamines',
                'Increased blood pressure or heart rate from decongestants',
                'Nausea or stomach upset from certain pain relievers',
                'Dryness in the mouth, nose, or throat',
              ].map(bullet)}
            </ul>
            <p className="text-gray-700 leading-relaxed text-left">
              Always read medication labels carefully and consult a pharmacist or doctor if you are unsure which product is right for you.
            </p>
          </Section>

          <Section title="Living With and Recovering From a Cold">
            <p className="text-gray-700 leading-relaxed mb-4 text-left">
              Most people recover from a cold within a week to ten days. Here are some tips to help you get through it:
            </p>
            <ul className="space-y-2 text-gray-700 text-left">
              {[
                'Prioritize sleep, your body heals most effectively during rest',
                'Eat nutritious foods, even if your appetite is reduced',
                'Avoid alcohol and smoking, which can slow recovery',
                'Wash your hands frequently to avoid spreading the virus to others',
                'Cover your mouth and nose when coughing or sneezing',
                'Stay home from work or school while contagious to protect those around you',
              ].map(bullet)}
            </ul>
          </Section>

          <Section title="How to Prevent the Common Cold">
            <p className="text-gray-700 leading-relaxed mb-4 text-left">
              While it is impossible to completely avoid colds, you can significantly reduce your risk:
            </p>
            <ul className="space-y-2 text-gray-700 text-left">
              {[
                'Wash your hands thoroughly and frequently with soap and water',
                'Avoid touching your eyes, nose, and mouth with unwashed hands',
                'Disinfect frequently touched surfaces such as phones, doorknobs, and keyboards',
                'Avoid close contact with people who are sick',
                'Maintain a healthy immune system through regular exercise, balanced nutrition, and adequate sleep',
                'Manage stress, which can weaken immune defenses over time',
              ].map(bullet)}
            </ul>
          </Section>

          <Section title="When to See a Doctor">
            <p className="text-gray-700 leading-relaxed mb-4 text-left">
              Seek medical attention if you or your child experiences:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4 text-left">
              {[
                'Fever above 103 degrees F (39.4 degrees C) in adults, or any fever in infants under 3 months',
                'Symptoms that significantly worsen after the first few days',
                'Difficulty breathing or chest pain',
                'Severe headache or sinus pain',
                'Symptoms lasting longer than 10 days without improvement',
                'Signs of ear infection: ear pain, fluid drainage, or hearing changes',
              ].map(bullet)}
            </ul>
            <p className="text-gray-700 leading-relaxed text-left">
              These could signal a secondary bacterial infection or another condition that requires treatment.
            </p>
          </Section>

          <Section title="Common Cold Support and Resources">
            <p className="text-gray-700 leading-relaxed text-left">
              Reliable information about cold prevention, treatment, and when to seek care can be found through the Centers for Disease Control and Prevention (CDC), the National Institutes of Health (NIH), and your local healthcare provider. Community pharmacists are also an excellent resource for guidance on managing symptoms safely.
            </p>
          </Section>

          <section className="mb-10">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-left">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                {
                  question: '1. Can you catch a cold from being cold or wet?',
                  answer:
                    'No. Colds are caused by viruses, not by cold temperatures or getting wet. However, spending more time indoors in close contact with others during colder months does increase exposure to cold viruses.',
                },
                {
                  question: '2. Should I go to work or school with a cold?',
                  answer:
                    'If you have a cold, it is considerate and responsible to stay home, especially during the first few days when you are most contagious. This helps prevent spreading the virus to colleagues, classmates, and vulnerable individuals.',
                },
                {
                  question: '3. Can I take antibiotics for a cold?',
                  answer:
                    'No. Antibiotics treat bacterial infections and do not affect the viruses that cause colds. Using antibiotics unnecessarily contributes to antibiotic resistance, which is a serious public health concern.',
                },
                {
                  question: '4. How can I tell if my cold has turned into a sinus infection?',
                  answer:
                    'Signs that a cold may have developed into a sinus infection include facial pain or pressure, nasal discharge that is thick and discolored, lasting more than 10 days, and worsening symptoms after initial improvement. See a doctor if you suspect a sinus infection.',
                },
                {
                  question: '5. Is there a vaccine for the common cold?',
                  answer:
                    'No. Because so many different viruses can cause a cold, developing a single effective vaccine has proven extremely difficult. Research continues, but no cold vaccine is currently available.',
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
              The common cold may be one of the most familiar illnesses we face, but that does not make it any less unpleasant. While there is no cure, understanding what causes a cold, how it spreads, and how to manage symptoms can help you recover more comfortably and avoid passing it to others.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4 text-left">
              Rest, hydration, and a little patience are your best tools. And remember, most colds clear up on their own within a week. If something feels off or symptoms are more severe than expected, do not hesitate to reach out to your healthcare provider.
            </p>
            <p className="text-gray-700 leading-relaxed text-left">
              Take care of yourself, and you will be back on your feet before you know it.
            </p>
          </Section>

          <section className="border-t pt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-left">References</h2>
            <div className="space-y-3 text-sm text-gray-600">
              <div className="text-left">
                <p className="font-medium text-gray-800">Centers for Disease Control and Prevention (CDC).</p>
                <p>Common Cold.</p>
                <a href="https://www.cdc.gov/antibiotic-use/colds.html" className="text-blue-600 hover:underline break-all">
                  https://www.cdc.gov/antibiotic-use/colds.html
                </a>
              </div>
              <div className="text-left">
                <p className="font-medium text-gray-800">Mayo Clinic.</p>
                <p>Common Cold - Symptoms & Causes.</p>
                <a href="https://www.mayoclinic.org/diseases-conditions/common-cold/symptoms-causes/syc-20351605" className="text-blue-600 hover:underline break-all">
                  https://www.mayoclinic.org/diseases-conditions/common-cold/symptoms-causes/syc-20351605
                </a>
              </div>
              <div className="text-left">
                <p className="font-medium text-gray-800">National Institute of Allergy and Infectious Diseases (NIAID).</p>
                <p>Common Cold.</p>
                <a href="https://www.niaid.nih.gov/diseases-conditions/common-cold" className="text-blue-600 hover:underline break-all">
                  https://www.niaid.nih.gov/diseases-conditions/common-cold
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Blog6;
