import { useState } from "react";
import "./App.css";
import Layout from "./Components/Layout";
// import ScreenOne from "./Components/BannerComponent";
import ScreenTwo from "./Components/ScreenTwo";
import ScreenOne from "./Components/ScreenOne";
import ScreenSeven from "./Components/ScreenSeven";
import ScreenSix from "./Components/ScreenSix";

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
        return <ScreenSix changeScreen={setScreen} />;
        break;
        case "screenSeven":
        return <ScreenSeven changeScreen={setScreen} />;
        break;
        // case "screenThree":
        // return <ScreenThree changeScreen={setScreen} />;
        // break;
        // case "screenThree":
        // return <ScreenThree changeScreen={setScreen} />;
        // break;
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
