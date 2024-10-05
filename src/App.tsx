import { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Home from '@pages/Home';
import Loading from '@pages/Loading';
import Quiz from '@pages/Quiz';
import QuizResults from '@pages/QuizResults';
import Topics from '@pages/Topics';

function App() {
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
      <Routes>
        <Route index element={<Home />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/results" element={<QuizResults />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
