import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import SensorBox from "../components/SensorBox";
import CreateSensor from "../pages/CreateSensor";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: (
          <div>
            <SensorBox />
          </div>
        ),
      },
      {
        path: "/create",
        element: (
          <div>
            <CreateSensor />
          </div>
        ),
      },
      {
        path: "/download",
        element: <div>about pages</div>,
      },
    ],
  },
]);

export default router;
