import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import LazyLoader from '@molecules/spinner/LazyLoader';

function App() {
  const Home = lazy(() => import('@pages/Home'));
  const Topics = lazy(() => import('@pages/Topics'));
  const Loading = lazy(() => import('@pages/Loading'));
  const Quiz = lazy(() => import('@pages/Quiz'));
  const QuizResults = lazy(() => import('@pages/QuizResults'));

  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<LazyLoader />}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/topics" element={<Topics />} />
          <Route path="/loading" element={<Loading />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/results" element={<QuizResults />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
