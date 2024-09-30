import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Topics from './pages/Topics';
import Quiz from '@pages/Quiz';
import useQuizStore from '@store/useQuizStore';
import { sampleMultipleData } from '@data/dummyData';

function App() {
  /* 추후 삭제 */
  const { setQuizData } = useQuizStore();

  useEffect(() => {
    setQuizData(sampleMultipleData);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/quiz" element={<Quiz quizType="객관식" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
