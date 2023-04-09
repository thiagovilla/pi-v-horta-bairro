import { createBrowserRouter } from "react-router-dom";

import Root from "./pages/Root";
import Basket, {
  action as basketAction,
  loader as basketLoader,
} from "./pages/Basket";
import Store, {
  action as storeAction,
  loader as storeLoader,
} from "./pages/Store";
import Orders, {
  loader as ordersLoader,
  action as ordersAction,
} from "./pages/Orders";
import Stores, { loader as storesLoader } from "./pages/Stores";
import Admin, {
  loader as adminLoader,
  action as adminAction,
} from "./pages/Admin";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        path: "/hortas",
        Component: Stores,
        loader: storesLoader,
      },
      {
        path: "/hortas/:slug",
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
      {
        path: "/pedidos",
        Component: Orders,
        loader: ordersLoader,
        action: ordersAction,
      },
      {
        path: "/admin",
        Component: Admin,
        loader: adminLoader,
        action: adminAction,
      },
    ],
  },
]);

export default router;
