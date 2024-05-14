import { useScrollToTop } from 'src/hooks/use-scroll-to-top';
import { useScroll } from 'framer-motion';
// @mui
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// components
import ScrollProgress from 'src/components/scroll-progress';
//
import FaqsHero from '../faqs-hero';
import FaqsList from '../faqs-list';
import FaqsForm from '../faqs-form';
import FaqsCategory from '../faqs-category';

// ----------------------------------------------------------------------

export default function FaqsView() {
  useScrollToTop();
  const { scrollYProgress } = useScroll();
  return (
    <>
      <ScrollProgress scrollYProgress={scrollYProgress} />
      <FaqsHero />

      <Container
        sx={{
          pb: 10,
          pt: { xs: 10, md: 5 },
          position: 'relative',
        }}
      >
        <FaqsCategory />

        <Typography
          variant="h3"
          sx={{
            my: { xs: 5, md: 10 },
          }}
        >
          Frequently asked questions
        </Typography>

        <Box
          gap={10}
          display="grid"
          gridTemplateColumns={{
            xs: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
          }}
        >
          <FaqsList />

          <FaqsForm />
        </Box>
      </Container>
    </>
  );
}
