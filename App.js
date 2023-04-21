import logo from './imagenes/publicidad.png'
import './App.css';
import ListaTitulos from './components/ListaTitulos';

function App() {
   
  return (
    <div className='App-tareas'>
      <div className='Contenedor-logo'>
        <img 
          src={logo} 
          className='free-logo'
        />
      </div>
      <div className='lista-tareas'>
        <h1>Mis Titulos</h1>
        <ListaTitulos/>
      </div>
    </div>
  );
}

export default App;
