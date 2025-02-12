import { NavLink } from 'react-router';

import './Header.scss';

function Header() {
  

  return (
    <>
      <nav className="navbar navbar-expand-lg mb-4 py-4">
        <div className="container">
        <NavLink className="navbar-brand" to=''>
          <img src="../src/assets/images/logo-2.png" alt="logo" style={{width: '200px'}}/>
        </NavLink>
          <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto gap-4">
              <li className="nav-item">
                <NavLink className="nav-link text-brand-01" to='coach'>
                <span class="material-symbols-outlined align-bottom me-1">downhill_skiing</span>教練介紹</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-brand-01" to='skiHouse'>
                <span class="material-symbols-outlined align-bottom me-1">Mountain_flag</span>雪場介紹</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-brand-01" to=''>
                <span class="material-symbols-outlined align-bottom me-1">book_5</span>推薦文章</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-brand-01" to=''>
                <span class="material-symbols-outlined align-bottom me-1">Health_and_safety</span>安全知識</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-brand-01" to=''>登入</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header