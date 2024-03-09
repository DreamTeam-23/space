
/*
author: Paul Kim
date: March 9, 2024
version: 1.0
description: app jsx for Space client
 */

import { Router } from "./router"
import { RouterProvider } from "react-router-dom"

function App() {

  const router = Router()

  return (
    <div >
      <RouterProvider router={router} />
    </ div>
  )
}

export default App
