import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Redirect } from "react-router-dom";

// Hoc
import HomeLayoutHoc from "./HOC/Home.HOC";
import RestaurantLayoutHoc from "./HOC/Restaurant.HOC";

// Pages
import HomePage from "./Pages/HomePage";
import RestaurantPage from "./Pages/RestaurantPage";

function App() {
  return (
    <>
      <Redirect from="/" to="/delivery" />
      <HomeLayoutHoc path="/:type" exact component={HomePage} />
      <RestaurantLayoutHoc
        path="/restaurant/:id"
        exact
        component={RestaurantPage}
      />
    </>
  );
}

export default App;
