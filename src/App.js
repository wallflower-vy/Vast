import { useState } from "react";
import "./App.css";
import Layout from "./Components/Layout";
import ScreenOne from "./Components/ScreenOne";
import ScreenTwo from "./Components/ScreenTwo";
import ScreenThree from "./Components/ScreenThree";
import ScreenFour from "./Components/ScreenFour";
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
        return <ScreenThree changeScreen={setScreen} />;
        break;
        case "screenFour":
        return <ScreenFour changeScreen={setScreen} />;
        break;
        case "screenSix":
        return <ScreenSix changeScreen={setScreen} />;
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
