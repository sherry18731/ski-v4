import { Link } from 'react-router';

import SkiHouse from '../skihouse/SkiHouse';          
import Coach from '../coach/Coach';                   
import Order from '../order/Order';                   

import './Home.scss';

function Home() {
  const services = [
    {
      icon: "accessibility_new", 
      title: "個性化教學",
      describe: "根據學員的水平與需求量身定制課程，讓學習更高效且充滿樂趣"
    },{
      icon: "trending_up", 
      title: "技術提升",
      describe: "教練熟悉雪場環境，能確保學員在滑雪過程中的安全，降低意外風險"
    },{
      icon: "health_and_safety", 
      title: "安全保障",
      describe: "專業教練能指導正確的滑雪技巧，幫助快速進步並避免錯誤習慣" 
    }
  ]
  

  return (
    <>
    <main className="bg-gray-05">
      <section className="banner position-relative">
        <div className="vh-100" style={{background:"url('https://images.unsplash.com/photo-1730128270068-2fa777dc20a8?q=80&w=2941&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D') no-repeat center center/cover"}}>
          <div className='container text-white d-flex flex-column justify-content-center vh-100'>
            <div className="mb-3">
                <h1 className="text-lg bg-brand-01 d-inline-block px-2 py-1 border-2 border-bottom border-white">想滑雪？</h1>
            </div>
            <div className="mb-5">
                <h2 className="h1 bg-brand-01 d-inline-block px-2 py-1 border-2 border-bottom border-white">找到你最貼心的雪地夥伴</h2>
            </div>
            <div>
                <Link to="/" className="btn btn-outline-brand-01 bg-white rounded-pill fw-bold px-4 py-2"><span className="material-symbols-outlined align-bottom me-2">arrow_circle_right</span>馬上預約</Link>
            </div>
          </div>
        </div>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/homework-b5f67.appspot.com/o/Rectangle%2030.svg?alt=media&token=54561703-cab9-4812-8483-019b85bb0cdc"
          alt="overlay"
          className="position-absolute bottom-0 start-0 w-100 z-3"
        />
      </section>

      <section className="services container d-flex flex-column justify-content-center align-items-center w-100 border border-gray-03 rounded-5 my-3">
        <div className="border-1 border-bottom border-gray-03 w-50 mb-5">
          <h3 className="text-center text-brand-01 pb-4">我們提供的服務</h3>
        </div>
        <div className="d-flex justify-content-between gap-5">
          { services.map((item) => {
            return (          
              <div key={item.title} className="d-flex flex-column">
                <span className="material-symbols-outlined align-bottom text-center mb-4">{item.icon}</span>
                <div className="text-center mt-2">
                  <h4 className="mb-4">{item.title}</h4>
                  <p className="text-gray-01">{item.describe}</p>
                </div>
              </div>)
              })
              }
        </div>
      </section>

      <section className="bg-primary my-5">
        <h1>123</h1>
      </section>
    </main>
    </>
  )
}

export default Home
