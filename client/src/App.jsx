import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Redirect } from "react-router-dom";

// Hoc
import HomeLayoutHoc from "./HOC/Home.HOC";

// Pages
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <>
      <Redirect from="/" to="/delivery" />
      <HomeLayoutHoc path="/:type" exact component={HomePage} />
    </>
  );
}

export default App;
