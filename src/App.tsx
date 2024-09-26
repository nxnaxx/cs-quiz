import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Topics from './pages/Topics';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/topics" element={<Topics />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
