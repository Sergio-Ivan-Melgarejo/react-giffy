import {useState} from "react"
import './App.css';

// Librerias
import {Route} from 'wouter';

// Context
import { GifsContextProvider } from './context/GifsContext';

// Component
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Search from 'pages/Search';
import FormSearch from 'components/FormSearch';

const dataInitial = {
  lang: "en",
  rating: "g",
  dark: true
};

function App() {
  const [dataApp, setDataApp] = useState(dataInitial);

  return (
      <div className={ dataApp.dark ? "App dark" : "App"}>
        <div className='app-container-grid'>
          <Nav dataApp={dataApp} setDataApp={setDataApp} />
          <FormSearch />

          <GifsContextProvider>
            <Route component={Home} 
              path="/"
            />
            <Route component={Search} 
              path="/search/:keyword"
            />
            <Route component={Detail} 
              path="/gif/:id"
            />
          </GifsContextProvider>
          
          <Footer/>
        </div>
      </div>
  );
}

export default App;
