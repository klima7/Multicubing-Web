import AppBarCustom from "./components/AppBar";
import routes from './routes'
import Notifications from './components/Notifications'


function App() {
  return (
    <div>
      <AppBarCustom />
      <Notifications />
      { routes }
    </div>
  );
}

export default App;
