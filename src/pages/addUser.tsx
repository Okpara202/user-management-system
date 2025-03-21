import UserForm from "../components/userForm";

function AddUser() {
  return (
    <section className="container mx-auto mt-10 px-4">
      <h1 className=" text-blue-950 font-extrabold text-4xl">ADD NEW USER</h1>
      <UserForm />
    </section>
  );
}

export default AddUser;
