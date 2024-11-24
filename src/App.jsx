import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./routes";
import "./App.css";
import AuthProvider from "./components/auth-context";

const router = createBrowserRouter(routes);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  );
}

export default App;
