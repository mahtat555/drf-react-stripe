import { Navigate, Route, Routes } from 'react-router-dom';

import Payments from "./Routers/Payments"


const Router = () => {
  return (
    <main>
      <Routes>
        {/* R routers */}
        {Payments}

        {/* Catching unauthorized URL reuests */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </main>
  )
}

export default Router;
