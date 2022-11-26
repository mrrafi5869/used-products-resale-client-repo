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

    const handleDeleteUser = id => {
        fetch(`http://localhost:5000/user/${id}`, {
          method: "DELETE",
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          refetch();
        })
    }

  return (
    <>
      {
        allUsers?.length > 0 && 
        <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th>Num</th>
            <th>Image</th>
            <th>Name</th>
            <th>Email</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
            {
                allUsers?.map((user, index) => <tr key={user._id}>
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
                    <td><button onClick={() => handleDeleteUser(user._id)} className="btn btn-xs btn-danger"><FaTrash></FaTrash></button></td>
                  </tr>
                  )
            }
          
        </tbody>
      </table>
    </div>
      }
    </>
  );
};

export default AllUsers;
