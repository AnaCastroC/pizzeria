import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Nav from './components/Nav';
import AppRouter from './routes/AppRouter';
import { PizzasProvider } from './context/PizzasContext';

function App() {
  return (
    <div className="App">
    <PizzasProvider>
      <BrowserRouter>
        <Nav />
        <AppRouter />
      </BrowserRouter>
    </PizzasProvider>
    </div>
  );
}

export default App;
