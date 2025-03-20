import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Users from "./pages/users";
import Layout from "./components/layout";
import UserCard from "./pages/userCard";
import UserForm from "./components/userForm";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Layout />}>
          <Route index element={<Users />} />
          <Route path="user/:id" element={<UserCard />} />
          <Route path="add-user" element={<UserForm />} />
        </Route>
      </>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
