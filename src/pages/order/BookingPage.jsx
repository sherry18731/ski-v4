import './Order.scss';
export default function BookingPage(){
    return (
        <div className="container">
            <div>我是步驟</div>
            <div className="row">
                <div className="col-7">
                <form action=''>
                    <h4>預約課程</h4>
                    <div className="mb-3">
                        <label htmlFor="snowHouse" className="form-label">雪場</label>
                        <select className="form-select" name='snowHouse' id='snowHouse'>
                            <option selected>請選擇雪場</option>
                            <option value="1">妙高 休暇村妙高 RunRun滑雪場</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <div id="snowHouse" className="form-text d-flex justify-content-end align-items-center">
                            <span className="material-symbols-outlined icon-unfilled text-brand-02">help</span>
                            <a href="#" target="_blank">查看雪場資訊</a>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
                <div className="col-5">456</div>
            </div>
        </div>
    )
}