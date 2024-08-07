import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import SplashScreen from './pages/SplashScreen';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Onboarding from './pages/Onboarding';
import Onboarding2 from './pages/Onboarding2';
import Onboarding3 from './pages/Onboarding3';
import Hero from './pages/Hero';
import ForgotPassword from './pages/ForgotPassword';
import EmailVery from './pages/EmailVery';

const appRouter = createBrowserRouter([{
  element: <App />,
  path: "/",
  errorElement: <ErrorPage />,
  children: [{

    path: "/",
    element: <SplashScreen />

  },
  {
    path:"/signUp",
    element:<SignUp/>
  },
  {
    path:"/signIn",
    element:<SignIn/>
  },
  {
    path:"/forgot",
    element:<ForgotPassword/>
  },
  {
    path:"/email",
    element:<EmailVery/>
  },
  {
    path:"/onB1",
    element:<Onboarding/>
  },
  {
    path:"/onB2",
    element:<Onboarding2/>
  },
  {
    path:"/onB3",
    element:<Onboarding3/>
  },
  {
    path:"/hero",
    element:<Hero/>
  },
  ],

},

]
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);

