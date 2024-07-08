import React from 'react';
import AppNavigation from './src/navigation/AppNavigation';
import ContextProvider from './src/contextApi/contextApi';

export default function App() {

  return (
    <ContextProvider>
      <AppNavigation />
    </ContextProvider>
  );
}

