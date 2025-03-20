function UserForm() {
  return (
    <form action="" className="mt-10">
      <p className="text-xl text-orange font-medium">Personal Info</p>
      <aside className="flex mt-1 flex-col md:flex-row items-center justify-between">
        <label className="w-full md:w-[30%] mt-4">
          <p className="text-blue-950 font-medium">
            First Name <span>*</span>
          </p>
          <input
            type="text"
            className="w-[100%] px-3 py-2 border-2 border-gray-600 rounded-lg"
          />
        </label>
        <label className="w-full md:w-[30%] mt-4">
          <p className="text-blue-950 font-medium">
            Last Name <span>*</span>
          </p>
          <input
            type="text"
            className="w-[100%] px-3 py-2 border-2 border-gray-600 rounded-lg"
          />
        </label>
        <label className="w-full md:w-[30%] mt-4">
          <p className="text-blue-950 font-medium">
            Username <span>*</span>
          </p>
          <input
            type="text"
            className="w-[100%] px-3 py-2 border-2 border-gray-600 rounded-lg"
          />
        </label>
      </aside>

      <aside className="flex mt-1 flex-col md:flex-row items-center justify-between">
        <label className="w-full md:w-[30%] mt-4">
          <p className="text-blue-950 font-medium">
            Email<span>*</span>
          </p>
          <input
            type="email"
            className="w-[100%] px-3 py-2 border-2 border-gray-600 rounded-lg"
          />
        </label>
        <label className="w-full md:w-[30%] mt-4">
          <p className="text-blue-950 font-medium">
            Mobile no <span>*</span>
          </p>
          <input
            type="text"
            className="w-[100%] px-3 py-2 border-2 border-gray-600 rounded-lg"
          />
        </label>
        <label className="w-full md:w-[30%] mt-4">
          <p className="text-blue-950 font-medium">
            Phone <span>*</span>
          </p>
          <input
            type="text"
            className="w-[100%] px-3 py-2 border-2 border-gray-600 rounded-lg"
          />
        </label>
      </aside>
      <label className="mt-4 block">
        <p className="text-blue-950 font-medium">
          Website <span>*</span>
        </p>
        <input
          type="text"
          className="w-[100%] px-3 py-2 border-2 border-gray-600 rounded-lg"
        />
      </label>

      <p className="text-xl mt-7 text-orange font-medium">Contact Info</p>
      <aside className="flex mt-1 flex-col md:flex-row items-center justify-between">
        <label className="w-full md:w-[30%] mt-4">
          <p className="text-blue-950 font-medium">
            Street <span>*</span>
          </p>
          <input
            type="text"
            className="w-[100%] px-3 py-2 border-2 border-gray-600 rounded-lg"
          />
        </label>
        <label className="w-full md:w-[30%] mt-4">
          <p className="text-blue-950 font-medium">
            Suite <span>*</span>
          </p>
          <input
            type="text"
            className="w-[100%] px-3 py-2 border-2 border-gray-600 rounded-lg"
          />
        </label>
        <label className="w-full md:w-[30%] mt-4">
          <p className="text-blue-950 font-medium">
            City <span>*</span>
          </p>
          <input
            type="text"
            className="w-[100%] px-3 py-2 border-2 border-gray-600 rounded-lg"
          />
        </label>
      </aside>

      <aside className="flex mt-1 flex-col md:flex-row items-center justify-between">
        <label className="w-full md:w-[30%] mt-4">
          <p className="text-blue-950 font-medium">
            Zipcode<span>*</span>
          </p>
          <input
            type="text"
            className="w-[100%] px-3 py-2 border-2 border-gray-600 rounded-lg"
          />
        </label>
        <label className="w-full md:w-[30%] mt-4">
          <p className="text-blue-950 font-medium">
            Latitude <span>*</span>
          </p>
          <input
            type="text"
            className="w-[100%] px-3 py-2 border-2 border-gray-600 rounded-lg"
          />
        </label>
        <label className="w-full md:w-[30%] mt-4">
          <p className="text-blue-950 font-medium">
            Longitude <span>*</span>
          </p>
          <input
            type="text"
            className="w-[100%] px-3 py-2 border-2 border-gray-600 rounded-lg"
          />
        </label>
      </aside>

      <p className="text-xl mt-7 text-orange font-medium">Work Info</p>
      <aside className="flex mt-1 flex-col md:flex-row items-center justify-between">
        <label className="w-full md:w-[30%] mt-4">
          <p className="text-blue-950 font-medium">
            name <span>*</span>
          </p>
          <input
            type="text"
            className="w-[100%] px-3 py-2 border-2 border-gray-600 rounded-lg"
          />
        </label>
        <label className="w-full md:w-[30%] mt-4">
          <p className="text-blue-950 font-medium">
            Secondary task <span>*</span>
          </p>
          <input
            type="text"
            className="w-[100%] px-3 py-2 border-2 border-gray-600 rounded-lg"
          />
        </label>
        <label className="w-full md:w-[30%] mt-4">
          <p className="text-blue-950 font-medium">
            Main task <span>*</span>
          </p>
          <input
            type="text"
            className="w-[100%] px-3 py-2 border-2 border-gray-600 rounded-lg"
          />
        </label>
      </aside>
    </form>
  );
}

export default UserForm;

//   company: {
//     name: string;
//     catchPhrase: string;
//     bs: string;
//   };
// }
