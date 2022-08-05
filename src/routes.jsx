import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import PAGES from './Pages';

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/homepage" />} />
      <Route path="/homepage" element={<PAGES.HomePage />} />
      <Route path="/repositories" element={<PAGES.Repositories />} />
      <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
    </Routes>
  );
}
