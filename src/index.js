import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
import StartRating from "./StarRating";

function Test() {
  const [movieRating, setMovieRating] = React.useState(0);

  return (
    <div>
      <StartRating maxRating={5} color="blue" onSetRating={setMovieRating} />
      <p>Movie was rated for {movieRating} stars</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StartRating maxRating={5} messages={["a", "b", "c", "d", "e"]} />
    <StartRating maxRating={10} />
    <Test />
    {/* <App /> */}
  </React.StrictMode>
);
