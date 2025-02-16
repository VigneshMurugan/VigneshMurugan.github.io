
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center section-padding relative">
      <div className="animate-fade-in">
        <span className="text-secondary-DEFAULT text-sm tracking-wider uppercase mb-4 block">
          Welcome to my portfolio
        </span>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
          I create digital experiences
          <br /> that inspire
        </h1>
        <p className="text-secondary-foreground/70 text-lg md:text-xl max-w-2xl mx-auto">
          I'm a passionate developer focused on building beautiful interfaces & experiences
        </p>
      </div>
      
      <a
        href="#about"
        className="absolute bottom-12 animate-bounce hover:text-secondary-DEFAULT transition-colors"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  );
};

export default Hero;
