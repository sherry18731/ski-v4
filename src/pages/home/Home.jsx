


import SkiHouse from '../skihouse/SkiHouse';          
import Coach from '../coach/Coach';                   
import Order from '../order/Order';                   




import './Home.scss';







function Home() {
  

  return (
    <div className='container mb-4'>
      <div className='d-flex flex-column gap-3 w-50 align-items-center m-auto'>
        <button className='btn btn-error'>Home-test</button>
        <Coach />
        <Order />
        <SkiHouse />
      </div>
    </div>
  )
}

export default Home