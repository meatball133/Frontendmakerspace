import {
    Routes,
    Route,
    useRoutes,
    Router
  } from 'react-router-dom';
  import TableReviews from './table';
  import Login from './Login';

  function RoutesApp() {
    return (
      <Routes>
    <Route path="/table" element={<TableReviews />} />
    </Routes>)
  }
  
  export default RoutesApp;
  