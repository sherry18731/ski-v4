import { useEffect } from "react";
import { useNavigate } from "react-router";

function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/')
    }, 4000)
  }, [])

  return (
    <>
      <div className='container'>
        <div className='d-flex flex-column align-items-center py-5'>
          <img className="w-25 mb-5" src="https://firebasestorage.googleapis.com/v0/b/homework-b5f67.appspot.com/o/404.png?alt=media&token=18559dc2-5148-4a53-bf91-0d21c10387d3" alt="error" />
          <h6>啊呀。･ﾟ･(つд`ﾟ)･ﾟ･雪道路線錯誤。即將為您傳送回到山頂重新導航...</h6>
        </div>
      </div>
    </>
  )
}

export default NotFound;