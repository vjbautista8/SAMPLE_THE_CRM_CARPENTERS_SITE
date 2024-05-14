import { lazy, Suspense, useEffect, useState } from 'react';
import { Navigate, useRoutes, HashRouter, Route, Routes, useSearchParams } from 'react-router-dom';
//
import { useScrollToTop } from 'src/hooks/use-scroll-to-top';
// layouts
import MainLayout from 'src/layouts/main';
// config
import { PATH_AFTER_LOGIN } from 'src/config-global';
// components
import { SplashScreen } from 'src/components/loading-screen';
//
import { mainRoutes, HomePage } from './main';
// ----------------------------------------------------------------------
const AboutPage = lazy(() => import('src/pages/about-us'));
const ContactPage = lazy(() => import('src/pages/contact-us'));
const FaqsPage = lazy(() => import('src/pages/faqs'));
const PostListPage = lazy(() => import('src/pages/post/list'));
const Page404 = lazy(() => import('src/pages/404'));

export default function Router() {
  const [page, setPage] = useState(null);
  const [pageHTML, setPageHTML] = useState();
  const redirectToPage = (pageParam) => {
    if (pageParam === null || pageParam === '' || pageParam === 'home') {
      return (
        <MainLayout>
          <Suspense fallback={<SplashScreen />}>
            <HomePage />
          </Suspense>
        </MainLayout>
      );
    }
    if (pageParam === 'about-us') {
      return (
        <MainLayout>
          <Suspense fallback={<SplashScreen />}>
            <AboutPage />
          </Suspense>
        </MainLayout>
      );
    }
    if (pageParam === 'contact-us') {
      return (
        <MainLayout>
          <Suspense fallback={<SplashScreen />}>
            <ContactPage />
          </Suspense>
        </MainLayout>
      );
    }
    if (pageParam === 'faqs') {
      return (
        <MainLayout>
          <Suspense fallback={<SplashScreen />}>
            <FaqsPage />
          </Suspense>
        </MainLayout>
      );
    }
    if (pageParam === 'blog') {
      return (
        <MainLayout>
          <Suspense fallback={<SplashScreen />}>
            <PostListPage />
          </Suspense>
        </MainLayout>
      );
    }
    return (
      <>
        <Suspense fallback={<SplashScreen />}>
          <Page404 />
        </Suspense>
      </>
    );
  };
  console.log(window.location.href);
  const pathnameParam = window.location.href;
  useEffect(() => {
    console.log('PATH', window.location.pathname);
    const query = new URLSearchParams(window.location.search);
    console.log('QUERY', query);
    const pageName = query.get('page');
    setPage(pageName);
    console.log('PAGE', pageName);
    setPageHTML(redirectToPage(pageName));
  }, [pathnameParam]);

  return useRoutes([
    // SET INDEX PAGE WITH SKIP HOME PAGE

    {
      path: '/',
      element: <Navigate to="/app" replace />,
    },

    // ----------------------------------------------------------------------

    // SET INDEX PAGE WITH HOME PAGE
    {
      path: '/app',
      element: pageHTML,
    },
    {
      path: '/app/about-us1',
      element: <h1>About</h1>,
    },
    // Auth routes

    // Main routes
    ...mainRoutes,

    // Components routes

    // No match 404
    { path: '*', element: <Navigate to="/app/404" replace /> },
    { path: '', element: <Navigate to="/app/404" replace /> },
  ]);
}
