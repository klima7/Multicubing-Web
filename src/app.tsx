import AppBarCustom from "./components/AppBar";
import routes from './routes'


function App() {
  return (
    <div>
      <AppBarCustom />
      { routes }
    </div>
  );
}

export default App;
