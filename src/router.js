import { createBrowserRouter } from "react-router-dom";
import Store from "./pages/Store";

const router = createBrowserRouter([
  {
    path: "/horta/:slug",
    Component: Store,
  },
]);

export default router;
