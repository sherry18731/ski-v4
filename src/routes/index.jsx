
import App from '../App';
import Coach from '../pages/coach/Coach';
import Home from '../pages/home/Home';       
import SkiHouse from '../pages/skihouse/SkiHouse';
import CoachPage from '../pages/coach/coachComps/coachPage/CoachPage';


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
        path: 'Coach',
        element:<Coach />,
        children: [
          {
            path: ':id',
            element: <CoachPage />
          }
        ]
      },
      {
        path: 'SkiHouse',
        element:<SkiHouse />
      }
    ]
  }
]

export default routes;