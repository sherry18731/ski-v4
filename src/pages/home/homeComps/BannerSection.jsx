import { Link } from 'react-router';

function BannerSection() {
  return (
    <section className="banner position-relative">
      <div className="vh-100 z-n1" style={{background:"url('https://images.unsplash.com/photo-1730128270068-2fa777dc20a8?q=80&w=2941&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D') no-repeat center center/cover"}}>
        <div className='container text-white d-flex flex-column justify-content-center vh-100'>
          <div className="mb-3 z-3"
            data-aos="fade-right">
              <h1 className="text-lg bg-brand-01 d-inline-block px-2 py-1 border-2 border-bottom border-white">想滑雪？</h1>
          </div>
          <div className="mb-5 z-3"
            data-aos="fade-right">
              <h2 className="h1 bg-brand-01 d-inline-block px-2 py-1 border-2 border-bottom border-white">找到你最貼心的雪地夥伴</h2>
          </div>
          <div className="z-3"
            data-aos="fade-right">
              <Link to="/" className="btn btn-outline-brand-01 home-btn-hover bg-white rounded-pill fs-4 fw-bold px-middle py-3 z-3"><span className="material-symbols-outlined icon-unfill align-bottom me-3 mb-1">arrow_circle_right</span>馬上預約</Link>
          </div>
        </div>
      </div>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/homework-b5f67.appspot.com/o/Rectangle%2030.svg?alt=media&token=54561703-cab9-4812-8483-019b85bb0cdc"
        alt="overlay"
        className="position-absolute bottom-0 start-0 w-100 z-0"
      />
    </section>
  )
}

export default BannerSection;