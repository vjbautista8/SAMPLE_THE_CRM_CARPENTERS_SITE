import { Navigate, useRoutes, HashRouter, Route, Routes } from 'react-router-dom';

export default function CustomRouter() {
  return (
    <Routes>
      <Route path="/" element={<h1>/</h1>} />
      <Route path="/messages" element={<h1>/messages</h1>} />
      <Route path="/about" element={<h1>/about</h1>} />
    </Routes>
  );
}
