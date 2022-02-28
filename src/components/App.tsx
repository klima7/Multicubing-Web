import { Suspense } from 'react';
import AppBarCustom from "./AppBar";
import Notifications from './Notifications'
import routes from '../routes'
import '../assets/styles/App.css'


function App() {
  return (
    <div className="App">
      <Suspense fallback="loading">
        <AppBarCustom />
        <Notifications />
        { routes }
      </Suspense>
    </div>
  );
}

export default App;
