import React from 'react';

const Blog1 = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-left">
            ADHD Uncovered: A Comprehensive Guide to Symptoms, Causes, and Effective Treatments
          </h1>
          
          {/* Featured Image */}
          <div className="w-full mb-8">
            <img 
              src="/images/Blog1.jpg" 
              alt="ADHD Guide" 
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
              If you or your child have recently been diagnosed with ADHD, or if you suspect ADHD may be present, it's completely normal to feel worried, confused, or overwhelmed. These feelings are common—but they don't last forever. With the right information, treatment, and support, people with ADHD can lead healthy, successful, and fulfilling lives.
            </p>
            <p className="text-gray-700 leading-relaxed text-left">
              This guide explains what ADHD really is, how it shows up in children and adults, and what can help.
            </p>
          </div>

          {/* What Is ADHD */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-left">What Is ADHD?</h2>
            <p className="text-gray-700 leading-relaxed mb-4 text-left">
              Attention-Deficit/Hyperactivity Disorder (ADHD) is a neurodevelopmental condition that affects how the brain manages attention, activity level, and impulse control. People with ADHD often want to be productive and focused, but their brains may struggle to stay organized, start tasks, or follow them through to completion.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4 text-left">
              Simple daily activities—such as finishing homework, organizing a workspace, or completing chores—can feel unusually difficult. Over time, this can lead to frustration, low confidence, and the feeling of being judged by others.
            </p>
            <p className="text-gray-700 leading-relaxed text-left">
              ADHD is one of the most common childhood conditions, but it does not disappear after childhood for everyone. Many individuals continue to experience symptoms during adolescence and adulthood.
            </p>
          </section>

          {/* Signs and Symptoms */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-left">Signs and Symptoms of ADHD</h2>
            <p className="text-gray-700 leading-relaxed mb-6 text-left">
              ADHD symptoms usually fall into three main categories. A person may experience one category or a combination of all three.
            </p>

            {/* Inattention */}
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3 text-left">Inattention</h3>
              <ul className="space-y-2 text-gray-700 text-left">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Difficulty staying focused or easily distracted</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Trouble following instructions or listening when spoken to</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Frequently making careless mistakes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Poor time management and organization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Avoiding tasks that require sustained mental effort</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Losing important items such as keys, phones, or school supplies</span>
                </li>
              </ul>
            </div>

            {/* Hyperactivity */}
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3 text-left">Hyperactivity</h3>
              <ul className="space-y-2 text-gray-700 text-left">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Constant movement, fidgeting, or restlessness</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Difficulty sitting still in class or at work</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Excessive talking</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Feeling internally restless (more common in adults)</span>
                </li>
              </ul>
            </div>

            {/* Impulsivity */}
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3 text-left">Impulsivity</h3>
              <ul className="space-y-2 text-gray-700 text-left">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Acting without thinking</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Interrupting others frequently</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Difficulty waiting for turns</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Making quick decisions without considering long-term consequences</span>
                </li>
              </ul>
            </div>

            <p className="text-gray-700 leading-relaxed bg-blue-50 p-4 rounded-lg text-left">
              While everyone may show these behaviors occasionally, ADHD is different because the symptoms are more intense, occur more frequently, and interfere with daily functioning at school, work, or in relationships.
            </p>
          </section>

          {/* What Causes ADHD */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-left">What Causes ADHD?</h2>
            <p className="text-gray-700 leading-relaxed mb-4 text-left">
              The exact cause of ADHD is not fully understood. Research suggests that ADHD is linked to differences in brain structure and function, particularly in areas responsible for attention, planning, and impulse control.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4 text-left">Several risk factors are associated with ADHD, including:</p>
            <ul className="space-y-2 text-gray-700 mb-4 text-left">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>A family history of ADHD</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Exposure to smoking, alcohol, or drugs during pregnancy</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Exposure to environmental toxins (such as lead)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Low birth weight</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Brain injury at an early age</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed text-left">
              ADHD often occurs alongside other conditions, such as learning disabilities, anxiety disorders, depression, or substance use disorders.
            </p>
          </section>

          {/* Diagnosis Section */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-left">Do I—or My Child—Have ADHD?</h2>
            <p className="text-gray-700 leading-relaxed mb-4 text-left">
              If symptoms of inattention, hyperactivity, or impulsivity last for six months or longer and appear in more than one setting (such as home and school), an evaluation may be helpful.
            </p>
            <p className="text-gray-700 leading-relaxed text-left">
              For adults, symptoms must have been present since childhood (before age 12) and must significantly affect daily life, such as work performance or relationships.
            </p>
          </section>

          {/* How Is ADHD Diagnosed */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-left">How Is ADHD Diagnosed?</h2>
            <p className="text-gray-700 leading-relaxed mb-6 text-left">
              There is no single test, scan, or blood work that can diagnose ADHD. Instead, diagnosis involves a detailed evaluation by a qualified healthcare professional.
            </p>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3 text-left">Diagnosis in Children</h3>
              <p className="text-gray-700 mb-3 text-left">A proper evaluation may include:</p>
              <ul className="space-y-2 text-gray-700 mb-4 text-left">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Interviews with parents or caregivers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Questionnaires from teachers or childcare providers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Review of school and medical records</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Observation of the child</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Screening for learning or developmental disorders</span>
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed text-left">
                Most children are diagnosed during elementary school, though symptoms can appear as early as preschool.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3 text-left">Diagnosis in Adults</h3>
              <p className="text-gray-700 mb-3 text-left">Adult evaluations typically involve:</p>
              <ul className="space-y-2 text-gray-700 text-left">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>A detailed interview covering current and childhood symptoms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Screening for coexisting mental health conditions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Input from close family members or partners</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Additional psychological testing, if needed</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Treatment Options */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-left">Treatment Options for ADHD</h2>
            <p className="text-gray-700 leading-relaxed mb-6 text-left">
              ADHD treatment is individualized and depends on age, symptom severity, and personal needs.
            </p>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3 text-left">Treating Children With ADHD</h3>
              <ul className="space-y-2 text-gray-700 text-left">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Behavior therapy is recommended as the first-line treatment for young children</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Parent training programs help caregivers support positive behavior</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>School accommodations, such as Individualized Education Plans (IEPs) or 504 plans</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Medication may be introduced (usually after age 6) alongside therapy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Healthy lifestyle habits, including balanced nutrition and omega-3–rich foods, may offer additional benefits for some children</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3 text-left">Treating Adults With ADHD</h3>
              <ul className="space-y-2 text-gray-700 text-left">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Cognitive Behavioral Therapy (CBT) tailored for ADHD</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Coaching for organization, planning, and time management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Medication, when appropriate</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Medications */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-left">Medications for ADHD</h2>
            <p className="text-gray-700 leading-relaxed mb-6 text-left">
              Medication can be highly effective when carefully monitored by a healthcare provider.
            </p>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3 text-left">Stimulants</h3>
              <p className="text-gray-700 leading-relaxed mb-2 text-left">
                Stimulants are the most commonly prescribed ADHD medications. They work by increasing dopamine and norepinephrine levels in the brain, which improves focus and attention.
              </p>
              <p className="text-gray-700 leading-relaxed text-left">
                They are available in short-acting, intermediate-acting, and long-acting forms.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3 text-left">Non-Stimulants</h3>
              <p className="text-gray-700 leading-relaxed text-left">
                Non-stimulant medications may be used when stimulants are ineffective or cause side effects. They work more gradually but can still improve attention and impulse control.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3 text-left">Antidepressants</h3>
              <p className="text-gray-700 leading-relaxed text-left">
                Although not specifically approved for ADHD, antidepressants may be used alone or in combination with other medications in some cases.
              </p>
            </div>
          </section>

          {/* Side Effects */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-left">Side Effects of ADHD Treatment</h2>
            <p className="text-gray-700 leading-relaxed mb-4 text-left">
              Possible side effects vary depending on the medication and may include:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4 text-left">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Headaches</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Reduced appetite</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Sleep difficulties</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Mood changes</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Stomach discomfort</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed text-left">
              Most side effects are manageable, but it's important to discuss expectations and concerns with a healthcare provider before starting treatment.
            </p>
          </section>

          {/* Living With ADHD */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-left">Living With ADHD</h2>
            <p className="text-gray-700 leading-relaxed mb-6 text-left">
              Living with ADHD can be challenging, but it should never be a source of shame. Children with ADHD are often misunderstood, and adults may struggle with self-confidence due to years of unmanaged symptoms.
            </p>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3 text-left">For Children</h3>
              <ul className="space-y-2 text-gray-700 text-left">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Strong collaboration between parents, teachers, and healthcare providers</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Consistent routines and structure</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Positive reinforcement and encouragement</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Social support—having even one close friend can make a big difference</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3 text-left">For Adults</h3>
              <ul className="space-y-2 text-gray-700 text-left">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Late diagnosis may explain past academic, career, or relationship challenges</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Therapy and counseling can improve emotional regulation and relationships</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>With the right tools, adults with ADHD can thrive personally and professionally</span>
                </li>
              </ul>
            </div>

            <p className="text-gray-700 leading-relaxed mt-6 bg-green-50 p-4 rounded-lg font-medium text-left">
              ADHD is manageable. With proper care, people with ADHD can develop strengths, build confidence, and lead satisfying lives.
            </p>
          </section>

          {/* Support and Communities */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-left">ADHD Support and Communities</h2>
            <p className="text-gray-700 leading-relaxed text-left">
              Support groups, podcasts, online forums, and advocacy organizations provide education, encouragement, and connection for people with ADHD and their families. Sharing experiences and learning from others can make the journey feel far less isolating.
            </p>
          </section>

          {/* FAQs */}
          <section className="mb-10">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-left">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 text-left">1. Can ADHD go away with age?</h3>
                <p className="text-gray-700 leading-relaxed text-left">
                  ADHD does not usually disappear completely with age, but symptoms may change over time. Many children continue to experience ADHD into adolescence and adulthood, often with improved coping skills and better symptom management.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 text-left">2. Is ADHD caused by poor parenting?</h3>
                <p className="text-gray-700 leading-relaxed text-left">
                  No. ADHD is a neurodevelopmental condition linked to brain structure and function. Parenting style does not cause ADHD, though supportive parenting can greatly help manage symptoms.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 text-left">3. Can adults be diagnosed with ADHD later in life?</h3>
                <p className="text-gray-700 leading-relaxed text-left">
                  Yes. Many adults are diagnosed later after years of unexplained struggles with focus, organization, or relationships. Adult ADHD diagnosis is valid and can lead to effective treatment and improved quality of life.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 text-left">4. Is medication the only treatment for ADHD?</h3>
                <p className="text-gray-700 leading-relaxed text-left">
                  No. While medication can be helpful, ADHD is best managed through a combination of approaches such as therapy, behavioral strategies, lifestyle changes, and educational or workplace accommodations.
                </p>
              </div>
            </div>
          </section>

          {/* Final Thoughts */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-left">Final Thoughts</h2>
            <p className="text-gray-700 leading-relaxed mb-4 text-left">
              ADHD is a lifelong condition, but it is highly manageable with the right support and understanding. Early diagnosis, personalized treatment, and consistent strategies can make a meaningful difference. People with ADHD often have unique strengths, creativity, and resilience.
            </p>
            <p className="text-gray-700 leading-relaxed text-left">
              With proper care, structure, and encouragement, individuals with ADHD can thrive in school, work, and relationships. You are not alone, and help is always available.
            </p>
          </section>

          {/* References */}
          <section className="border-t pt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-left">References</h2>
            <div className="space-y-3 text-sm text-gray-600">
              <div className="text-left">
                <p className="font-medium text-gray-800">American Psychiatric Association.</p>
                <p>What Is ADHD?</p>
                <a href="https://www.psychiatry.org/patients-families/adhd/what-is-adhd" 
                   className="text-blue-600 hover:underline break-all">
                  https://www.psychiatry.org/patients-families/adhd/what-is-adhd
                </a>
              </div>
              
              <div className="text-left">
                <p className="font-medium text-gray-800">National Institute of Mental Health (NIMH).</p>
                <p>Attention-Deficit/Hyperactivity Disorder (ADHD) — Overview, symptoms, causes, and treatments.</p>
                <a href="https://www.nimh.nih.gov/health/topics/attention-deficit-hyperactivity-disorder-adhd" 
                   className="text-blue-600 hover:underline break-all">
                  https://www.nimh.nih.gov/health/topics/attention-deficit-hyperactivity-disorder-adhd
                </a>
              </div>
              
              <div className="text-left">
                <p className="font-medium text-gray-800">MedlinePlus.</p>
                <p>Attention Deficit Hyperactivity Disorder (ADHD) — Symptoms and information.</p>
                <a href="https://medlineplus.gov/attentiondeficithyperactivitydisorder.html" 
                   className="text-blue-600 hover:underline break-all">
                  https://medlineplus.gov/attentiondeficithyperactivitydisorder.html
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Blog1;