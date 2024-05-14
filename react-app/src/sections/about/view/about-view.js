import { useScrollToTop } from 'src/hooks/use-scroll-to-top';
import { useScroll } from 'framer-motion';
// components
import ScrollProgress from 'src/components/scroll-progress';
import AboutHero from '../about-hero';
import AboutWhat from '../about-what';
import AboutTeam from '../about-team';
import AboutVision from '../about-vision';
import AboutTestimonials from '../about-testimonials';

// ----------------------------------------------------------------------

export default function AboutView() {
  useScrollToTop();
  const { scrollYProgress } = useScroll();
  return (
    <>
      <ScrollProgress scrollYProgress={scrollYProgress} />
      <AboutHero />

      <AboutWhat />

      <AboutVision />

      <AboutTeam />

      <AboutTestimonials />
    </>
  );
}
