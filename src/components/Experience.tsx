
const experiences = [
  {
    year: "2023",
    title: "Software Engineer P4",
    company: "Pluralsight India",
    description: "Leading content creation and ingestion tools team, specializing in multi-language video transcription and guides content. Tech stack: React, Node.js, PostgreSQL, AWS, Terraform",
  },
  {
    year: "2022",
    title: "Software Engineer L3",
    company: "Twilio",
    description: "Part of Real Time Insights team, developing services for Kafka stream processing and real-time statistics generation. Tech stack: Java, React, PostgreSQL, Aurora, AWS, Terraform",
  },
  {
    year: "2019",
    title: "Engineer II",
    company: "American Express",
    description: "Full Stack developer in Card Shop team, handling card purchase and referral journey. Tech stack: React, Node, TypeScript, PostgreSQL",
  },
  {
    year: "2018",
    title: "Senior Engineer",
    company: "Enquero",
    description: "Implemented multi-currency journey for Australian commerce site. Tech stack: React, Node, TypeScript, RxJS",
  },
  {
    year: "2018",
    title: "Senior Software Engineer",
    company: "Medlife",
    description: "Created prescription analysis tool for doctor database generation. Tech stack: Vue.js, Node, Java, Redis",
  },
  {
    year: "2015",
    title: "Technologist",
    company: "Wipro Digital",
    description: "Led digitalization initiatives across multiple projects. Tech stack: React, Node, D3.js, Angular, Java",
  },
  {
    year: "2013",
    title: "Senior Software Engineer",
    company: "Odessa Technologies",
    description: "Developed new features for leasing products. Tech stack: C#.NET, LINQ, SQL",
  },
];

const Experience = () => {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="animate-on-scroll">
          <span className="text-secondary-DEFAULT text-sm tracking-wider uppercase mb-4 block">
            Experience
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Professional Journey</h2>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row gap-6 md:gap-12 relative animate-on-scroll"
              >
                <div className="text-secondary-DEFAULT font-mono text-lg md:w-24 flex-shrink-0">
                  {exp.year}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
                  <p className="text-secondary-DEFAULT mb-2">{exp.company}</p>
                  <p className="text-secondary-foreground/70">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
