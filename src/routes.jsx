import Login from "./components/login";
import ProtectedRoute from "./components/protected-route";
import MainLayout from "./layouts/main-layout";
import HomePage from "./pages/home-page";

export const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
];
