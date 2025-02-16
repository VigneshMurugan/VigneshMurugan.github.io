
const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="animate-on-scroll">
          <span className="text-secondary-DEFAULT text-sm tracking-wider uppercase mb-4 block">
            About me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Crafting digital experiences with precision and passion
          </h2>
          <div className="prose prose-lg">
            <p className="text-secondary-foreground/70 leading-relaxed">
              I'm a dedicated developer with a keen eye for design and a passion for creating
              intuitive, user-centric applications. With expertise in modern web technologies,
              I bring ideas to life through clean code and thoughtful architecture.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
