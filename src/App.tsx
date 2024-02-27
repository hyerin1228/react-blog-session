import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import LogInPage from "./pages/LogInPage";
import SignUpPage from "./pages/SignUpPage";
import TilDetailPage from "./pages/TilDetailPage";
import WriteTilPage from "./pages/WriteTilPage";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/tils/write" element={<WriteTilPage />} />
            <Route path="/tils/:tilId" element={<TilDetailPage />} />
            <Route path="/auth/sign-up" element={<SignUpPage />} />
            <Route path="/auth/log-in" element={<LogInPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
