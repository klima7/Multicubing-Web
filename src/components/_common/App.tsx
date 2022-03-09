import { Suspense } from 'react';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import AppBarCustom from "./AppBar";
import Notifications from './Notifications'
import routes from '../../routes'
import '../../assets/styles/App.css'


function App() {
  return (
    <div className="App">
      <OverlayScrollbarsComponent>
        <Suspense fallback="loading">
          <AppBarCustom />
          <Notifications />
          { routes }
        </Suspense>
      </OverlayScrollbarsComponent>
    </div>
  );
}

export default App;
