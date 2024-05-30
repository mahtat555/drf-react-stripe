import { Navigate, Route, Routes } from 'react-router-dom';

import Payments from "./Routers/Payments"
import LoginWith from "./Routers/LoginWith"
import Home from '../screens/Home';


const Router = () => {
  return (
    <main>
      <Routes>

        {/* Home page */}
        <Route path={""} element={
          <Home />
        } />

        {/* R routers */}
        {Payments}

        {/* R routers */}
        {LoginWith}

        {/* Catching unauthorized URL reuests */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </main>
  )
}

export default Router;
