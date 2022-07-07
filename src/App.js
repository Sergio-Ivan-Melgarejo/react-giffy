import React, { Suspense } from "react";
import { Route } from "wouter";

// Context
import { GifsContextProvider } from "./context/GifsContext";

// Components
import SearchResults from "./pages/SearchResults";
import Detail from "./pages/Detail";
import Nav from "components/Nav";
import Footer from "components/Footer";
import Error404 from "pages/Error404";
import RedirectError404 from "components/RedirectError404";

// Style
import { AppStyled } from "AppStyled";

// import Home from './pages/Home'
const HomePage = React.lazy(() => import("./pages/Home"));

export default function App() {
  return (
    <AppStyled>
      <Suspense fallback={"Cargando"}>
        <Nav />
        <section className="App-content">
          <GifsContextProvider>
            <Route path="/" component={HomePage} />
            <Route path="/search/:keyword/:rating?" component={SearchResults} />
            <Route path="/gif/:id" component={Detail} />
            <Route path="/404" component={Error404} />
            <Route path="/:rest*" component={RedirectError404} />
          </GifsContextProvider>
        </section>
        <Footer />
      </Suspense>
    </AppStyled>
  );
}
