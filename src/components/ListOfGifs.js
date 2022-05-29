// Components
import Gif from './Gif'
import Loader from './Loader';

// Style
import "./listOfGifs.css";

const ListOfGifs = ({gifs,loading}) => {
  return (
    <>
        {
          !loading 
          ?<>
              <section className="ListOfGifs">
                {
                  gifs.map((gif) => <Gif dataApp={{lang:"en"}} key={"gif=" + gif.id} title={gif.title} id={gif.id} img={gif.img}/>)
                }
              </section>
            </>
          :
            <Loader />
        }
    </>
  )
}

export default ListOfGifs