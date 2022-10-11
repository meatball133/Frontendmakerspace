import {
    Routes,
    Route,
  } from 'react-router-dom';
  import TableReviews from './table';
  //import StatsRingCard from './cards';

  function RoutesApp() {
    return (
      <Routes>
    <Route path="/table" element={<TableReviews />} />
    </Routes>)
  }
  
  export default RoutesApp;
  