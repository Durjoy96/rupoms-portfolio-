import About from "@/components/About/About";
import Hero from "@/components/Hero/Hero";
import MainVideo from "@/components/main-video";
import Portfolio from "@/components/Portfolio/Portfolio";
import SmoothScroll from "@/components/smooth-scroll";

export default function Home() {
  return (
    <>
      <SmoothScroll>
        <section data-theme="light">
          <MainVideo />
        </section>
        <section data-theme="light">
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
