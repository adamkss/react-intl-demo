import { IntlProvider, FormattedMessage } from "react-intl";

import "./App.css";
import translations from "./translations";

import GreetinsComponent from "./components/GreetingsComponent";
import GreetingsComponentIntlHook from "./components/GreetingsComponentIntlHook";
import GreetingsComponentClassBased from "./components/GreetingsComponentClassBased";

const locale = "de";

function App() {
  return (
    <IntlProvider locale={locale} messages={translations[locale]}>
      <div className="App">
        <GreetinsComponent />
        <GreetingsComponentIntlHook />
        <GreetingsComponentClassBased />
      </div>
    </IntlProvider>
  );
}

export default App;
