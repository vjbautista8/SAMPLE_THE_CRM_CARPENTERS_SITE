import { useScrollToTop } from 'src/hooks/use-scroll-to-top';
import { useScroll } from 'framer-motion';
// @mui
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
// components
import ScrollProgress from 'src/components/scroll-progress';

// _mock
import { _mapContact } from 'src/_mock';
//
import ContactMap from '../contact-map';
import ContactHero from '../contact-hero';
import ContactForm from '../contact-form';

// ----------------------------------------------------------------------

export default function ContactView() {
  useScrollToTop();
  const { scrollYProgress } = useScroll();
  return (
    <>
      <ScrollProgress scrollYProgress={scrollYProgress} />
      <ContactHero />

      <Container sx={{ py: 10 }}>
        <Box
          gap={10}
          display="grid"
          gridTemplateColumns={{
            xs: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
          }}
        >
          <ContactForm />

          {/* <ContactMap contacts={_mapContact} /> */}
        </Box>
      </Container>
    </>
  );
}
