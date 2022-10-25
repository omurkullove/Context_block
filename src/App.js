import "./App.css";
import Inputs from "./components/Inputs";
import Block from "./components/Block";
import ParamsContextProvider from "./paramsContext";

function App() {
  return (
    <>
      <ParamsContextProvider>
        <Inputs />
        <Block />
      </ParamsContextProvider>
    </>
  );
}

export default App;
