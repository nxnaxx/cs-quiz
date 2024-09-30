import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import useQuizStore from '@store/useQuizStore';
import { sampleMultipleData } from '@data/dummyData';
import Home from './pages/Home';
import Topics from './pages/Topics';
import Quiz from '@pages/Quiz';
import QuizResults from '@pages/QuizResults';
import useOptionStore from '@store/useOptionStore';

function App() {
  /* 추후 삭제 */
  const { setQuizData } = useQuizStore();
  const { setOptionValues } = useOptionStore();

  useEffect(() => {
    setQuizData(sampleMultipleData);
    setOptionValues('topic', 'JavaScript');
    setOptionValues('difficulty', '쉬움');
    setOptionValues('quizType', '객관식');
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/quiz" element={<Quiz quizType="객관식" />} />
        <Route path="/results" element={<QuizResults />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
