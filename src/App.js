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
import Login from "pages/Login";

// Style
import { AppStyled } from "AppStyled";

// import Home from './pages/Home'
const HomePage = React.lazy(() => import("./pages/Home"));

export default function App() {
  return (
    <AppStyled>
      <AuthContext>
        <BrowserRouter>
          <Suspense fallback={"Cargando"}>
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
                  <Route path="/login" element={<Login />} />
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
