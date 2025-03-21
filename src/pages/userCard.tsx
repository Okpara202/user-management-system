import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../reduxManager/store";
import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  FaArrowCircleLeft,
  FaEdit,
  FaTrash,
  FaUserCircle,
} from "react-icons/fa";
import { deleteUser, fetchUsers } from "../reduxManager/usersSlice";

function UserCard() {
  const { id } = useParams<string>();

  const navigate = useNavigate();
  // Get specific user data from state using id
  const data = useSelector((state: RootState) => state.fetchUser);

  const user = data.data.find((user) => user.id === Number(id));
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    // fetch data incase state is lost or refreshed
    if (data.data.length === 0) {
      dispatch(fetchUsers());
    }
  }, [dispatch, data.data.length]);

  const handleDelete = () => {
    // Delete the user

    const assureDelete = confirm(
      `Do you want to delete ${user?.name} from the database`
    );

    if (assureDelete) {
      dispatch(deleteUser(Number(id)));
      navigate("/");
      alert(`${user?.name} Deleted`);
    } else {
      return;
    }
  };
  if (!user) {
    return (
      <div className="container mx-auto font-bold text-3xl text-rose-600 px-2 flex flex-col items-center justify-center h-screen">
        Specified User not found
      </div>
    );
  }

  return (
    <section className="container mx-auto px-4 mt-10">
      <aside className="font-semibold flex bg-slate-300 flex-col md:flex-row justify-evenly items-center text-blue-950 p-10 rounded-4xl relative">
        <Link
          to="/"
          className="absolute hover:text-gray-500 top-10 left-10 text-3xl text-white"
        >
          <FaArrowCircleLeft />
        </Link>
        <div className="text-[20rem] text-white">
          <FaUserCircle />
        </div>
        <div className="text-center mt-4 md:mt-0 ">
          <h1 className="text-3xl font-bold">{user?.name}</h1>
          <p className="mt-2 text-lg">{user?.phone}</p>
          <div className="grid grid-cols-2 gap-5">
            <Link
              to={`/edit-user/${id}`}
              className="mt-5 md:mt-10 bg-orange text-white px-2 lg:px-10 py-2 rounded flex items-center hover:bg-blue-950 hover:text-orange hover:font-black"
            >
              <FaEdit /> <span className="ml-3">Edit User info</span>
            </Link>
            <button
              onClick={handleDelete}
              className="mx-auto mt-5 md:mt-10 bg-gray-500 text-white px-2 lg:px-10 py-2 rounded flex items-center hover:bg-blue-950 hover:text-orange hover:font-black"
            >
              <FaTrash /> <span className="ml-3">Delete User</span>
            </button>
          </div>
        </div>
      </aside>

      <aside className="font-semibold mt-10 flex flex-col md:flex-row w-full md:justify-between ">
        <div className="border-2 border-slate-300 rounded-4xl px-10 py-5 md:w-[45%]">
          <h1 className="font-bold text-2xl text-blue-950">Bio</h1>
          <nav className="mt-3">
            <p className="text-slate-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium pariatur ipsa, vel soluta blanditiis ducimus atque
              vitae minima numquam suscipit.
            </p>
          </nav>
        </div>
        <div className="border-2 border-slate-300 rounded-4xl px-10 py-5 mt-10 md:mt-0 md:w-[45%]">
          <h1 className="font-bold text-2xl text-blue-950">Personal Info</h1>
          <nav className="mt-3 ml-5 list-none">
            <li className="text-slate-600 mt-1">
              {" "}
              Nick name : {user?.username}{" "}
            </li>
            <li className="text-slate-600 mt-1"> Email : {user?.email} </li>
            <li className="text-slate-600 mt-1"> Website : {user?.website} </li>
          </nav>
        </div>
      </aside>

      <aside className="font-semibold mt-10 flex flex-col md:flex-row w-full md:justify-between ">
        <div className="border-2 border-slate-300 rounded-4xl px-10 py-5 md:w-[45%]">
          <h1 className="font-bold text-2xl text-blue-950">Work Info</h1>
          <nav className="mt-3 ml-5 list-none">
            <li className="text-slate-600 mt-1">
              {" "}
              Name : {user?.company.name}
            </li>
            <li className="text-slate-600 mt-1">
              {" "}
              Main duty : {user?.company.bs}{" "}
            </li>
            <li className="text-slate-600 mt-1">
              {" "}
              Current task : {user?.company.catchPhrase}{" "}
            </li>{" "}
          </nav>
        </div>
        <div className="border-2 border-slate-300 rounded-4xl px-10 py-5 mt-10 md:mt-0 md:w-[45%]">
          <h1 className="font-bold text-2xl text-blue-950">Contact Info</h1>
          <nav className="mt-3 ml-5 list-none">
            <li className="text-slate-600 mt-1">
              {" "}
              City : {user?.address.city}{" "}
            </li>
            <li className="text-slate-600 mt-1">
              {" "}
              Street : {user?.address.street}{" "}
            </li>
            <li className="text-slate-600 mt-1">
              {" "}
              Suite : {user?.address.suite}{" "}
            </li>
          </nav>
        </div>
      </aside>
    </section>
  );
}

export default UserCard;
