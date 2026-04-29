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

const Blog7 = () => {
  useEffect(() => {
    document.title = 'Depression: Symptoms, Causes & Treatments';

    const description =
      'Understand depression symptoms, causes, and treatments. Learn how to get help and support recovery for a healthier life.';
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
            Understanding Depression: A Comprehensive Guide to Symptoms, Causes, and Effective Treatments
          </h1>

          <div className="w-full mb-8">
            <img
              src="/images/64.jpeg"
              alt="Depression symptoms and treatment guide"
              className="w-full h-auto rounded-lg shadow-md object-cover"
            />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-gray-700 leading-relaxed mb-4 text-left">
              Feeling sad, empty, or hopeless for an extended period of time is more than just a rough patch - it may be depression. Depression is one of the most common and serious mental health conditions in the world, yet it remains widely misunderstood and underdiagnosed.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4 text-left">
              If you or someone you care about is struggling, know that you are not alone. Depression is a real medical condition, not a sign of weakness, and with the right support and treatment, recovery is absolutely possible.
            </p>
            <p className="text-gray-700 leading-relaxed text-left">
              This guide will walk you through what depression is, how it feels, what causes it, and what options are available to help.
            </p>
          </div>

          <Section title="What Is Depression?">
            <p className="text-gray-700 leading-relaxed mb-4 text-left">
              Depression, clinically known as Major Depressive Disorder (MDD), is a mood disorder characterized by persistent feelings of sadness, emptiness, or hopelessness that interfere significantly with daily life. It affects how a person thinks, feels, and functions - at home, at work, and in relationships.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4 text-left">
              Depression is more than ordinary sadness or grief. While it is normal to feel sad after a difficult life event, depression is different because the feelings are intense, prolonged, and often occur without a clear external cause.
            </p>
            <p className="text-gray-700 leading-relaxed text-left">
              Depression can affect anyone regardless of age, gender, background, or life circumstances. It is estimated to affect more than 280 million people worldwide.
            </p>
          </Section>

          <div className="w-full mb-10">
            <img
              src="/images/65.jpeg"
              alt="Depression symptoms and emotional health"
              className="w-full h-auto rounded-lg shadow-md object-cover"
            />
          </div>

          <Section title="Types of Depression">
            <p className="text-gray-700 leading-relaxed mb-4 text-left">
              Depression is not a single condition. Several types exist, each with distinct features:
            </p>
            <ul className="space-y-2 text-gray-700 text-left">
              {[
                'Major Depressive Disorder (MDD): Persistent low mood and loss of interest lasting at least two weeks',
                'Persistent Depressive Disorder (Dysthymia): A milder but long-lasting form of depression lasting two years or more',
                'Postpartum Depression: Depression that occurs after childbirth, affecting new mothers and sometimes fathers',
                'Seasonal Affective Disorder (SAD): Depression that follows a seasonal pattern, most commonly occurring in winter',
                'Bipolar Depression: Depressive episodes that occur as part of bipolar disorder',
                'Psychotic Depression: Severe depression accompanied by delusions or hallucinations',
                'Situational Depression: A short-term response to a specific stressful life event',
              ].map(bullet)}
            </ul>
          </Section>

          <div className="w-full mb-10">
            <img
              src="/images/66.jpeg"
              alt="Depression causes and mental health support"
              className="w-full h-auto rounded-lg shadow-md object-cover"
            />
          </div>

          <Section title="Signs and Symptoms of Depression">
            <p className="text-gray-700 leading-relaxed mb-6 text-left">
              Depression affects people differently, but common symptoms include:
            </p>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3 text-left">Emotional Symptoms</h3>
              <ul className="space-y-2 text-gray-700 text-left">
                {[
                  'Persistent sadness, emptiness, or hopelessness',
                  'Feelings of worthlessness or excessive guilt',
                  'Loss of interest or pleasure in activities once enjoyed (anhedonia)',
                  'Irritability, frustration, or restlessness',
                  'Feeling disconnected from life or emotionally numb',
                ].map(bullet)}
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3 text-left">Physical Symptoms</h3>
              <ul className="space-y-2 text-gray-700 text-left">
                {[
                  'Fatigue and lack of energy, even after rest',
                  'Changes in appetite - eating significantly more or less than usual',
                  'Unexplained weight loss or weight gain',
                  'Sleep disturbances - insomnia or sleeping too much',
                  'Slowed movements, speech, or thinking',
                  'Unexplained physical aches, pains, or digestive problems',
                ].map(bullet)}
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3 text-left">Cognitive Symptoms</h3>
              <ul className="space-y-2 text-gray-700 text-left">
                {[
                  'Difficulty concentrating, remembering, or making decisions',
                  'Negative thinking patterns and pessimism',
                  'Thoughts of death, dying, or suicide',
                ].map(bullet)}
              </ul>
            </div>

            <p className="text-gray-700 leading-relaxed bg-blue-50 p-4 rounded-lg text-left">
              If you or someone you know is having thoughts of suicide or self-harm, please reach out to a mental health professional or a crisis helpline immediately. Help is available and you deserve support.
            </p>
          </Section>

          <div className="w-full mb-10">
            <img
              src="/images/67.jpeg"
              alt="Depression treatment and recovery support"
              className="w-full h-auto rounded-lg shadow-md object-cover"
            />
          </div>

          <Section title="What Causes Depression?">
            <p className="text-gray-700 leading-relaxed mb-6 text-left">
              Depression does not have a single cause. It is understood to result from a complex interaction of biological, psychological, and social factors.
            </p>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3 text-left">Biological Factors</h3>
              <ul className="space-y-2 text-gray-700 text-left">
                {[
                  'Imbalances in brain chemicals (neurotransmitters) such as serotonin, dopamine, and norepinephrine',
                  'Hormonal changes, including those related to thyroid function, pregnancy, or menopause',
                  'Genetic predisposition - depression runs in families',
                  'Changes in brain structure and function identified through neuroimaging studies',
                ].map(bullet)}
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3 text-left">Psychological Factors</h3>
              <ul className="space-y-2 text-gray-700 text-left">
                {[
                  'Low self-esteem or a negative view of oneself and the world',
                  'History of trauma, abuse, or neglect',
                  'Chronic stress or anxiety',
                  'Certain personality traits such as perfectionism or excessive self-criticism',
                ].map(bullet)}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3 text-left">Social and Environmental Factors</h3>
              <ul className="space-y-2 text-gray-700 text-left">
                {[
                  'Major life changes or losses such as bereavement, divorce, or job loss',
                  'Loneliness and social isolation',
                  'Financial hardship or housing instability',
                  'Relationship difficulties or family conflict',
                  'Exposure to violence, discrimination, or adverse childhood experiences',
                ].map(bullet)}
              </ul>
            </div>
          </Section>

          <Section title="How Is Depression Diagnosed?">
            <p className="text-gray-700 leading-relaxed mb-4 text-left">
              There is no single blood test or scan that diagnoses depression. Diagnosis is made through a thorough clinical evaluation by a qualified healthcare professional such as a doctor, psychiatrist, or psychologist.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4 text-left">The evaluation typically includes:</p>
            <ul className="space-y-2 text-gray-700 mb-4 text-left">
              {[
                'A detailed interview about your mood, thoughts, behavior, and daily functioning',
                'Review of medical history and any medications you are taking',
                'Standardized questionnaires such as the PHQ-9 (Patient Health Questionnaire)',
                'Physical examination and blood tests to rule out medical causes such as thyroid disorders',
              ].map(bullet)}
            </ul>
            <p className="text-gray-700 leading-relaxed text-left">
              To be diagnosed with Major Depressive Disorder, symptoms must be present for at least two weeks and must significantly interfere with daily functioning.
            </p>
          </Section>

          <Section title="Treatment Options for Depression">
            <p className="text-gray-700 leading-relaxed mb-6 text-left">
              Depression is highly treatable. Most people experience significant improvement with the right combination of therapies and support.
            </p>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3 text-left">Psychotherapy</h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-left">
                Talk therapy is one of the most effective treatments for depression. Common approaches include:
              </p>
              <ul className="space-y-2 text-gray-700 text-left">
                {[
                  'Cognitive Behavioral Therapy (CBT): Helps identify and change negative thought patterns and behaviors',
                  'Interpersonal Therapy (IPT): Focuses on improving relationships and communication',
                  'Psychodynamic Therapy: Explores how past experiences influence current feelings and behavior',
                  'Behavioral Activation: Encourages engagement in meaningful and rewarding activities',
                ].map(bullet)}
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3 text-left">Lifestyle Changes</h3>
              <ul className="space-y-2 text-gray-700 text-left">
                {[
                  'Regular physical exercise, shown to have antidepressant effects',
                  'A balanced diet rich in nutrients that support brain health',
                  'Consistent sleep schedule and good sleep hygiene',
                  'Reducing alcohol and avoiding recreational drugs',
                  'Building and maintaining social connections',
                  'Mindfulness, meditation, or relaxation techniques',
                ].map(bullet)}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3 text-left">Social Support</h3>
              <ul className="space-y-2 text-gray-700 text-left">
                {[
                  'Confiding in trusted friends or family members',
                  'Joining a depression support group',
                  'Engaging in meaningful activities and community involvement',
                ].map(bullet)}
              </ul>
            </div>
          </Section>

          <Section title="Medications for Depression">
            <p className="text-gray-700 leading-relaxed mb-6 text-left">
              Antidepressant medications can be highly effective, especially for moderate to severe depression. They are often used alongside therapy for the best outcomes.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mb-3 text-left">Common Types of Antidepressants</h3>
            <ul className="space-y-2 text-gray-700 mb-4 text-left">
              {[
                'Selective Serotonin Reuptake Inhibitors (SSRIs): The most commonly prescribed antidepressants, generally well tolerated. Examples include fluoxetine, sertraline, and escitalopram.',
                'Serotonin-Norepinephrine Reuptake Inhibitors (SNRIs): Work on both serotonin and norepinephrine. Examples include venlafaxine and duloxetine.',
                'Tricyclic Antidepressants (TCAs): Older medications used when other options are ineffective',
                'Monoamine Oxidase Inhibitors (MAOIs): Rarely used due to dietary restrictions and interactions',
                'Atypical Antidepressants: Such as bupropion and mirtazapine, used for specific symptom profiles',
              ].map(bullet)}
            </ul>
            <p className="text-gray-700 leading-relaxed mb-6 text-left">
              Antidepressants typically take 2 to 6 weeks to show their full effect. It is important not to stop medication abruptly without consulting your doctor.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mb-3 text-left">Other Medical Treatments</h3>
            <ul className="space-y-2 text-gray-700 text-left">
              {[
                'Electroconvulsive Therapy (ECT): Used for severe, treatment-resistant depression - safe and effective despite its reputation',
                'Transcranial Magnetic Stimulation (TMS): A non-invasive brain stimulation technique',
                'Ketamine or esketamine: Newer treatments for treatment-resistant depression with rapid-acting effects',
              ].map(bullet)}
            </ul>
          </Section>

          <Section title="Side Effects of Depression Treatment">
            <p className="text-gray-700 leading-relaxed mb-4 text-left">
              Antidepressant medications may cause side effects, which often improve after the first few weeks. Common side effects include:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4 text-left">
              {[
                'Nausea or digestive discomfort',
                'Headaches',
                'Sleep disturbances',
                'Weight changes',
                'Sexual side effects',
                'Dry mouth or dizziness',
              ].map(bullet)}
            </ul>
            <p className="text-gray-700 leading-relaxed text-left">
              Always discuss potential side effects with your healthcare provider. Never stop antidepressants suddenly without medical guidance, as this can cause withdrawal symptoms.
            </p>
          </Section>

          <Section title="Living With Depression">
            <p className="text-gray-700 leading-relaxed mb-6 text-left">
              Living with depression is challenging, but with the right tools and support, it is manageable. Depression is not a personal failing - it is a medical condition that deserves care and compassion.
            </p>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3 text-left">For Individuals</h3>
              <ul className="space-y-2 text-gray-700 text-left">
                {[
                  'Follow your treatment plan consistently, even on days when you feel better',
                  'Be patient with yourself - recovery takes time and is rarely linear',
                  'Identify your warning signs and have a plan for difficult days',
                  'Keep a journal to track your mood and identify patterns',
                  'Celebrate little progress - every step forward matters',
                ].map(bullet)}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3 text-left">For Families and Caregivers</h3>
              <ul className="space-y-2 text-gray-700 text-left">
                {[
                  'Educate yourself about depression to better understand what your loved one is experiencing',
                  'Listen without judgment and avoid minimizing their feelings',
                  'Encourage professional help gently and persistently',
                  'Take care of your own mental health - supporting someone with depression can be emotionally demanding',
                  'Reach out to caregiver support groups for guidance and connection',
                ].map(bullet)}
              </ul>
            </div>
          </Section>

          <Section title="Depression Support and Communities">
            <p className="text-gray-700 leading-relaxed mb-4 text-left">
              No one should face depression alone. Support groups, mental health organizations, and online communities can provide connection, encouragement, and practical resources.
            </p>
            <p className="text-gray-700 leading-relaxed text-left">
              Organizations such as the National Alliance on Mental Illness (NAMI), the Depression and Bipolar Support Alliance (DBSA), and Mental Health America offer helplines, support groups, and educational materials for people living with depression and their families.
            </p>
          </Section>

          <section className="mb-10">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-left">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                {
                  question: '1. Is depression the same as feeling sad?',
                  answer:
                    'No. While sadness is a normal human emotion, depression is a medical condition that is more intense, longer-lasting, and often occurs without a clear cause. Depression affects daily functioning in ways that ordinary sadness does not.',
                },
                {
                  question: '2. Can depression go away on its own?',
                  answer:
                    'Some mild episodes of depression may improve over time, but moderate to severe depression typically requires professional treatment. Without treatment, depression often persists or worsens. Seeking help early leads to better outcomes.',
                },
                {
                  question: '3. Is depression a sign of weakness?',
                  answer:
                    'Absolutely not. Depression is a medical condition caused by a combination of biological, psychological, and social factors. It has nothing to do with personal strength or character. Seeking help is a sign of courage and self-awareness.',
                },
                {
                  question: '4. Can children and teenagers get depression?',
                  answer:
                    'Yes. Depression can affect people of any age, including children and teenagers. In young people, depression may look different - it can appear as irritability, declining school performance, social withdrawal, or physical complaints rather than obvious sadness.',
                },
                {
                  question: '5. How long does depression treatment take?',
                  answer:
                    'The duration of treatment varies by individual. Many people begin to feel better within weeks of starting treatment. However, full recovery can take months, and ongoing therapy or medication may be needed to prevent relapse. Treatment duration is always personalized.',
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
              Depression is a serious but highly treatable condition. It affects millions of people around the world, cutting across all ages, backgrounds, and walks of life. If you are struggling, the most important step you can take is to reach out for help.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4 text-left">
              With the right combination of professional support, therapy, medication when needed, and self-care, most people with depression can recover and go on to live rich, fulfilling lives. Recovery is not just possible, it is the expected outcome with proper care.
            </p>
            <p className="text-gray-700 leading-relaxed text-left">
              You deserve to feel well. Help is available, and it is never too late to seek it.
            </p>
          </Section>

          <section className="border-t pt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-left">References</h2>
            <div className="space-y-3 text-sm text-gray-600">
              <div className="text-left">
                <p className="font-medium text-gray-800">World Health Organization (WHO).</p>
                <p>Depression - Key Facts.</p>
                <a href="https://www.who.int/news-room/fact-sheets/detail/depression" className="text-blue-600 hover:underline break-all">
                  https://www.who.int/news-room/fact-sheets/detail/depression
                </a>
              </div>
              <div className="text-left">
                <p className="font-medium text-gray-800">National Institute of Mental Health (NIMH).</p>
                <p>Depression - Overview and Treatment.</p>
                <a href="https://www.nimh.nih.gov/health/topics/depression" className="text-blue-600 hover:underline break-all">
                  https://www.nimh.nih.gov/health/topics/depression
                </a>
              </div>
              <div className="text-left">
                <p className="font-medium text-gray-800">American Psychiatric Association.</p>
                <p>What Is Depression?</p>
                <a href="https://www.psychiatry.org/patients-families/depression/what-is-depression" className="text-blue-600 hover:underline break-all">
                  https://www.psychiatry.org/patients-families/depression/what-is-depression
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Blog7;
