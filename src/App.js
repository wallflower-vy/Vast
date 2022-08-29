import { useState } from "react";
import "./App.css";
import Layout from "./Components/Layout";
// import ScreenOne from "./Components/BannerComponent";
import ScreenOne from "./Components/ScreenOne";
import ScreenTwo from "./Components/ScreenTwo";
import ScreenThree from "./Components/ScreenThree";
import ScreenFour from "./Components/ScreenFour";
import ScreenSix from "./Components/ScreenSix";
import ScreenSeven from "./Components/ScreenSeven";
import FormComponentProvider from "./store";

function App() {
  const [screen, setScreen] = useState("screenOne");

  // const initialState = {
  //   firstName: "",
  //   email: "",
  //   used: false,
  //   frustration: [],
  //   needs: "",
  // };

  // sessionStorage.setItem("formValues", JSON.stringify(initialState));

  const switchScreen = () => {
    switch (screen) {
      case "screenOne":
        return <ScreenOne changeScreen={setScreen} />;
        break;
      case "screenTwo":
        return <ScreenTwo changeScreen={setScreen} />;
        break;
      case "screenSeven":
        return <ScreenSeven changeScreen={setScreen} />;
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
        throw new Error("This screen doesnt exist");
    }
  };
  return (
    <FormComponentProvider>
      <div className='App'>
        <Layout>{switchScreen()}</Layout>
      </div>
    </FormComponentProvider>
  );
}

export default App;
