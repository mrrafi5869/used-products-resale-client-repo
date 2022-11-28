import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { FaTrash } from 'react-icons/fa';
import { AuthContext } from '../../../../contexts/AuthProvider';

const MyOrders = () => {
    const {user} = useContext(AuthContext);
    const url = `http://localhost:5000/myOrders?email=${user?.email}`;
    const {data: myOrders = [], refetch} = useQuery({
        queryKey: ["myOrders", user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })

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
                myOrders?.length > 0 && <div className="overflow-x-auto">
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
                          myOrders?.map((myOrder, index) => <tr key={myOrder._id}>
                              <th>{index + 1}</th>
                              <td>
                                <div className="avatar">
                                  <div className="w-24 rounded-full">
                                    <img src={myOrder.img} alt="" />
                                  </div>
                                </div>
                              </td>
                              <td>{myOrder.name}</td>
                              <td>{myOrder.email}</td>
                              <td><button onClick={() => handleDeleteUser(myOrder._id)} className="btn btn-xs btn-danger"><FaTrash></FaTrash></button></td>
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

export default MyOrders;