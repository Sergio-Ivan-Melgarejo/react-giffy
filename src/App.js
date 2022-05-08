import './App.css';
import {useState} from "react";

// Librerias
import 'bootstrap';
import './bootstrap/bootstrap.min.css';
import {Route} from 'wouter';

// Context
import { GifsContextProvider } from './context/GifsContext';

// Component
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import ListGifs from './components/ListGifs';
import Detail from './pages/Detail';

const dataInitial = {
  limit: "10",
  lang: "en",
  rating: "g",
  dark: true
};

function App() {
  const [dataApp, setDataApp] = useState(dataInitial);

  return (
      <div className={ dataApp.dark ? "App dark" : "App"}>
        <div className='container-grid container p-0 px-md-1'>
          <Nav dataApp={dataApp} setDataApp={setDataApp} />
          <div className='position-relative'>
                
          <GifsContextProvider>
            <Route component={Home} 
              path="/"
            />
            <Route component={ListGifs} 
              path="/search/:keyword"
            />
            <Route component={Detail} 
              path="/gif/:id"
            />
          </GifsContextProvider>

          </div>
          <Footer/>
        </div>
      </div>
  );
}

export default App;
