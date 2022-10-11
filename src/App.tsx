import './App.css';
import Api from './components/Api';
import NavbarMinimal from './components/NawBar';
import Login from './components/Login';
import RoutesApp from './components/Routesy';
import { AppShell, Navbar } from '@mantine/core';
import {atom} from 'recoil';
import {
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';




const textState = atom({
  key: 'textState', // unique ID (with respect to other atoms/selectors)
  default: [{id: 0, name: "N/A", state:"N/A", current_print:{current_time: 0, total_time: 0}}], // default value (aka initial value)
});
function App() {
  const loggedIn = localStorage.getItem('uuid');
  Api()
  return (
    <Routes>
    <Route path="/" element={loggedIn ? <Navigate to="/table" /> :<Login />} />
    <Route path="*" element={!loggedIn ? <Navigate to="/" />:<AppShell 
    padding={0}
    navbar={<Navbar width={{ base: 50 }} height={500}>{<NavbarMinimal></NavbarMinimal>}</Navbar>}>
    <RoutesApp/>
    </AppShell>} />
    </Routes>
  );
}
//<Api files={[]} />
export default App;
export { textState };