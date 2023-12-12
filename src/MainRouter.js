import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBarIndex from './NavBar/NavBarIndex';
import HomeIndex from './0HomeIndex';


function MainRouter() {
  return (
    <Routes>
      <Route path='/' element={<NavBarIndex />}>
        <Route index element={<HomeIndex />} />
      </Route>
    </Routes>
  );
}

export default MainRouter;