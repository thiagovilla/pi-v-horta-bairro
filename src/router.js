import { createBrowserRouter } from "react-router-dom";
import Basket, { loader as basketLoader } from "./pages/Basket";
import Store, {
  action as storeAction,
  loader as storeLoader,
} from "./pages/Store";

const router = createBrowserRouter([
  {
    path: "/horta/:slug",
    Component: Store,
    loader: storeLoader,
    action: storeAction,
  },
  {
    path: "/cesta",
    Component: Basket,
    loader: basketLoader,
  },
]);

export default router;
