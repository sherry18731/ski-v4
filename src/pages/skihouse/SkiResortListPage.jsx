import './SkiHouse.scss';


export default function SkiResortListPage() {
  return(
    <>
      <div className="container d-flex flex-column align-items-center">
        <div className="w-100 d-flex justify-content-center">          
        <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
          <option value={'搜尋雪場'} selected disabled>搜尋雪場</option>
          <option value="1">北海道</option>
          <option value="2">東北</option>
          <option value="3">新潟</option>
          <option value="3">長野</option>
        </select>
        </div>
        <div className="row row-cols-1 row-cols-lg-3 g-4 flex-wrap">
          <div className="col d-flex justify-content-center">
            <div className="resortCard card" style={{width: "24rem"}}>
            <span className="label bg-brand-02 text-white text-center text-brand-01 fs-5">北海道</span>
            <img src="https://images.unsplash.com/photo-1482867996988-29ec3a0f1aac?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="星野集團Tomamu滑雪場" />
            <div className="card-body">
              <p className="card-text text-center text-brand-01 fs-5">星野集團Tomamu滑雪場</p>
            </div>
          </div>
          </div>
          <div className="col d-flex justify-content-center">
            <div className="resortCard card" style={{width: "24rem"}}>
            <span className="label bg-brand-02 text-white text-center fs-5">北海道</span>
            <img src="https://images.unsplash.com/photo-1482867996988-29ec3a0f1aac?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="星野集團Tomamu滑雪場" />
            <div className="card-body">
              <p className="card-text text-center fs-5">星野集團Tomamu滑雪場</p>
            </div>
          </div>
          </div>
          <div className="col d-flex justify-content-center">
            <div className="resortCard card" style={{width: "24rem"}}>
            <span className="label bg-brand-02 text-white text-center fs-5">北海道</span>
            <img src="https://images.unsplash.com/photo-1482867996988-29ec3a0f1aac?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="星野集團Tomamu滑雪場" />
            <div className="card-body">
              <p className="card-text text-center text-brand-01 fs-5">星野集團Tomamu滑雪場</p>
            </div>
          </div>
          </div>
          <div className="col d-flex justify-content-center">
            <div className="resortCard card" style={{width: "24rem"}}>
            <span className="label bg-brand-02 text-white text-center text-brand-01 fs-5">北海道</span>
            <img src="https://images.unsplash.com/photo-1482867996988-29ec3a0f1aac?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="星野集團Tomamu滑雪場" />
            <div className="card-body">
              <p className="card-text text-center text-brand-01 fs-5">星野集團Tomamu滑雪場</p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  )
}