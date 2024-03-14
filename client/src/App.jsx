import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Redirect } from "react-router-dom";

// Hoc
import HomeLayoutHoc from "./HOC/Home.HOC";
import RestaurantLayoutHoc from "./HOC/Restaurant.HOC";

// Pages
import HomePage from "./Pages/HomePage";
import RestaurantPage from "./Pages/RestaurantPage";

//Components
import Overview from "./Components/Restaurant/Overview";
import OrderOnline from "./Components/Restaurant/OrderOnline";

function App() {
  return (
    <>
      <Redirect exact from="/" to="/delivery" />
      <HomeLayoutHoc path="/:type" exact component={HomePage} />
      <RestaurantLayoutHoc
        path="/restaurant/:id"
        exact
        component={RestaurantPage}
      />
      <RestaurantLayoutHoc
        path="/restaurant/:id/overview"
        exact
        component={Overview}
      />
      <RestaurantLayoutHoc
        path="/restaurant/:id/order-online"
        exact
        component={OrderOnline}
      />
      <RestaurantLayoutHoc
        path="/restaurant/:id/reviews"
        exact
        component={HomePage}
      />
      <RestaurantLayoutHoc
        path="/restaurant/:id/menu"
        exact
        component={HomePage}
      />
      <RestaurantLayoutHoc
        path="/restaurant/:id/photos"
        exact
        component={HomePage}
      />
    </>
  );
}

export default App;
/* Alernative redirect
      <Route path="/" exact>
        <Redirect to="/delivery" />
      </Route>
*/
