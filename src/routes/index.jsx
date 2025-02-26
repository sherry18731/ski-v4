import { element } from 'prop-types';
import NotFound from '../components/NotFound';

import App from '../App';
import Home from '../pages/home/Home';
import Coach from '../pages/coach/Coach';
import SkiHouse from '../pages/skihouse/SkiHouse';
import SignInForm from '../pages/home/homeComps/SignInForm';
import SignUpForm from '../pages/home/homeComps/SignUpForm';
import ArticlePage from '../pages/article/ArticlePage';


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
        path:'coach',
        element:<Coach />
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