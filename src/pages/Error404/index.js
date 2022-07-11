import React from "react";
import { Link } from "react-router-dom";
import img from "../../assets/image/error.gif"

// Components
import ListOfGifs from "components/ListOfGifs";
import Spinner from "components/Spinner";

// Hooks
import { useGifs } from "hooks/useGifs";

// Styles
import { Styles } from "./Styled";


const Error404 = () => {
  const { loading, gifs } = useGifs({keyword:"404"})

  if (loading) return <Spinner />

  return (
    <Styles>
     <div className="msg">
        <img src={img} alt="" />
        <p>
          <span>Oops! There’s nothing here.</span>
          <span>For GIFs that DO exist, here's some gifs about this...</span>
        </p>
     </div>
      <ListOfGifs gifs={gifs} />
      <Link className="btn btn-2" to="/">Continue to Our Homepage</Link>
    </Styles>
  );
};

export default Error404;
