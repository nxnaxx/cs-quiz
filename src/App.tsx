import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Topic from './pages/Topic';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/topic" element={<Topic />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
