import './SkiHouse.scss';

export default  function SkiResortDetailPage() {




  return (
    <>
      <div className="container mt-4">
        <div className="breadcrumb">
          <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="#">雪場總覽</a></li>
                <li className="breadcrumb-item"><a href="#">北海道</a></li>
                <li className="breadcrumb-item active" aria-current="page">星野集團Tomamu滑雪場
                </li>
              </ol>
          </nav>
        </div>
        <img className="resortImg img-fluid vw-100  rounded object-fit-cover"
        
        src="https://images.unsplash.com/photo-1482867996988-29ec3a0f1aac?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="星野集團Tomamu滑雪場" />

        <div className="resortDetail ">
          <h1 className="resortName text-center my-4 fs-1 fw-bolder">星野集團Tomamu滑雪場</h1>
          <div className="resortTag d-flex flex-wrap justify-content-center gap-2 mb-3">
            <button type="button" className="tagBtn btn btn-outline-brand-02 fs-6 fw-bolder">Skin&Out</button>
            <button type="button" className="tagBtn btn btn-outline-brand-02 fs-6 fw-bolder">觀光設施</button>
            <button type="button" className="tagBtn btn btn-outline-brand-02 fs-6 fw-bolder">特殊公園</button>
            <button type="button" className="tagBtn btn btn-outline-brand-02 fs-6 fw-bolder">野雪樹林</button>
            <button type="button" className="tagBtn btn btn-outline-brand-02 fs-6 fw-bolder">NightSki</button>
            <button type="button" className="tagBtn btn btn-outline-brand-02 fs-6 fw-bolder">NightSki</button>
        </div>
          <p className="my-3 fs-5">Moiwa 在位於二世谷安努普利 (Annupuri) 西南邊的山上，有日本檢定認證的大迴轉斜坡 「エキスパートコース ExperRun」，最大斜度為 33度；「白樺コースShirakaba Slope」也是非壓雪，在樹林間遊走的樂趣極受歡迎；環山雪道「スカイコース Sky Slope」有2公里長，可以遠眺羊蹄山景緻；滑雪中心前有兩條平緩的路徑，適合親子行及初學者練習。</p>
          <div className="row row-cols-2 row-cols-lg-6 gy-1 my-3">
            <div className="col">
            <div className="card border-brand-02 mb-3 text-center" >
              <h5 className="cardHeader card-header bg-brand-02 text-light">滑雪道數量</h5>
              <h5 className="card-body text-dark">
                <h5 className="card-title">29</h5>
              </h5>
            </div>
            </div>
            <div className="col">
            <div className="card border-brand-02 mb-3 text-center" >
              <h5 className="cardHeader card-header bg-brand-02 text-light">纜車數量</h5>
              <h5 className="card-body text-dark">
                <h5 className="card-title">6</h5>
              </h5>
            </div>
            </div>
            <div className="col">
            <div className="card border-brand-02 mb-3 text-center" >
              <h5 className="cardHeader card-header bg-brand-02 text-light">最長坡道</h5>
              <h5 className="card-body text-dark">
                <h5 className="card-title">4500m</h5>
              </h5>
            </div>
            </div> 
            <div className="col">
            <div className="card border-brand-02 mb-3 text-center" >
              <h5 className="cardHeader card-header bg-brand-02 text-light">最大斜度</h5>
              <h5 className="card-body text-dark">
                <h5 className="card-title">35度</h5>
              </h5>
            </div>
            </div>
            <div className="col">
            <div className="card border-brand-02 mb-3 text-center" >
              <h5 className="cardHeader card-header bg-brand-02 text-light">最低海拔</h5>
              <h5 className="card-body text-dark">
                <h5 className="card-title">597m</h5>
              </h5>
            </div>
            </div>
            <div className="col">
            <div className="card border-brand-02 mb-3 text-center" >
              <h5 className="cardHeader card-header bg-brand-02 text-light">最高海拔</h5>
              <h5 className="card-body text-dark">
                <h5 className="card-title">800m</h5>
              </h5>
            </div>
            </div>          
          </div>
          
          <h5 className="pisteLevel my-3 text-center fs-2 fw-bold">雪道分級</h5>
          <div className="progress m-3" style={{height: "30px"}}>
            <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{width: "30%", ariaValuenow: "30"}} aria-valuemin="0" aria-valuemax="100"></div>
            <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{width: "40%", ariaValuenow: "40"}} aria-valuemin="0" aria-valuemax="100"></div>
            <div className="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{width: "30%", ariaValuenow: "30"}} aria-valuemin="0" aria-valuemax="100"></div>
          </div>
          <div className="progress m-3" style={{height: "30px"}}>
            <div className="progressText progress-bar bg-white text-dark fs-5" role="progressbar" style={{width: "30%", ariaValuenow: "30"}} aria-valuemin="0" aria-valuemax="100">30% 初級</div>
            <div className="progressText progress-bar bg-white text-dark fs-5" role="progressbar" style={{width: "40%", ariaValuenow: "40"}} aria-valuemin="0" aria-valuemax="100">40% 中級</div>
            <div className="progressText progress-bar bg-white text-dark fs-5" role="progressbar" style={{width: "30%", ariaValuenow: "30"}} aria-valuemin="0" aria-valuemax="100">30% 高級</div>
          </div>

          <h3 className="orderCoach my-3 pt-5 text-center fs-2 fw-bold">快來預約我們滑雪場的教練吧！</h3>
          <div className="row row-cols-1 row-cols-lg-3 justify-content-center pt-3">
            <div className="col-md-4 d-flex justify-content-around  flex-column align-items-center my-4">
              <img src="https://images.unsplash.com/photo-1735500810691-054f62b7bea1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfEJuLURqcmNCcndvfHxlbnwwfHx8fHw%3D" className="img-fluid rounded-circle object-fit-cover mb-3" alt="coachName" style={{height:"200px", width:"200px"}} />
              <button type="button" className="orderCoachBtn btn btn-brand-01 rounded-5 fs-5" style={{width: "150px"}}>預約教練</button>
            </div>
            <div className="col-md-4 d-flex justify-content-around flex-column align-items-center my-4">
              <img src="https://images.unsplash.com/photo-1735500810691-054f62b7bea1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfEJuLURqcmNCcndvfHxlbnwwfHx8fHw%3D" className="img-fluid rounded-circle object-fit-cover  mb-3" alt="coachName" style={{height:"200px", width:"200px"}} />
              <button type="button" className="orderCoachBtn btn btn-brand-01 rounded-5 fs-5" style={{width: "150px"}}>預約教練</button>
            </div>
            <div className="col-md-4 d-flex justify-content-around flex-column align-items-center my-4">
              <img src="https://images.unsplash.com/photo-1735500810691-054f62b7bea1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfEJuLURqcmNCcndvfHxlbnwwfHx8fHw%3D" className="img-fluid rounded-circle object-fit-cover  mb-3" alt="coachName" style={{height:"200px", width:"200px"}} />
              <button type="button" className="orderCoachBtn btn btn-brand-01 rounded-5 fs-5" style={{width: "150px"}}>預約教練</button>
            </div>
            <button type="button" className="seeMore btn btn-outline-brand-01 rounded-5 m-3 text-center fs-4 fw-bold" style={{width: "200px"}}>查看更多</button>
          </div>
        </div>

      </div>
    </>
  )
}