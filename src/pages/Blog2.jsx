import React, { useEffect } from 'react';

const bullet = (text, key) => (
  <li className="flex items-start" key={key}>
    <span className="text-blue-600 mr-2">•</span>
    <span>{text}</span>
  </li>
);

export const AutismBlogContent = ({
  heroImage = '/images/Blog2.jpg',
  includeDocumentImages = false,
}) => {
  useEffect(() => {
    document.title = 'Autism Explained: Complete Guide to ASD';

    const description =
      'Learn what Autism Spectrum Disorder (ASD) is, its signs, causes, diagnosis, and support options in this complete, easy-to-understand guide.';
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
            Autism Explained: A Complete Guide to Understanding ASD
          </h1>

          <div className="w-full mb-8">
            <img
              src={heroImage}
              alt="Autism Spectrum Disorder guide"
              className="w-full h-auto rounded-lg shadow-md object-cover"
            />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-gray-700 leading-relaxed mb-4 text-left">
              If your child has recently been diagnosed with Autism Spectrum Disorder (ASD), or if you are wondering whether you or someone you love may be on the autism spectrum, it is natural to feel overwhelmed, uncertain, or even afraid. These emotions are completely understandable.
            </p>
            <p className="text-gray-700 leading-relaxed text-left">
              The good news is that with early support, appropriate therapies, and a compassionate community, individuals with autism can grow, thrive, and live deeply meaningful lives. This guide is here to help you understand what autism is, how it is identified, what causes it, and how it can be supported.
            </p>
          </div>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-left">What Is Autism Spectrum Disorder (ASD)?</h2>
            <p className="text-gray-700 leading-relaxed mb-4 text-left">
              Autism Spectrum Disorder (ASD) is a complex neurodevelopmental condition that affects how a person communicates, interacts socially, and experiences the world around them. The term "spectrum" reflects the wide range of abilities, challenges, and characteristics that individuals with autism may have. No two people with autism are exactly alike.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4 text-left">
              ASD is typically identified in early childhood, though some individuals are not diagnosed until adolescence or adulthood. It is a lifelong condition, but with the right support, many people with autism lead independent and fulfilling lives.
            </p>
            <p className="text-gray-700 leading-relaxed text-left">
              Autism is more common than many people realize. According to current estimates, approximately 1 in 36 children in the United States is diagnosed with ASD.
            </p>
          </section>

          {includeDocumentImages && (
            <div className="w-full mb-10">
              <img
                src="/images/57.png"
                alt="Autism spectrum disorder educational visual"
                className="w-full rounded-lg shadow-md object-cover"
              />
            </div>
          )}

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-left">Signs and Symptoms of Autism</h2>
            <p className="text-gray-700 leading-relaxed mb-6 text-left">
              The signs of autism can vary widely between individuals. Symptoms generally fall into two main areas:
            </p>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3 text-left">1. Social Communication and Interaction Challenges</h3>
              <ul className="space-y-2 text-gray-700 text-left">
                {[
                  'Difficulty understanding or responding to social cues such as facial expressions, body language, or tone of voice',
                  'Limited eye contact or difficulty sustaining eye contact',
                  'Challenges in starting or maintaining conversations',
                  'Difficulty making or keeping friendships',
                  'Preferring to play alone rather than with others',
                  'Unusual or limited emotional responses to others',
                  'Difficulty understanding humor, sarcasm, or abstract language',
                ].map((item, index) => bullet(item, index))}
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3 text-left">2. Restricted and Repetitive Behaviors</h3>
              <ul className="space-y-2 text-gray-700 text-left">
                {[
                  'Repetitive movements such as rocking, hand-flapping, or spinning',
                  'Strict adherence to routines and significant distress when routines change',
                  'Intense, narrow interests in specific topics',
                  'Unusual sensitivity to sensory input such as sounds, textures, lights, or smells',
                  'Repeating words or phrases (echolalia)',
                  'Resistance to transitions or changes in the environment',
                ].map((item, index) => bullet(item, index))}
              </ul>
            </div>

            <p className="text-gray-700 leading-relaxed bg-blue-50 p-4 rounded-lg text-left">
              It is important to understand that autism presents differently across individuals, ages, and genders. Some people with autism have significant support needs, while others are highly independent. Symptoms may be subtle or more pronounced.
            </p>
          </section>

          {includeDocumentImages && (
            <div className="w-full mb-10">
              <img
                src="/images/56.png"
                alt="Autism signs and symptoms educational visual"
                className="w-full rounded-lg shadow-md object-cover"
              />
            </div>
          )}

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-left">What Causes Autism?</h2>
            <p className="text-gray-700 leading-relaxed mb-4 text-left">
              The exact cause of autism is not yet fully understood. Research strongly suggests that autism results from a combination of genetic and environmental factors that influence early brain development.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4 text-left">Known risk factors associated with ASD include:</p>
            <ul className="space-y-2 text-gray-700 mb-4 text-left">
              {[
                'Having a sibling or parent with autism',
                'Certain genetic conditions such as Fragile X syndrome or Rett syndrome',
                'Advanced parental age at the time of birth',
                'Prenatal exposure to certain medications or environmental toxins',
                'Premature birth or low birth weight',
              ].map((item, index) => bullet(item, index))}
            </ul>
            <p className="text-gray-700 leading-relaxed text-left">
              It is important to state clearly: vaccines do not cause autism. This has been thoroughly and repeatedly studied, and the scientific consensus firmly confirms there is no link between vaccines and ASD.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-left">Does My Child Have Autism?</h2>
            <p className="text-gray-700 leading-relaxed mb-4 text-left">
              Early identification is one of the most important factors in supporting a child with autism. Some early signs to watch for include:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4 text-left">
              {[
                'Not babbling or pointing by 12 months',
                'Not using single words by 16 months',
                'Loss of previously acquired language or social skills at any age',
                'Avoiding eye contact or not responding to their name',
                'Limited interest in playing with other children',
              ].map((item, index) => bullet(item, index))}
            </ul>
            <p className="text-gray-700 leading-relaxed text-left">
              If you notice these signs or have concerns about your child's development, speak with your pediatrician as soon as possible. Early intervention makes a meaningful difference.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-left">How Is Autism Diagnosed?</h2>
            <p className="text-gray-700 leading-relaxed mb-6 text-left">
              There is no single blood test or medical scan that can diagnose autism. Diagnosis is based on a comprehensive evaluation by qualified healthcare professionals.
            </p>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3 text-left">Diagnosis in Children</h3>
              <p className="text-gray-700 mb-3 text-left">A thorough evaluation may include:</p>
              <ul className="space-y-2 text-gray-700 mb-4 text-left">
                {[
                  'Developmental screening during routine well-child visits',
                  'Detailed behavioral observation and assessment',
                  'Interviews with parents or caregivers',
                  'Input from teachers or childcare providers',
                  'Speech and language evaluations',
                  'Cognitive or developmental testing',
                ].map((item, index) => bullet(item, index))}
              </ul>
              <p className="text-gray-700 leading-relaxed text-left">
                Most children with autism are diagnosed by age 4, though children can be reliably evaluated as early as 18 to 24 months.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3 text-left">Diagnosis in Adults</h3>
              <p className="text-gray-700 mb-3 text-left">
                Many adults go undiagnosed for years, particularly women and those with milder symptoms. Adult evaluations typically include:
              </p>
              <ul className="space-y-2 text-gray-700 text-left">
                {[
                  'A detailed clinical interview about current functioning and developmental history',
                  'Standardized assessment tools designed for adult autism evaluation',
                  'Review of childhood records when available',
                  'Input from family members or close partners',
                ].map((item, index) => bullet(item, index))}
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4 text-left">
                A late diagnosis can still be life-changing, offering clarity, self-understanding, and access to appropriate support.
              </p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-left">Treatment and Support Options for Autism</h2>
            <p className="text-gray-700 leading-relaxed mb-6 text-left">
              There is no cure for autism, and many in the autism community do not view autism as something that needs to be cured. However, therapies and support strategies can help individuals build skills, improve communication, and navigate daily life more effectively.
            </p>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3 text-left">For Children</h3>
              <ul className="space-y-2 text-gray-700 text-left">
                {[
                  'Applied Behavior Analysis (ABA): A structured, evidence-based therapy that helps build communication, social, and daily living skills',
                  'Speech-Language Therapy: Helps improve verbal and nonverbal communication',
                  'Occupational Therapy: Supports daily living skills and sensory integration',
                  'Social Skills Training: Teaches appropriate social interactions in structured settings',
                  'Early Intervention Programs: Federally funded services for children under age 3 with developmental delays',
                  'Special Education Services: Individualized Education Plans (IEPs) and school accommodations',
                ].map((item, index) => bullet(item, index))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3 text-left">For Adolescents and Adults</h3>
              <ul className="space-y-2 text-gray-700 text-left">
                {[
                  'Cognitive Behavioral Therapy (CBT) to address anxiety and emotional regulation',
                  'Vocational training and supported employment programs',
                  'Life skills coaching for independent living',
                  'Social support groups and community programs',
                ].map((item, index) => bullet(item, index))}
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-left">Medications for Autism</h2>
            <p className="text-gray-700 leading-relaxed mb-4 text-left">
              No medication treats autism itself. However, medications may be prescribed to help manage specific symptoms that accompany autism, such as:
            </p>
            <ul className="space-y-2 text-gray-700 mb-4 text-left">
              {[
                'Anxiety or depression',
                'Attention difficulties',
                'Aggressive or self-injurious behaviors',
                'Sleep problems',
              ].map((item, index) => bullet(item, index))}
            </ul>
            <p className="text-gray-700 leading-relaxed text-left">
              Medication decisions should always be made carefully in partnership with a healthcare provider, with close monitoring for side effects and effectiveness.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-left">Living With Autism</h2>
            <p className="text-gray-700 leading-relaxed mb-6 text-left">
              Living with autism, or raising a child with autism, comes with unique challenges. It also comes with unique strengths.
            </p>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3 text-left">For Children and Families</h3>
              <ul className="space-y-2 text-gray-700 text-left">
                {[
                  'Consistent routines and structured environments help reduce anxiety',
                  'Clear, predictable communication works best',
                  'Celebrate individual strengths and interests',
                  'Build a support team including therapists, teachers, and other parents',
                  'Connect with local and national autism organizations for guidance and resources',
                ].map((item, index) => bullet(item, index))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3 text-left">For Adults</h3>
              <ul className="space-y-2 text-gray-700 text-left">
                {[
                  'Many adults with autism lead independent, successful, and fulfilling lives',
                  'Understanding your own sensory and social needs helps with self-advocacy',
                  'Workplace accommodations can make a significant difference',
                  'Therapy and peer support communities offer valuable connections',
                ].map((item, index) => bullet(item, index))}
              </ul>
            </div>

            <p className="text-gray-700 leading-relaxed mt-6 bg-green-50 p-4 rounded-lg font-medium text-left">
              Autism does not define a person. Many individuals with autism have remarkable abilities, deep passions, and meaningful contributions to offer the world.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-left">Autism Support and Communities</h2>
            <p className="text-gray-700 leading-relaxed text-left">
              Support groups, advocacy organizations, and online communities offer invaluable resources for individuals with autism and their families. Connecting with others who understand your experience can reduce isolation and build confidence.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4 text-left">
              Organizations such as the Autism Society of America, the Autism Science Foundation, and the Autistic Self Advocacy Network offer education, resources, and community connections.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-left">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                {
                  question: '1. Can autism be outgrown?',
                  answer:
                    'Autism is a lifelong condition. However, many individuals make significant developmental gains over time, particularly with early and consistent support. Skills can improve substantially, and many adults with autism live independently and lead fulfilling lives.',
                },
                {
                  question: '2. Is autism more common in boys than girls?',
                  answer:
                    'Autism is diagnosed more frequently in boys than in girls at a ratio of approximately 4 to 1. However, research suggests that autism in girls is often underdiagnosed or diagnosed later because symptoms may present differently and can be less recognizable.',
                },
                {
                  question: '3. Can adults be diagnosed with autism for the first time?',
                  answer:
                    'Yes. Many adults receive their first autism diagnosis in their 20s, 30s, or even later. A late diagnosis can be validating and can open the door to appropriate support and self-understanding.',
                },
                {
                  question: '4. Do all people with autism have intellectual disabilities?',
                  answer:
                    'No. Autism occurs across all intellectual levels. Some individuals with autism have intellectual disabilities, while many others have average or above-average intelligence. The spectrum is broad and varied.',
                },
                {
                  question: "5. What is the difference between autism and Asperger's syndrome?",
                  answer:
                    "Asperger's syndrome was previously considered a separate diagnosis but is now included under the broader category of Autism Spectrum Disorder in current diagnostic guidelines. Individuals formerly diagnosed with Asperger's typically have average or above-average intelligence and strong verbal skills.",
                },
              ].map((item) => (
                <div className="bg-gray-50 p-6 rounded-lg" key={item.question}>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 text-left">{item.question}</h3>
                  <p className="text-gray-700 leading-relaxed text-left">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-left">Final Thoughts</h2>
            <p className="text-gray-700 leading-relaxed mb-4 text-left">
              Autism is a complex, lifelong condition, but it is also a part of the beautiful diversity of human experience. Early diagnosis, individualized support, and a compassionate community can make an enormous difference in the life of someone with autism.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4 text-left">
              Whether you are a parent seeking answers, an adult navigating a new diagnosis, or a professional working to support someone with ASD, know that help is available and hope is real. Individuals with autism have unique strengths, talents, and perspectives that enrich our world.
            </p>
            <p className="text-gray-700 leading-relaxed text-left">You are not alone on this journey.</p>
          </section>

          <section className="border-t pt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-left">References</h2>
            <div className="space-y-3 text-sm text-gray-600">
              <div className="text-left">
                <p className="font-medium text-gray-800">Centers for Disease Control and Prevention (CDC).</p>
                <p>Autism Spectrum Disorder (ASD) — Data and Statistics.</p>
                <a href="https://www.cdc.gov/ncbddd/autism/data.html" className="text-blue-600 hover:underline break-all">
                  https://www.cdc.gov/ncbddd/autism/data.html
                </a>
              </div>

              <div className="text-left">
                <p className="font-medium text-gray-800">National Institute of Mental Health (NIMH).</p>
                <p>Autism Spectrum Disorder — Overview, symptoms, and treatments.</p>
                <a href="https://www.nimh.nih.gov/health/topics/autism-spectrum-disorders-asd" className="text-blue-600 hover:underline break-all">
                  https://www.nimh.nih.gov/health/topics/autism-spectrum-disorders-asd
                </a>
              </div>

              <div className="text-left">
                <p className="font-medium text-gray-800">American Psychiatric Association.</p>
                <p>What Is Autism Spectrum Disorder?</p>
                <a href="https://www.psychiatry.org/patients-families/autism/what-is-autism-spectrum-disorder" className="text-blue-600 hover:underline break-all">
                  https://www.psychiatry.org/patients-families/autism/what-is-autism-spectrum-disorder
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

const Blog2 = () => <AutismBlogContent />;

export default Blog2;
