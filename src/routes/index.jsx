import App from '../App';
import BookingPage from '../pages/order/BookingPage';
import CheckoutFail from '../pages/order/CheckoutFail';
import CheckoutPage from '../pages/order/CheckoutPage';
import CheckoutSuccess from '../pages/order/CheckoutSuccess';
import Home from '../pages/home/Home';
import Coach from '../pages/coach/Coach';
import CoachPage from '../pages/coach/coachComps/coachPage/CoachPage';
import SkiHouse from '../pages/skihouse/SkiHouse';
import SignInForm from '../pages/home/homeComps/SignInForm';
import SignUpForm from '../pages/home/homeComps/SignUpForm';
import ArticlePage from '../pages/article/ArticlePage';
import NotFound from '../components/NotFound';



const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
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
        path: 'coach',
        element:<Coach />,
        children: [
          {
            path: ':id',
            element: <CoachPage />
          }
        ]
      },
      {
        path:'ski-House',
        element:<SkiHouse />
      },
      {
        path: 'sign-in',
        element: <SignInForm />
      },
      {
        path: 'sign-up',
        element: <SignUpForm />
      },
      {
        path: 'article',
        element: <ArticlePage />
      },
      {
        path:'*',
        element:<NotFound />
      }
    ]
  },
  {
    path:'/admin'
  }
]

export default routes;