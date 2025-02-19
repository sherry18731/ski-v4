import { element } from 'prop-types';
import NotFound from '../components/NotFound';

import App from '../App';
import Home from '../pages/home/Home';
import Coach from '../pages/coach/Coach';
import SkiHouse from '../pages/skihouse/SkiHouse';


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