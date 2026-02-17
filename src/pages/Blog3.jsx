import React from 'react';

const Blog3 = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-left">
            Anxiety: Understanding, Symptoms, and Treatment
          </h1>
          
          {/* Featured Image */}
          <div className="w-full mb-8">
            <img 
              src="/images/Blog3.jpg" 
              alt="Anxiety Guide" 
              className="w-full h-auto rounded-lg shadow-md object-cover"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
          {/* Introduction */}
          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-gray-700 leading-relaxed mb-4 text-left">
              Almost everyone experiences worry at some point about health, finances, work, or relationships. Feeling anxious from time to time is a normal and even healthy response to life's uncertainties. In certain situations, anxiety can motivate us to prepare, stay alert, and protect ourselves from danger.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4 text-left">
              However, anxiety becomes a problem when it is constant, overwhelming, and begins to interfere with daily life. When worry no longer comes and goes—but instead feels stuck—it may signal an anxiety disorder.
            </p>
            <p className="text-gray-700 leading-relaxed text-left">
              This guide explains what anxiety really is, how it affects the mind and body, the different types of anxiety disorders, and the most effective treatment options available today.
            </p>
          </div>

          {/* What Is Anxiety */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-left">What Is Anxiety?</h2>
            <p className="text-gray-700 leading-relaxed mb-4 text-left">
              Anxiety is a natural emotional and physical response to stress, uncertainty, or perceived threat. It often shows up as nervousness, fear, or unease about something that may happen in the future.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4 text-left">
              In small amounts, anxiety can be helpful. It can push you to meet deadlines, prepare for challenges, or react quickly in dangerous situations. But when anxiety causes physical symptoms such as a racing heart, sweating, muscle tension, shortness of breath, or difficulty concentrating—without a real or immediate threat—it becomes disruptive.
            </p>
            <p className="text-gray-700 leading-relaxed text-left">
              Anxiety itself is not a mental illness. It becomes an anxiety disorder when it is persistent, excessive, and significantly impacts a person's ability to function at work, school, or in relationships.
            </p>
          </section>

          {/* What Is an Anxiety Disorder */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-left">What Is an Anxiety Disorder?</h2>
            <p className="text-gray-700 leading-relaxed mb-4 text-left">
              Anxiety disorders are a group of mental health conditions characterized by excessive fear, worry, or nervousness that is difficult to control. These disorders are among the most common mental health conditions worldwide and affect people of all ages.
            </p>
            <p className="text-gray-700 leading-relaxed text-left">
              Unlike everyday stress, anxiety disorders do not simply resolve on their own and often require professional treatment.
            </p>
          </section>

          {/* Common Types */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-left">Common Types of Anxiety Disorders</h2>
            <p className="text-gray-700 leading-relaxed mb-6 text-left">
              There are several types of anxiety disorders, each with unique features:
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-3 text-left">Generalized Anxiety Disorder (GAD)</h3>
                <p className="text-gray-700 leading-relaxed text-left">
                  GAD involves constant and excessive worry about everyday matters such as health, finances, work, or family. People with GAD often expect the worst, even when there is little reason to worry, and find it difficult to control their thoughts.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-3 text-left">Panic Disorder</h3>
                <p className="text-gray-700 leading-relaxed text-left">
                  Panic disorder is marked by sudden and unexpected panic attacks—intense episodes of fear accompanied by physical symptoms such as chest pain, dizziness, shortness of breath, or a feeling of losing control.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-3 text-left">Phobias</h3>
                <p className="text-gray-700 leading-relaxed text-left">
                  Phobias involve intense and irrational fear of specific objects or situations, such as heights, animals, or flying.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-3 text-left">Social Anxiety Disorder</h3>
                <p className="text-gray-700 leading-relaxed text-left">
                  This condition involves extreme fear of being judged, embarrassed, or rejected in social or performance situations.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-3 text-left">Agoraphobia</h3>
                <p className="text-gray-700 leading-relaxed text-left">
                  Agoraphobia is the fear of being in places or situations where escape might be difficult, such as crowded areas or public transportation.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-3 text-left">Separation Anxiety</h3>
                <p className="text-gray-700 leading-relaxed text-left">
                  Separation anxiety involves excessive fear about being away from home or loved ones and can affect both children and adults.
                </p>
              </div>
            </div>
          </section>

          {/* GAD Closer Look */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-left">Generalized Anxiety Disorder (GAD): A Closer Look</h2>
            <p className="text-gray-700 leading-relaxed mb-4 text-left">
              Generalized Anxiety Disorder is one of the most common anxiety disorders. It develops gradually and can begin at any stage of life, though it often appears between childhood and middle adulthood.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4 text-left">People with GAD experience:</p>
            <ul className="space-y-2 text-gray-700 mb-4 text-left">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Persistent worry lasting at least six months</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Difficulty controlling anxious thoughts</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Physical symptoms such as muscle tension, fatigue, irritability, sleep problems, and difficulty concentrating</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed text-left">
              Unlike normal worry, GAD has no "off switch." Everyday situations trigger anxiety, making it difficult to relax or feel at ease.
            </p>
          </section>

          {/* Symptoms of Anxiety */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-left">Symptoms of Anxiety</h2>
            <p className="text-gray-700 leading-relaxed mb-6 text-left">
              Anxiety affects both the mind and body. Symptoms may vary from person to person but often include:
            </p>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3 text-left">Emotional and Cognitive Symptoms</h3>
              <ul className="space-y-2 text-gray-700 text-left">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Constant worry or fear</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Racing or intrusive thoughts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Difficulty concentrating</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Feeling overwhelmed</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Irritability</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Intolerance of uncertainty</span>
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3 text-left">Physical Symptoms</h3>
              <ul className="space-y-2 text-gray-700 text-left">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Muscle tension or body aches</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Headaches</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Fatigue</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Heart palpitations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Shortness of breath</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Sweating or trembling</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Stomach problems such as nausea or diarrhea</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Dizziness or lightheadedness</span>
                </li>
              </ul>
            </div>

            <p className="text-gray-700 leading-relaxed text-left">
              These physical symptoms can sometimes be mistaken for other medical conditions, which is why many people first seek help from a primary care physician.
            </p>
          </section>

          {/* Risk Factors */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-left">Risk Factors for Anxiety Disorders</h2>
            <p className="text-gray-700 leading-relaxed mb-4 text-left">
              Anxiety can affect anyone, but certain factors may increase risk, including:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4 text-left">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Family history of anxiety or mood disorders</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Personal history of trauma or chronic stress</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Coexisting depression or other mental health conditions</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Perfectionism or need for control</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Learned patterns of worry during childhood</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed text-left">
              Anxiety disorders often occur alongside depression and other mood disorders.
            </p>
          </section>

          {/* What Triggers Anxiety */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-left">What Triggers Anxiety?</h2>
            <p className="text-gray-700 leading-relaxed mb-4 text-left">
              Anxiety triggers vary depending on the individual and type of anxiety disorder. Common triggers include:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4 text-left">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Traumatic experiences</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Major life changes (divorce, relocation, job loss)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Academic or work pressure</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Relationship stress</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Health concerns</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Fear of future panic attacks</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed text-left">
              Stressful environments or ongoing uncertainty can intensify anxiety symptoms.
            </p>
          </section>

          {/* Brain During Anxiety */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-left">What Happens in the Brain During Anxiety?</h2>
            <p className="text-gray-700 leading-relaxed mb-4 text-left">
              During anxiety, stress hormones such as cortisol and neurotransmitters like norepinephrine increase. At the same time, the amygdala—the brain's fear center—becomes overactive, constantly scanning for threats.
            </p>
            <p className="text-gray-700 leading-relaxed text-left">
              This heightened state makes it difficult to relax, regulate emotions, and think clearly, even when no real danger exists.
            </p>
          </section>

          {/* Anxiety in Children */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-left">Anxiety in Children and Teens</h2>
            <p className="text-gray-700 leading-relaxed mb-4 text-left">
              Anxiety disorders can develop early in life. Children and teens may experience separation anxiety, school-related fears, social anxiety, or generalized worry.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4 text-left">Untreated anxiety in young people can lead to:</p>
            <ul className="space-y-2 text-gray-700 mb-4 text-left">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Poor academic performance</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Social withdrawal</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Substance use</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Co-occurring conditions such as ADHD or eating disorders</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed text-left">
              Early intervention through therapy, family support, and—when needed—medication can significantly improve outcomes.
            </p>
          </section>

          {/* How Is Anxiety Diagnosed */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-left">How Is Anxiety Diagnosed?</h2>
            <p className="text-gray-700 leading-relaxed mb-4 text-left">
              Anxiety disorders are diagnosed through a clinical evaluation based on criteria outlined in the DSM-5. Symptoms must be present more days than not for at least six months and cause significant distress or impairment.
            </p>
            <p className="text-gray-700 leading-relaxed text-left">
              Healthcare providers often rule out medical conditions before making a diagnosis.
            </p>
          </section>

          {/* Treatment Options */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-left">Treatment Options for Anxiety</h2>
            <p className="text-gray-700 leading-relaxed mb-6 text-left">
              Anxiety disorders are highly treatable, and many people experience significant improvement with proper care.
            </p>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3 text-left">Therapy</h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-left">
                Cognitive Behavioral Therapy (CBT) is one of the most effective treatments for anxiety. It helps individuals recognize and change unhelpful thought patterns and develop coping strategies.
              </p>
              <p className="text-gray-700 leading-relaxed mb-3 text-left">Other helpful therapies include:</p>
              <ul className="space-y-2 text-gray-700 text-left">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Exposure Therapy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Acceptance and Commitment Therapy (ACT)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Dialectical Behavior Therapy (DBT)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Interpersonal Therapy (IPT)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Eye Movement Desensitization and Reprocessing (EMDR)</span>
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3 text-left">Medications for Anxiety</h3>
              <p className="text-gray-700 leading-relaxed mb-4 text-left">
                In some cases, medication may be recommended, especially for moderate to severe anxiety.
              </p>
              <p className="text-gray-700 leading-relaxed mb-3 text-left">Common options include:</p>
              <ul className="space-y-2 text-gray-700 mb-4 text-left">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>SSRIs (e.g., fluoxetine, sertraline)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>SNRIs (e.g., venlafaxine, duloxetine)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Benzodiazepines (short-term use only)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Beta-blockers for performance-related anxiety</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Buspirone as a non-addictive option</span>
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed text-left">
                Medication is often most effective when combined with therapy.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3 text-left">Other Ways to Manage Anxiety</h3>
              <p className="text-gray-700 leading-relaxed mb-3 text-left">
                Lifestyle changes can also support recovery, including:
              </p>
              <ul className="space-y-2 text-gray-700 text-left">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Regular physical activity</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Balanced nutrition</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Adequate sleep</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Mindfulness and relaxation techniques</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Deep breathing and meditation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Social connection and support</span>
                </li>
              </ul>
            </div>
          </section>

          {/* FAQs */}
          <section className="mb-10">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-left">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 text-left">1. Can anxiety disorders go away on their own?</h3>
                <p className="text-gray-700 leading-relaxed text-left">
                  Mild anxiety may improve over time, but anxiety disorders usually do not resolve without treatment. Therapy, lifestyle changes, and sometimes medication are often needed for long-term relief.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 text-left">2. Are anxiety disorders the same as stress?</h3>
                <p className="text-gray-700 leading-relaxed text-left">
                  No. Stress is a response to a specific situation and usually decreases when the stressor ends. Anxiety disorders involve ongoing, excessive worry that persists even without a clear cause.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 text-left">3. Can anxiety cause physical symptoms?</h3>
                <p className="text-gray-700 leading-relaxed text-left">
                  Yes. Anxiety commonly causes physical symptoms such as chest tightness, rapid heartbeat, shortness of breath, dizziness, stomach problems, and muscle tension, even when no medical issue is present.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 text-left">4. Is medication always necessary to treat anxiety?</h3>
                <p className="text-gray-700 leading-relaxed text-left">
                  Not always. Many people manage anxiety effectively with therapy and lifestyle changes alone. Medication may be recommended for moderate to severe symptoms or when anxiety significantly interferes with daily life.
                </p>
              </div>
            </div>
          </section>

          {/* Final Thoughts */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-left">Final Thoughts</h2>
            <p className="text-gray-700 leading-relaxed mb-4 text-left">
              Anxiety disorders are common, treatable, and nothing to be ashamed of. With the right support, individuals can learn to manage symptoms and regain control over their lives. Early recognition and treatment can prevent anxiety from becoming more severe.
            </p>
            <p className="text-gray-700 leading-relaxed text-left">
              A combination of therapy, healthy habits, and professional care often leads to meaningful improvement. Help is available, and recovery is possible.
            </p>
          </section>

          {/* References */}
          <section className="border-t pt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-left">References</h2>
            <div className="space-y-3 text-sm text-gray-600">
              <div className="text-left">
                <p className="font-medium text-gray-800">National Institute of Mental Health (NIMH).</p>
                <p>Anxiety Disorders.</p>
                <a href="https://www.nimh.nih.gov/health/topics/anxiety-disorders" 
                   className="text-blue-600 hover:underline break-all">
                  https://www.nimh.nih.gov/health/topics/anxiety-disorders
                </a>
              </div>
              
              <div className="text-left">
                <p className="font-medium text-gray-800">Anxiety and Depression Association of America (ADAA).</p>
                <p>Understanding Anxiety Disorders.</p>
                <a href="https://adaa.org/understanding-anxiety" 
                   className="text-blue-600 hover:underline break-all">
                  https://adaa.org/understanding-anxiety
                </a>
              </div>
              
              <div className="text-left">
                <p className="font-medium text-gray-800">World Health Organization (WHO).</p>
                <p>Mental Disorders: Anxiety Disorders.</p>
                <a href="https://www.who.int/news-room/fact-sheets/detail/mental-disorders" 
                   className="text-blue-600 hover:underline break-all">
                  https://www.who.int/news-room/fact-sheets/detail/mental-disorders
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Blog3;