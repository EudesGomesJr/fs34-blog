
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from "react-router-dom";

import Home from './pages/Home.jsx';
import PostPage from "./pages/PostPage.jsx";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/post/:author/:postSlug" element={<PostPage />} />
    </>
  )
);

export default routes;