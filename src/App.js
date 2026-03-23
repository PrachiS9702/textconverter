
import './App.css';
import Navbar from './components/navbar';
import TextForm from './components/textform';
import Alert from './components/alert';
import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './components/Router';

function App() {

const [mode, setMode] = useState('light');
const [alert, setAlert] = useState(null);

const showAlert = (message, type) => {
  setAlert({
    msg: message,
    type: type
  });

  setTimeout(() => {
    setAlert(null);
  }, 1500);
}

const toggleMode = () => {
  if (mode === 'light') {
    setMode('dark');
    document.body.style.color = '#ffffff';  
    document.body.style.backgroundColor = '#000000';
    showAlert("Dark mode enabled", "success");
  } else {
    setMode('light');
    document.body.style.color = '#000000';  
    document.body.style.backgroundColor = '#d4c5be';
    showAlert("Light mode enabled", "success");
  }
}
  return (
    <>
    <BrowserRouter>
    <Navbar mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert} />
    
    <AppRoutes togglemode={toggleMode} showAlert={showAlert} />
    
    </BrowserRouter>
    </>
    
  );
}

export default App;
