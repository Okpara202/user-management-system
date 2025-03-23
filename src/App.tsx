import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Users from "./pages/users";
import Layout from "./components/layout";
import UserCard from "./pages/userCard";
import AddUser from "./pages/addUser";
import EditUser from "./pages/editUser";
import NotFound from "./pages/notFound";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Layout />}>
          <Route index element={<Users />} />
          <Route path="user/:id" element={<UserCard />} />
          <Route path="add-user" element={<AddUser />} />
          <Route path="edit-user/:id" element={<EditUser />} />
          <Route path="*" element={<NotFound />} />
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
