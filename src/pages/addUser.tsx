import { Link } from "react-router-dom";
import AddUserForm from "../components/addUserForm";
import { FaArrowCircleLeft } from "react-icons/fa";

function AddUser() {
  return (
    <section className="container mx-auto mt-10 px-4  ">
      <h1 className=" text-blue-950 font-extrabold text-4xl flex items-center justify-between">
        <span>ADD NEW USER</span>
        <Link to="/" className=" hover:text-gray-500 top-10 left-10 text-3xl">
          <FaArrowCircleLeft />
        </Link>
      </h1>
      <AddUserForm />
    </section>
  );
}

export default AddUser;
