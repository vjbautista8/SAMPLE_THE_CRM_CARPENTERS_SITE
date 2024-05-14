// routes
import { paths } from 'src/routes/paths';
// config
import { PATH_AFTER_LOGIN } from 'src/config-global';
// components
import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

export const navConfig = [
  {
    title: 'Home',
    icon: <Iconify icon="solar:home-2-bold-duotone" />,
    path: '/app/?page=home',
  },
  {
    title: 'About',
    icon: <Iconify icon="solar:shield-user-bold-duotone" />,
    path: '/app/?page=about-us',
  },
  // {
  //   title: 'Contact Us',
  //   icon: <Iconify icon="solar:mailbox-bold-duotone" />,
  //   path: '/app/?page=contact-us',
  // },
  {
    title: 'Blog',
    icon: <Iconify icon="solar:question-square-bold-duotone" />,
    path: '/app/?page=blog',
  },
  {
    title: 'FAQs',
    icon: <Iconify icon="solar:question-square-bold-duotone" />,
    path: '/app/?page=faqs',
  },

  {
    title: 'Pages',
    path: '/pages',
    icon: <Iconify icon="solar:code-file-bold-duotone" />,
    children: [
      {
        subheader: 'Other',
        items: [
          { title: 'Pricing', path: paths.pricing },
          { title: 'Payment', path: paths.payment },
          { title: 'Maintenance', path: paths.maintenance },
          { title: 'Coming Soon', path: paths.comingSoon },
        ],
      },
      {
        subheader: 'Concepts',
        items: [
          { title: 'Shop', path: paths.product.root },
          { title: 'Product', path: paths.product.demo.details },
          { title: 'Checkout', path: paths.product.checkout },
          { title: 'Posts', path: paths.post.root },
          { title: 'Post', path: paths.post.demo.details },
        ],
      },

      {
        subheader: 'Error',
        items: [
          { title: 'Page 403', path: paths.page403 },
          { title: 'Page 404', path: paths.page404 },
          { title: 'Page 500', path: paths.page500 },
        ],
      },
    ],
  },
];
