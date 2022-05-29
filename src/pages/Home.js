// Librerias
import { Link } from 'wouter';

// Context

// Hooks
import useGifs from 'hooks/useGifs';
import useGifSearched from 'hooks/useGifSearched';

// Components
import Loader from 'components/Loader';
import TrendingSearch from 'components/trends/LazyTrendingSearch';
import ListOfGifs from 'components/ListOfGifs';

// Style
import "./home.css";

const recommended = ["Panda","pandas","mas pandas","rick & morty","the witcher"];

const Home = () => {
  const {loading,gifs,datalocalStorage}= useGifs()
  const searched = useGifSearched();
  const getLocalStorage = localStorage.getItem("LastKeyword");

  return (
    <header className='home'>
        <div className='home__container'>

          <section className='home__recommended'>
            <h2 className='home__title'><span className='color'>gif -</span>  Recommended</h2>
            <ul className='home__ul' >
              {
                recommended.map((ele,num) => <li key={num} className={`home__li li-${num}`}>
                  <Link className='btn' to={`/search/${ele}`}>{ele}</Link>
                </li>)
              }
            </ul>
          </section>

          <section className='home__searched'>
            <h2 className='home__title'><span className='color'>gif -</span> Searched</h2>
            <ul className='home__ul'>
              {
                searched.map((ele,num) => {
                  if(ele)return (
                    <li key={num} className="home__li">
                      <Link className='btn' to={`/search/${ele}`}>{ele}</Link>
                    </li>
                  )
                  else return (
                    <li key={num} className="home__li">
                      <div className='btn rellenar'>{ele}</div>
                    </li>
                  )
                })
              }
            </ul>
          </section>

        </div>

       {/* { getLocalStorage ? 
        <>
         { 
          loading ? 
            <Loader />
          :
            <>
              <h3 className="home__last-search">Last Searched...</h3>
              <section className="gifs-container">
                {
                  gifs.map((gif) => <Gif dataApp={{lang:"en"}} key={"gif=" + gif.id} title={gif.title} id={gif.id} img={gif.img}/>)
                }
              </section>
            </>
          }
        </>
        :
        null
      } */}
      
       { getLocalStorage ? 
        <>
         { 
          loading ? 
            <Loader />
          :
            <>
              <h3 className="home__last-search">Last Searched - {getLocalStorage}</h3>
              <ListOfGifs gifs={gifs} loading={loading} />
            </>
          }
        </>
        :
        null
      }


      <TrendingSearch />
    </header>
  )
}

export default Home