import { useEffect } from "react";
import { useNavigate } from "react-router";

function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/')
    }, 3000)
  }, [])

  return (
    <>
      <div className='container'>
        <div className='d-flex flex-column align-items-center py-5'>
          <h6>你點選的頁面目前還不存在，也許在未來會出現。請回到宇宙中重新導航...</h6>
        </div>
      </div>
    </>
  )
}

export default NotFound;