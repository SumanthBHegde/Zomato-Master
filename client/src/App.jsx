import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Hoc
import HomeLayoutHoc from "./HOC/Home.HOC";

// Pages
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <>
      <HomeLayoutHoc path="/:type" exact component={HomePage} />
      {/* <HomeLayoutHoc path="/" exact component={HomePage} /> */}
    </>
  );
}

export default App;
