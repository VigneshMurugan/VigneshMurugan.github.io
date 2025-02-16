
const experiences = [
  {
    year: "2023",
    title: "Senior Developer",
    company: "Tech Corp",
    description: "Led development of flagship product, mentored junior developers",
  },
  {
    year: "2021",
    title: "Full Stack Developer",
    company: "Digital Agency",
    description: "Built scalable web applications using modern technologies",
  },
  {
    year: "2019",
    title: "Frontend Developer",
    company: "Startup Inc",
    description: "Created responsive interfaces and improved user experience",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Career Journey</h2>
          
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
