// Hoc
import HomeLayoutHoc from "./HOC/Home.HOC";

// Pages
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <>
      <HomeLayoutHoc component={HomePage} path="/" />
      <HomeLayoutHoc component={HomePage} path="/:type" />
    </>
  );
}

export default App;
