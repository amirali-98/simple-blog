import { Routes, Route } from "react-router-dom";

import Layout from "./layouts/Layout";
import HomePage from "./pages/HomePage";
import PostDetailPage from "./pages/PostDetailPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="posts/:slug" element={<PostDetailPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
