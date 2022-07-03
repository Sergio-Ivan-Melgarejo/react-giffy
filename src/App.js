import React, { Suspense } from 'react';
import { Route } from "wouter"

// Context
import {GifsContextProvider} from './context/GifsContext'

// Components
import SearchResults from './pages/SearchResults'
import Detail from './pages/Detail'
import Nav from 'components/Nav';
import SearchForm from 'components/SearchForm';
import Footer from 'components/Footer';

// Style
import { AppStyled } from 'AppStyled';

// import Home from './pages/Home'
const HomePage = React.lazy(()=> import('./pages/Home'))

export default function App() {
  return (
    <AppStyled>
      <Suspense fallback={"Cargando"} >
        <Nav />
        <SearchForm />
        <section className="App-content">
          <GifsContextProvider>
            <Route
              component={HomePage}
              path="/"
            />
            <Route
              component={SearchResults}
              path="/search/:keyword"  />
            <Route
              component={Detail}
              path="/gif/:id"
            />
          </GifsContextProvider>
        </section>
        <Footer />
      </Suspense>
    </AppStyled>
  )
}
