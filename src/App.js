import React, { Suspense } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

// Context
import { GifsContextProvider } from "./context/GifsContext";
import AuthContext from "./context/AuthContext";

// Components
import SearchResults from "./pages/SearchResults";
import Detail from "./pages/Detail";
import Nav from "components/Nav";
import Footer from "components/Footer";
import Error404 from "pages/Error404";
import LoginPage from "pages/LoginPage";
import RegisterPage from "pages/RegisterPage";

// Style
import { AppStyled } from "AppStyled";
import Spinner from "components/Spinner";

// import Home from './pages/Home'
const HomePage = React.lazy(() => import("./pages/Home"));

export default function App() {
  return (
    <AppStyled>
      <AuthContext>
        <BrowserRouter>
          <Suspense fallback={<Spinner/>}>
            <Nav />
            <section className="App-content">
              <GifsContextProvider>
                <Routes>
                  <Route index element={<HomePage />} />
                  <Route
                    path="/search/:keyword/:rating"
                    element={<SearchResults />}
                  />
                  <Route path="/gif/:id" element={<Detail />} />
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/register" element={<RegisterPage />} />
                  <Route path="*" element={<Error404 />} />
                </Routes>
              </GifsContextProvider>
            </section>
            <Footer />
          </Suspense>
        </BrowserRouter>
      </AuthContext>
    </AppStyled>
  );
}
