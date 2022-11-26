import { useQuery } from "@tanstack/react-query";
import { FaTrash } from 'react-icons/fa';

const AllUsers = () => {
    const {data: allUsers = [] , refetch} = useQuery({
        queryKey: ["allUsers"],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/allUsers");
            const data = await res.json();
            return data;
        }
    });

  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Profile</th>
            <th>Job</th>
            <th>Favorite Color</th>
          </tr>
        </thead>
        <tbody>
            {
                allUsers.map((user, index) => <tr key={user._id}>
                    <th>{index + 1}</th>
                    <td>
                      <div className="avatar">
                        <div className="w-24 rounded-full">
                          <img src={user.img} alt="" />
                        </div>
                      </div>
                    </td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td><button className="btn btn-xs btn-danger"><FaTrash></FaTrash></button></td>
                  </tr>
                  )
            }
          
        </tbody>
      </table>
    </div>
  );
};

export default AllUsers;
