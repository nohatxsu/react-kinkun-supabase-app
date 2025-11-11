import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ShowAllKinKun from "./pages/ShowAllKinkun";
import AddKinkun from "./pages/AddKinkun";
import EditKinkun from "./pages/EditKinkun";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/showallkinkun" element={<ShowAllKinKun />} />
        <Route path="/addkinkun" element={<AddKinkun />} />
        <Route path="/editkinkun/:id" element={<EditKinkun />} />
      </Routes>
    </BrowserRouter>
  );
}
