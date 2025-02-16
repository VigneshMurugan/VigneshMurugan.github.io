
const About = () => {
  return (
    <section className="section-padding bg-accent/10">
      <div className="max-w-4xl mx-auto">
        <div className="animate-on-scroll">
          <span className="text-secondary-DEFAULT text-sm tracking-wider uppercase mb-4 block">
            About
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Education & Background</h2>

          <div className="space-y-12 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="animate-on-scroll">
                <h3 className="text-xl font-semibold mb-2">Master of Technology</h3>
                <p className="text-secondary-DEFAULT mb-1">Birla Institute of Technology and Science</p>
                <p className="text-secondary-foreground/70 mb-2">2015 - 2018</p>
                <p className="text-secondary-foreground/70">Work Integrated Learning Program on Software Systems</p>
              </div>

              <div className="animate-on-scroll">
                <h3 className="text-xl font-semibold mb-2">Bachelor of Engineering</h3>
                <p className="text-secondary-DEFAULT mb-1">Tamilnadu College of Engineering</p>
                <p className="text-secondary-foreground/70 mb-2">2009 - 2013</p>
                <p className="text-secondary-foreground/70">Computer Science and Engineering</p>
              </div>
            </div>
          </div>
          
          <div className="prose prose-lg dark:prose-invert">
            <p>
              Experienced software engineer with a strong foundation in both academic studies and professional practice. 
              Skilled in modern web technologies and enterprise software development, with expertise spanning frontend 
              and backend development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
