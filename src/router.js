import { createBrowserRouter } from "react-router-dom";
import Basket, {
  action as basketAction,
  loader as basketLoader,
} from "./pages/Basket";
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
    action: basketAction,
  },
]);

export default router;
