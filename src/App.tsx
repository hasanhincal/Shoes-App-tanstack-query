import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Main from "./Pages/Main";
import Detail from "./Pages/Detail";

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-gray min-h-screen px-4 py-6 md:px-6 md:py-8 lg:px-8 xl:px-14 xl:py-8">
        <Header />

        <Routes>
          <Route path={"/"} element={<Main />} />
          <Route path={"/detail/:id"} element={<Detail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
