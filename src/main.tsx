import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components/App";
import { worker } from "./mocks/browser";
import { ChakraProvider } from "@chakra-ui/react";
import { WorkoutsService } from "./services/useWorkoutsService";
import { BrowserRouter } from "react-router-dom";

if (process.env.NODE_ENV === "development") {
  worker.start();
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <WorkoutsService>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </WorkoutsService>
    </ChakraProvider>
  </React.StrictMode>
);
