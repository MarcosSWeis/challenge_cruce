import React, { useEffect } from "react";
import { AppProvider } from "./context/App-provider";
import { Product } from "./models/Product";
import AppRouter from "./router/App-router";
import { createDB } from "./services/created-db";

interface ApplicationProps {}

const Application: React.FunctionComponent<ApplicationProps> = () => {
  createDB();

  //como el AppProvider el de la capa mas afuera necesito crear/instanciar la "base de datos" antes
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  );
};

export default Application;
