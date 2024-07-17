import "./App.css";
import { Client as Styletron } from "styletron-engine-monolithic";
import { Provider as StyletronProvider } from "styletron-react";
import { LightTheme, BaseProvider, styled } from "baseui";
import DefaultLayout from "./DefaultLayout/layout";

const engine = new Styletron();

function App() {
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <DefaultLayout />
      </BaseProvider>
    </StyletronProvider>
  );
}

export default App;
