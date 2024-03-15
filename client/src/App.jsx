import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Redirect } from "react-router-dom";

// Hoc
import HomeLayoutHoc from "./HOC/Home.HOC";
import RestaurantLayoutHoc from "./HOC/Restaurant.HOC";
import CheckoutLayoutHoc from "./HOC/Checkout.HOC";

// Pages
import HomePage from "./Pages/HomePage";
import RestaurantPage from "./Pages/RestaurantPage";
import Checkout from "./Pages/CheckoutPage";

//Components
import Overview from "./Components/Restaurant/Overview";
import OrderOnline from "./Components/Restaurant/OrderOnline";
import Reviews from "./Components/Restaurant/Reviews/Reviews";
import Menu from "./Components/Restaurant/Menu/Menu";
import Photos from "./Components/Restaurant/Photos/Photos";

function App() {
  return (
    <>
      <Redirect exact from="/" to="/delivery" />
      <HomeLayoutHoc path="/:type" exact component={HomePage} />
      <RestaurantLayoutHoc path="/restaurant/:id" exact component={Redirect} />
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
        component={Reviews}
      />
      <RestaurantLayoutHoc path="/restaurant/:id/menu" exact component={Menu} />
      <RestaurantLayoutHoc
        path="/restaurant/:id/photos"
        exact
        component={Photos}
      />
      <CheckoutLayoutHoc path="/checkout/orders" exact component={Checkout} />
    </>
  );
}

export default App;
/* Alernative redirect
      <Route path="/" exact>
        <Redirect to="/delivery" />
      </Route>
*/
