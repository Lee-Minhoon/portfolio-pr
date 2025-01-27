import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/App.tsx";
import {
  ChakraProvider,
  baseTheme,
  extendTheme,
  withDefaultColorScheme,
} from "@chakra-ui/react";

const theme = extendTheme(
  {
    colors: {
      primary: baseTheme.colors.blue,
    },
  },
  withDefaultColorScheme({
    colorScheme: "primary",
  })
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
