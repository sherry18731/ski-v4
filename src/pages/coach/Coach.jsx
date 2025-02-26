import SerchInput from './coachComps/SearchInput';







import './Coach.scss';
import { Outlet } from 'react-router';







function Coach() {
  

  return (
    <div className='bg-gray-05'>
      <div className='container my-3 d-none'>
        <div className='d-flex flex-column align-items-center'>
          <h1 className=''>教練總覽</h1>
          
          <SerchInput />
          
          
        </div>
      </div>

      <Outlet />
    </div>
  )
}

export default Coach