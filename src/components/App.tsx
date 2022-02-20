import AppBarCustom from "./AppBar";
import Notifications from './Notifications'
import routes from '../routes'


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
