import { useNavigate } from "react-router-dom";
import { Iuser } from "../types/reduxType";

function UserList({ data, index }: { data: Iuser; index: number }) {
  const navigate = useNavigate();

  return (
    <tr
      onClick={() => navigate(`user/${data.id}`)}
      className="hover:bg-gray-500 hover:text-white odd:bg-gray-100 hover:cursor-pointer rounded-lg"
      title={`Click to view ${data.name}`}
    >
      <td className="px-4 py-3 ">{index + 1}</td>
      <td className="px-4 py-3">{data.name}</td>
      <td className="px-4 py-3">{data.email}</td>
      <td className="px-4 py-3">{data.phone}</td>
      <td className="px-4 py-3">{data.company.catchPhrase}</td>
    </tr>
  );
}

export default UserList;
