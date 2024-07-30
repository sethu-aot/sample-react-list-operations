/* eslint-disable no-unused-vars */
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from '../pages/Index';

function AppRouter() {
  return (
    <div>
      <Router basename='/sample-react-list-operations'>
        <Routes>
            <Route path="/" element={<Index />} />
        </Routes>
      </Router>
    </div>
  )
}

export default AppRouter
