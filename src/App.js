import { useState } from "react";
import "./App.css";
import Layout from "./Components/Layout";
// import ScreenOne from "./Components/BannerComponent";
import ScreenTwo from "./Components/ScreenTwo";
import ScreenThree from "./Components/ScreenThree";
import ScreenOne from "./Components/ScreenOne";

function App() {
  const [screen, setScreen] = useState("screenOne");

  const switchScreen = () => {
    switch (screen) {
      case "screenOne":
        return <ScreenOne  changeScreen={setScreen} />;
        break;
      case "screenTwo":
        return <ScreenTwo changeScreen={setScreen} />;
        break;
        case "screenThree":
        return <ScreenThree changeScreen={setScreen} />;
        break;
      default:
        break;
    }
  };
  return (
    <div className='App'>
      <Layout>{switchScreen()}</Layout>
    </div>
  );
}

export default App;
