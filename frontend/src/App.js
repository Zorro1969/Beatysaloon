import { Route, Routes } from "react-router-dom";
import { UserContextProvider } from "./UserContext";
import Layout from "./Layout";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProcedurePage from "./pages/ProcedurePage";
import "./App.css";

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path={"/login"} element={<LoginPage />} />
          <Route path={"/register"} element={<RegisterPage />} />
          <Route path="/create" element={<ProcedurePage />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
