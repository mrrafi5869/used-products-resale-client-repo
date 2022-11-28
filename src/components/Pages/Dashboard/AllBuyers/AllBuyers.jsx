import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { FaTrash } from 'react-icons/fa';

const AllBuyers = () => {
    const {data: allBuyers = [], refetch} = useQuery({
        queryKey: "allBuyers",
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/allBuyers");
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
        <div>
            {
                allBuyers?.length > 0 && <div className="overflow-x-auto">
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
                          allBuyers?.map((buyer, index) => <tr key={buyer._id}>
                              <th>{index + 1}</th>
                              <td>
                                <div className="avatar">
                                  <div className="w-12 rounded-full">
                                    <img src={buyer.img} alt="" />
                                  </div>
                                </div>
                              </td>
                              <td>{buyer.name}</td>
                              <td>{buyer.email}</td>
                              <td><button onClick={() => handleDeleteUser(buyer._id)} className="btn btn-xs btn-danger"><FaTrash></FaTrash></button></td>
                            </tr>
                            )
                      }
                    
                  </tbody>
                </table>
              </div>
            }
        </div>
    );
};

export default AllBuyers;