import About from "@/components/About/About";
import Hero from "@/components/Hero/Hero";
import Portfolio from "@/components/Portfolio/Portfolio";
import SmoothScroll from "@/components/smooth-scroll";

export default function Home() {
  return (
    <>
      <SmoothScroll>
        <section>
          <Hero />
        </section>
        <section>
          <About />
        </section>
        <section>
          <Portfolio />
        </section>
      </SmoothScroll>
    </>
  );
}
