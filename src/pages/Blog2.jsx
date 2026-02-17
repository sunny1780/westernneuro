import React from 'react';

const Blog2 = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-left">
            Unraveling Autism: A Deep Dive into Understanding, Diagnosing, and Treating ASD
          </h1>
          
          {/* Featured Image */}
          <div className="w-full mb-8">
            <img 
              src="/images/Blog2.jpg" 
              alt="Autism Spectrum Disorder Guide" 
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
              Autism Spectrum Disorder (ASD) is one of the most complex and often misunderstood neurodevelopmental conditions affecting children and adults today. Although diagnostic guidelines are clearly outlined in the Diagnostic and Statistical Manual of Mental Disorders (DSM), identifying autism can still be challenging—especially when symptoms are mild or subtle.
            </p>
            <p className="text-gray-700 leading-relaxed text-left">
              Autism affects individuals across all racial, ethnic, and socioeconomic backgrounds and is significantly more common in boys than girls. While no single cause has been identified, research strongly suggests that genetics play a major role. Because autism presents differently in every individual, parents and professionals often struggle to distinguish ASD from ADHD, personality traits, or simple developmental differences.
            </p>
          </div>

          {/* What Is Autism */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-left">What Is Autism Spectrum Disorder?</h2>
            <p className="text-gray-700 leading-relaxed mb-4 text-left">
              Autism Spectrum Disorder is a lifelong neurodevelopmental condition that affects how a person communicates, interacts socially, and processes information. The term "spectrum" reflects the wide range of abilities, challenges, and symptom severity seen in individuals with autism.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4 text-left">
              People with ASD may experience difficulties in communication, social interaction, and behavior, but the way these challenges appear can vary greatly. Two individuals with the same diagnosis may function very differently, with distinct strengths and support needs.
            </p>
            <p className="text-gray-700 leading-relaxed text-left">
              Contrary to common misconceptions, many individuals with autism can express emotions, form relationships, make eye contact, and show affection—though often in unique or less conventional ways.
            </p>
          </section>

          {/* Autism Statistics */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-left">Autism Statistics</h2>
            <p className="text-gray-700 leading-relaxed mb-4 text-left">
              Research conducted by autism monitoring programs in the United States has shown a steady increase in autism diagnoses over the past two decades. While experts are still investigating the reasons for this rise, improved awareness, expanded diagnostic criteria, and earlier screening are believed to be contributing factors.
            </p>
            <p className="text-gray-700 leading-relaxed text-left">
              Autism is currently diagnosed far more frequently in boys than in girls, though growing evidence suggests girls may be underdiagnosed due to subtler symptom presentation.
            </p>
          </section>

          {/* Characteristics of Autism */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-left">Characteristics of Autism</h2>
            <p className="text-gray-700 leading-relaxed mb-4 text-left">
              Autism is considered a neurodevelopmental disorder because it impacts brain development and functioning. It affects multiple areas of life, including thinking, communication, behavior, emotional regulation, and social interaction.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4 text-left">Common characteristics may include:</p>
            <ul className="space-y-2 text-gray-700 mb-4 text-left">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Delayed or unusual speech and language development</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Repetitive behaviors or movements</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Restricted interests or intense fixations</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Difficulty adapting to changes in routine</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Challenges with motor skills or self-care</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Sensory sensitivities (to sound, light, texture, or movement)</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed text-left">
              Many individuals with autism are intelligent, capable, and emotionally connected to those they love. Language and communication challenges, rather than cognitive ability, often interfere with learning and social success.
            </p>
          </section>

          {/* Causes of Autism */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-left">Causes of Autism</h2>
            <p className="text-gray-700 leading-relaxed mb-4 text-left">
              There is no single known cause of autism. Current scientific evidence indicates that autism results from differences in brain development, likely influenced by genetic and biological factors.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4 text-left">
              Researchers have explored many potential causes and risk factors, including heredity, prenatal conditions, and environmental influences. However, there is no evidence that autism is caused by parenting style, emotional neglect, or psychological trauma.
            </p>
            <p className="text-gray-700 leading-relaxed text-left">
              Autism is not a mental illness, and individuals are either born with ASD or born with a predisposition to develop it.
            </p>
          </section>

          {/* Types of Autism */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-left">Types of Autism</h2>
            <p className="text-gray-700 leading-relaxed mb-4 text-left">
              Before 2013, autism was diagnosed under several separate categories, including Autistic Disorder, Asperger's Disorder, and Pervasive Developmental Disorder–Not Otherwise Specified (PDD-NOS). Other conditions such as Rett Syndrome and Childhood Disintegrative Disorder were also classified separately.
            </p>
            <p className="text-gray-700 leading-relaxed text-left">
              With the publication of the DSM-5, all autism-related diagnoses were unified under one diagnosis: Autism Spectrum Disorder (ASD). Clinicians now use specifiers to describe language ability, intellectual functioning, and severity level, allowing for a more accurate and individualized diagnosis.
            </p>
          </section>

          {/* Signs and Symptoms */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-left">Signs and Symptoms of Autism</h2>
            <p className="text-gray-700 leading-relaxed mb-4 text-left">
              Parents often notice signs of autism early in childhood. In infancy, some children may avoid eye contact, show limited interest in cuddling, or appear unusually calm or withdrawn. As children grow, delays in speech, walking, or social engagement may become more noticeable.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4 text-left">Common signs include:</p>
            <ul className="space-y-2 text-gray-700 mb-4 text-left">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Repetitive speech or echolalia</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Limited interest in peer interactions</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Unusual play patterns</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Hand-flapping, toe-walking, or spinning</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Sensory sensitivities</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Strong emotional reactions or difficulty regulating emotions</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4 text-left">
              As children age, social challenges often become more apparent, particularly in school environments where social expectations increase.
            </p>
            <p className="text-gray-700 leading-relaxed bg-green-50 p-4 rounded-lg text-left font-medium">
              Early diagnosis and intervention are associated with significantly better long-term outcomes.
            </p>
          </section>

          {/* Diagnosing Autism */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-left">Diagnosing Autism</h2>
            <p className="text-gray-700 leading-relaxed mb-4 text-left">
              Autism is diagnosed through a comprehensive evaluation conducted by a licensed psychologist, psychiatrist, or developmental pediatrician. There is no single medical test for ASD.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4 text-left">The diagnostic process typically includes:</p>
            <ul className="space-y-2 text-gray-700 mb-6 text-left">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>A detailed developmental history</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Behavioral observation</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Standardized assessment tools</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Evaluation of communication and social skills</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4 text-left">The three core areas assessed are:</p>
            <ul className="space-y-2 text-gray-700 mb-4 text-left">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Social interaction difficulties</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Communication challenges (verbal and nonverbal)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Repetitive or self-stimulating behaviors</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed text-left">
              Diagnosing mild autism can be particularly challenging, as symptoms may be subtle and easily overlooked in clinical settings.
            </p>
          </section>

          {/* Mild Autism */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-left">Mild Autism</h2>
            <p className="text-gray-700 leading-relaxed mb-4 text-left">
              Mild autism, sometimes referred to as Level 1 ASD, can be difficult to identify. Children with mild autism may be verbal, academically capable, and socially interested, yet still struggle with rigidity, sensory sensitivities, anxiety, or social nuance.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4 text-left">These individuals may:</p>
            <ul className="space-y-2 text-gray-700 mb-4 text-left">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Fixate on specific interests</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Struggle with changes in routine</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Appear socially awkward but maintain friendships</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Be highly rule-oriented or detail-focused</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed text-left">
              Because symptoms are less obvious, accurate diagnosis relies heavily on parent input and comprehensive assessment rather than brief observation alone.
            </p>
          </section>

          {/* Treatment Options */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-left">Treatment Options for Autism</h2>
            <p className="text-gray-700 leading-relaxed mb-4 text-left">
              There is no single treatment that works for every individual with autism. Effective treatment plans are typically personalized and may involve multiple approaches.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4 text-left">Common interventions include:</p>
            <ul className="space-y-2 text-gray-700 mb-6 text-left">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Applied Behavior Analysis (ABA)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Speech and language therapy</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Occupational therapy</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Social skills training</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Counseling and family support</span>
              </li>
            </ul>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3 text-left">Applied Behavior Analysis (ABA)</h3>
              <p className="text-gray-700 leading-relaxed text-left">
                ABA is widely considered the gold standard for autism treatment. It focuses on teaching skills, improving behavior, and increasing independence through structured and evidence-based techniques.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3 text-left">Relationship-Based Approaches</h3>
              <p className="text-gray-700 leading-relaxed text-left">
                Programs such as FloorTime, Relationship Development Intervention (RDI), and the Early Start Denver Model focus on strengthening emotional connection and social engagement between the child and caregivers.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3 text-left">Combined Approaches</h3>
              <p className="text-gray-700 leading-relaxed text-left">
                Many professionals recommend combining structured skill-based therapies with relationship-focused interventions for optimal outcomes. One example is Pivotal Response Treatment (PRT), which blends structured learning with child-centered interaction.
              </p>
            </div>
          </section>

          {/* Co-Occurring Conditions */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-left">Autism and Co-Occurring Conditions</h2>
            <p className="text-gray-700 leading-relaxed text-left">
              Autism frequently coexists with other conditions such as ADHD and anxiety. In some cases, medication may be prescribed to help manage symptoms like inattention, hyperactivity, or excessive worry.
            </p>
          </section>

          {/* FAQs */}
          <section className="mb-10">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-left">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 text-left">1. Can autism be cured?</h3>
                <p className="text-gray-700 leading-relaxed text-left">
                  Autism cannot be cured, but it can be effectively managed. With early intervention, appropriate therapies, and consistent support, individuals with ASD can improve communication, social skills, and independence.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 text-left">2. Is autism caused by vaccines?</h3>
                <p className="text-gray-700 leading-relaxed text-left">
                  No. Extensive scientific research has proven that vaccines do not cause autism. This myth has been thoroughly debunked by medical and public health organizations worldwide.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 text-left">3. Can adults be diagnosed with autism?</h3>
                <p className="text-gray-700 leading-relaxed text-left">
                  Yes. Many adults, especially those with mild or high-functioning autism, are diagnosed later in life. An adult diagnosis can provide clarity, self-understanding, and access to helpful support services.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 text-left">4. Do all people with autism have intellectual disabilities?</h3>
                <p className="text-gray-700 leading-relaxed text-left">
                  No. Autism affects people across a wide range of intellectual abilities. Many individuals with ASD have average or above-average intelligence and unique strengths in areas such as memory, creativity, or problem-solving.
                </p>
              </div>
            </div>
          </section>

          {/* Final Thoughts */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-left">Final Thoughts</h2>
            <p className="text-gray-700 leading-relaxed mb-4 text-left">
              Autism Spectrum Disorder is a lifelong condition, but it does not define a person's potential or worth. Every individual with autism has unique strengths, challenges, and ways of experiencing the world. Early identification, personalized intervention, and strong family and community support can significantly improve quality of life.
            </p>
            <p className="text-gray-700 leading-relaxed text-left">
              With understanding, acceptance, and the right resources, individuals with autism can lead meaningful, independent, and fulfilling lives.
            </p>
          </section>

          {/* References */}
          <section className="border-t pt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-left">References</h2>
            <div className="space-y-3 text-sm text-gray-600">
              <div className="text-left">
                <p className="font-medium text-gray-800">American Psychiatric Association.</p>
                <p>What Is Autism Spectrum Disorder (ASD)?</p>
                <a href="https://www.psychiatry.org/patients-families/autism" 
                   className="text-blue-600 hover:underline break-all">
                  https://www.psychiatry.org/patients-families/autism
                </a>
              </div>
              
              <div className="text-left">
                <p className="font-medium text-gray-800">National Institute of Mental Health (NIMH).</p>
                <p>Autism Spectrum Disorder.</p>
                <a href="https://www.nimh.nih.gov/health/topics/autism-spectrum-disorders-asd" 
                   className="text-blue-600 hover:underline break-all">
                  https://www.nimh.nih.gov/health/topics/autism-spectrum-disorders-asd
                </a>
              </div>
              
              <div className="text-left">
                <p className="font-medium text-gray-800">Centers for Disease Control and Prevention (CDC).</p>
                <p>Autism Spectrum Disorder (ASD): Data and Information.</p>
                <a href="https://www.cdc.gov/autism" 
                   className="text-blue-600 hover:underline break-all">
                  https://www.cdc.gov/autism
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Blog2;