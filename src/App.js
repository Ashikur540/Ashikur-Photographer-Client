import { RouterProvider } from 'react-router';
import './App.css';
import { router } from './Routes/Config/RoutesConfig';

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
