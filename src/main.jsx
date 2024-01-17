import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { MainRouter } from './Router/MainRouter.jsx';
import './App.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={MainRouter} />
);
