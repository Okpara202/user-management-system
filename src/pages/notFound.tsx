import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="container  mx-auto flex items-center justify-center h-[80vh] flex-col ">
      <h1 className="text-4xl font-bold text-blue-950">404 </h1>
      <p className="text-lg font-medium mt-5 text-gray-text">Page not found</p>
      <button
        onClick={() => navigate("/")}
        className="border-0 px-10 py-2 rounded-3xl font-bold text-xl w-[300px] text-center mt-10 bg-gradient-to-r from-blue-900 via-blue-950 to-orange hover:bg-white hover:text-orange text-white"
      >
        Back to Home
      </button>
    </div>
  );
}

export default NotFound;
