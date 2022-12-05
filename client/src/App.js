import './App.css';
import Router from "./components/features/Router";
import Header from './components/features/Header/Header';
import Footer from './components/features/Footer/Footer'
import {BrowserRouter} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css';
import DataProvider from './contexts/DataContext';


function App() {
  return (
    <div className="App">
      <DataProvider>
      <BrowserRouter>
        <Header /> 
        <Router />
        <Footer />
      </BrowserRouter>
      </DataProvider>
    </div>
  );
}

export default App;