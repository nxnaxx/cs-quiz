import { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import useQuizStore from '@store/useQuizStore';
import useOptionStore from '@store/useOptionStore';
import { sampleMultipleData } from '@data/dummyData';
import Home from './pages/Home';
import Topics from './pages/Topics';
import Loading from '@pages/Loading';
import Quiz from '@pages/Quiz';
import QuizResults from '@pages/QuizResults';

function App() {
  /* 추후 삭제 */
  const { setQuizData } = useQuizStore();
  const { setOptionValues } = useOptionStore();

  useEffect(() => {
    setQuizData(sampleMultipleData);
    setOptionValues('topic', 'JavaScript');
  }, []);

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
        <Route path="/quiz" element={<Quiz quizType="객관식" />} />
        <Route path="/results" element={<QuizResults />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
