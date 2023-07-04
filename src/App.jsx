import Layout from "./layouts";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import DetailPage from "./pages/DetailPage";
import HomePage from "./pages/Home";

function App() {
  return (
    <>
      <Layout>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/DetailPage" element={<DetailPage />}></Route>
      </Routes>
      </Layout>
    </>
  );
}

export default App;
