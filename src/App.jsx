import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ShowAllKinKun from './pages/ShowAllKinkun';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/showallkinkun" element={<ShowAllKinKun />} />
      </Routes>
    </BrowserRouter>
  );
}