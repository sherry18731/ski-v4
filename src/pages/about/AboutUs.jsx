import "../home/Home.scss";

function AboutUs() {
  const members =[
    {
      id:1,
      name: "C",
      image: "",
      discord: "11",
      mail: "11@mail",
      level:[{css:"LV.4", js:"LV.3", react:"LV.3"}],
      responsible:"首頁、Header、footer、會員登入、關於我們",
      text:"心得分享"
    },
    {
      id:2,
      name: "J",
      image: "",
      discord: "11",
      mail: "11@mail",
      level:[{css:"LV.4", js:"LV.3", react:"LV.3"}],
      responsible:"首頁、Header、footer、會員登入、關於我們",
      text:"心得分享"
    },
    {
      id:3,
      name: "K",
      image: "",
      discord: "11",
      mail: "11@mail",
      level:[{css:"LV.4", js:"LV.3", react:"LV.3"}],
      responsible:"首頁、Header、footer、會員登入、關於我們",
      text:"心得分享"
    },
    {
      id:4,
      name: "雪粒",
      image: "public/host.jpg",
      discord: "queque6086",
      mail: "shw18731@gmail.com",
      level:[{css:"LV.4", js:"LV.3", react:"LV.3"}],
      responsible:"首頁、Header、footer、會員登入、關於我們",
      text:"心得分享"
    }
  ]
  return (<>
    <section className="container">
      <div className="row justify-content-center my-5">
        <div className="col-10">
          <h2 className="border-bottom text-brand-01 pb-1 mb-3">Team</h2>
          <div className="row row-cols-1 row-cols-md-2 row-cols-xl-4 gx-lg-5">
            {
              members.map(item => {
                return (
                  <div className="col my-4">
                    <div className="card border-0 mx-auto" style={{ width: "15rem" }}>
                      <div className="d-flex justify-content-center">
                        <img src={item.image} className="card-img-top border border-secondary-subtle rounded rounded-4 " alt="..." 
                          style={{ width: "220px", height: "220px", objectFit: "cover" }} />
                      </div>
                      <div className="card-body p-4">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">
                          <a className="d-inline-flex align-items-center text-decoration-none text-brand-01 hover-brand-02 me-2" href="https://line.me/ti/p/r_gUiWG6Gk" target="_blank">
                            <i className="fs-4 bi bi-discord me-2"></i>
                            {item.discord}
                          </a>
                        </p>
                        <p>
                          <a className="d-inline-flex align-items-center text-decoration-none text-brand-01 hover-brand-02" href="mailto:shw18731@gmail.com" target="_blank">
                            <i className="fs-4 bi bi-envelope-fill me-2"></i>
                            {item.mail}
                          </a>
                        </p>
                        <div className="d-flex justify-content-center mt-2">
                          <a href="#" className="btn btn-brand-02 btn-sm text-white">更多資訊</a>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </section>
  </>)
}

export default AboutUs;