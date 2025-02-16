
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToAbout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center section-padding relative">
      <div className="space-y-6">
        <span className="text-secondary-DEFAULT text-sm tracking-wider uppercase mb-4 block fade-in">
          Welcome to my portfolio
        </span>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-reveal">
          I create digital experiences
          <br /> that inspire
        </h1>
        <p className="text-secondary-foreground/70 text-lg md:text-xl max-w-2xl mx-auto fade-in" style={{ animationDelay: "0.3s" }}>
          I'm a passionate developer focused on building beautiful interfaces & experiences
        </p>
      </div>
      
      <a
        href="#about"
        onClick={scrollToAbout}
        className="absolute bottom-12 animate-bounce hover:text-secondary-DEFAULT transition-colors hover-lift"
        style={{ animationDelay: "0.6s" }}
        aria-label="Scroll to About section"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  );
};

export default Hero;
