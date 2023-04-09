import { createBrowserRouter } from "react-router-dom";
import Store, { loader as storeLoader } from "./pages/Store";

const router = createBrowserRouter([
  {
    path: "/horta/:slug",
    Component: Store,
    loader: storeLoader,
  },
]);

export default router;
