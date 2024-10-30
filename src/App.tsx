import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import { useEffect, useState } from "react";

const AppRouter = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/main"
          element={isLoggedIn ? <MainPage /> : <Navigate to="/login" />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
