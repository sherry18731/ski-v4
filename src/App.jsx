import { Outlet } from 'react-router';
import './App.scss';
import Header from './layout/Header';
import Footer from './layout/Footer';
import ScrollToTop from './components/ScrollToTop';


// import AboutLoading from './component/AboutLoading';


function App() {
  return (
    <div className='d-flex flex-column justify-content-between vh-100'>
      <Header />
        <Outlet />
        <ScrollToTop/>
      {/* <AboutLoading/> */}
      <Footer />
    </div>
  )
}

export default App
