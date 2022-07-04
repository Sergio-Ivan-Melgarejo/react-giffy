import React, { Suspense } from "react";
import { Redirect, Route } from "wouter";

// Context
import { GifsContextProvider } from "./context/GifsContext";

// Components
import SearchResults from "./pages/SearchResults";
import Detail from "./pages/Detail";
import Nav from "components/Nav";
import SearchForm from "components/SearchForm";
import Footer from "components/Footer";

// Style
import { AppStyled } from "AppStyled";
import Error404 from "pages/Error404";

// import Home from './pages/Home'
const HomePage = React.lazy(() => import("./pages/Home"));

export default function App() {
  return (
    <AppStyled>
      <Suspense fallback={"Cargando"}>
        <Nav />
        <SearchForm />
        <section className="App-content">
          <GifsContextProvider>
            <Route index component={HomePage} />
            <Route path="/search/:keyword" component={SearchResults} />
            <Route path="/gif/:id" component={Detail} />
            <Route path="/404" component={Error404} />
            <Route path="*" component={<Redirect to="/404"/>} />
          </GifsContextProvider>
        </section>
        <Footer />
      </Suspense>
    </AppStyled>
  );
}
