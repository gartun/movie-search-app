import "../src/App.css";
import { BrowserRouter } from "react-router-dom";

const WithGlobals = ({ children }) => <BrowserRouter>{children}</BrowserRouter>;

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <WithGlobals>
      <Story />
    </WithGlobals>
  ),
];
