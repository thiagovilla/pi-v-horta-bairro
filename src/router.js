import { createBrowserRouter } from "react-router-dom";
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
]);

export default router;
