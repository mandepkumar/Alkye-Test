import MainLayout from "./layouts/main-layout";
import HomePage from "./pages/home-page";

export const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [{ index: true, element: <HomePage /> }],
  },
];
