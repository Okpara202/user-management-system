import { useEffect, useMemo, useRef, useState } from "react";
import { AppDispatch, RootState } from "../reduxManager/store";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../reduxManager/usersSlice";
import Spinners from "../components/spinners";
import { FaSearch } from "react-icons/fa";
import UserList from "../components/userList";

function Users() {
  const searchRef = useRef<HTMLInputElement | null>(null);

  const { data, error, loading } = useSelector(
    (state: RootState) => state.fetchUser
  );

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  // Search icon shift focus to search bar
  const handleSearchFocus = () => {
    searchRef.current?.focus();
  };

  // State for filtering by user name
  const [name, setName] = useState<string>("");

  // Filter data
  const filteredData = useMemo(() => {
    return data.filter((data) =>
      data.name.toLowerCase().includes(name.toLowerCase())
    );
  }, [data, name]);

  const displayUsers = (filteredData || []).map((data, index) => (
    <UserList key={data.id} data={data} index={index} />
  ));

  if (loading) {
    return (
      <div className="container flex items-center justify-center h-screen">
        <Spinners />
      </div>
    );
  }

  if (error) {
    return (
      <div className="container px-4 mx-auto flex md:items-center justify-center h-screen flex-col ">
        <h1 className="text-4xl font-bold text-blue-950">
          Oops, something went wrong
        </h1>
        <p className="text-lg font-medium mt-5 text-gray-text">
          But don't worry - it's not your fault
        </p>
        <button
          onClick={() => window.location.reload()}
          className="border-2 border-gray-bg px-10 py-2 rounded-3xl font-bold text-xl w-[200px] text-center mt-10 hover:bg-blue-950 hover:text-white"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <section className="container p-4 mx-auto font-poppins">
      <div className="md:flex items-center mt-3 justify-between text-center ">
        <h3 className="text-2xl mb-3 md:mb-0 font-bold text-orange">
          Manage users
        </h3>
        <div className="flex items-center justify-center border-2 border-gray-bg rounded-xl px-4 py-2 text-lg md:w-3/5">
          <aside className="text-gray-text">
            <FaSearch onClick={handleSearchFocus} />
          </aside>
          <input
            type="text"
            name=""
            id=""
            placeholder="Search for user by name"
            className="px-4 flex-1/4 border-0 outline-0"
            value={name}
            onChange={(e) => setName(e.target.value)}
            ref={searchRef}
          />
        </div>
      </div>

      <div className="overflow-x-auto mt-10">
        {filteredData.length === 0 ? (
          <div className="font-bold text-xl text-rose-600 text-center mt-10">
            User "{name}" not found
          </div>
        ) : (
          <table className="w-full table-auto border-collapse  shadow-md">
            <thead className=" text-gray-text text-xl">
              <tr className="bg-gray-500">
                <th className="text-left px-4 py-5 text-orange">S.No</th>
                <th className="text-left px-4 py-5 text-orange">Name</th>
                <th className="text-left px-4 py-5 text-orange">Email</th>
                <th className="text-left px-4 py-5 text-orange">Contact</th>
                <th className="text-left px-4 py-5 text-orange">Task</th>
              </tr>
            </thead>
            <tbody>{displayUsers}</tbody>
          </table>
        )}
      </div>
    </section>
  );
}

export default Users;
