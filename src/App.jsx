import { Outlet } from 'react-router';

import './App.scss';
import Header from './layout/Header';
import Footer from './layout/Footer';
import SkiResortDetailPage from './pages/skihouse/SkiResortDetailPage';
import SkiResortListPage from './pages/skihouse/SkiResortListPage';

// import AboutLoading from './component/AboutLoading';


function App() {
  
  return (
    <div className='d-flex flex-column justify-content-between vh-100'>
      <Header />
      <SkiResortListPage />
      <Outlet />
      {/* <AboutLoading/> */}
      <Footer />
    </div>
  )
}

export default App
