import './App.scss';



import Home from './pages/home/Home';       
import Header from './layout/Header';
import Footer from './layout/Footer';


function App() {
  

  return (
    <div className='d-flex flex-column justify-content-between vh-100 bg-dark'>
      <Header />
      <Home />
      <Footer />
    </div>
  )
}

export default App
