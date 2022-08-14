import React from 'react';
import { AppProvider } from './context/AppProvider';
import AppRouter from './router/AppRouter';

interface ApplicationProps {

}

const Application: React.FunctionComponent<ApplicationProps> = () => {
    return (
        <AppProvider>
            <AppRouter />
        </AppProvider>
    );
}

export default Application;