// Hoc
import HomeLayoutHoc from "./HOC/Home.HOC";

// Pages
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <>
      <HomeLayoutHoc component={HomePage} path="/" />
    </>
  );
}

export default App;
