import React, { useEffect } from 'react';
import { AppProvider } from './context/AppProvider';
import { Product } from './models/Product';
import AppRouter from './router/AppRouter';
import { createDB } from './services/createdDB';

interface ApplicationProps {

}

const Application: React.FunctionComponent<ApplicationProps> = () => {

    createDB()

    //como el AppProvider el de la capa mas afuera necesito crear/instanciar la "base de datos" antes 
    return (
        <AppProvider>
            <AppRouter />
        </AppProvider>
    );
}

export default Application;