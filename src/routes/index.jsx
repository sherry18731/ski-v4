import App from '../App';
import Home from '../pages/home/Home';       
import BookingPage from '../pages/order/BookingPage';
import CheckoutFail from '../pages/order/CheckoutFail';
import CheckoutPage from '../pages/order/CheckoutPage';
import CheckoutSuccess from '../pages/order/CheckoutSuccess';


const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path:'',
        element:<Home />
      },
      {
        path:'booking',
        element:<BookingPage />
      },
      {
        path:'checkout',
        element:<CheckoutPage />
      },
      {
        path:'checkout-success',
        element:<CheckoutSuccess />
      },
      {
        path:'checkout-fail',
        element:<CheckoutFail />
      },
    ]
  }
]

export default routes;