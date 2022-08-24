import { useState } from "react";
import "./App.css";
import Layout from "./Components/Layout";
<<<<<<< HEAD
// import ScreenOne from "./Components/BannerComponent";
import ScreenTwo from "./Components/ScreenTwo";
import ScreenOne from "./Components/ScreenOne";
import ScreenSeven from "./Components/ScreenSeven";
=======
import ScreenOne from "./Components/ScreenOne";
import ScreenTwo from "./Components/ScreenTwo";
import ScreenThree from "./Components/ScreenThree";
import ScreenFour from "./Components/ScreenFour";
>>>>>>> 4951f18b76986eea20fb9b99d4f379c8e7933979
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
<<<<<<< HEAD
        case "screenSeven":
        return <ScreenSeven changeScreen={setScreen} />;
        break;
        // case "screenThree":
        // return <ScreenThree changeScreen={setScreen} />;
        // break;
        // case "screenThree":
        // return <ScreenThree changeScreen={setScreen} />;
        // break;
=======
        case "screenFour":
        return <ScreenFour changeScreen={setScreen} />;
        break;
        case "screenSix":
        return <ScreenSix changeScreen={setScreen} />;
        break;
>>>>>>> 4951f18b76986eea20fb9b99d4f379c8e7933979
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
