import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../contexts/AuthProvider';

const MyOrders = () => {
    const {user} = useContext(AuthContext);
    const url = `https://used-products-resale-server-pied.vercel.app/myOrders?email=${user?.email}`;
    const {data: myOrders = [], refetch} = useQuery({
        queryKey: ["myOrders", user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    })

    const handleDeleteUser = id => {
        fetch(`https://used-products-resale-server-pied.vercel.app/order/${id}`, {
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
                      <th>Payment</th>
                    </tr>
                  </thead>
                  <tbody>
                      {
                          myOrders?.map((myOrder, index) => <tr key={myOrder._id}>
                              <th>{index + 1}</th>
                              <td>
                                <div className="avatar">
                                  <div className="w-12 rounded-full">
                                    <img src={myOrder.img} alt="" />
                                  </div>
                                </div>
                              </td>
                              <td>{myOrder.name}</td>
                              <td>{myOrder.email}</td>
                              <td><button onClick={() => handleDeleteUser(myOrder._id)} className="btn btn-xs btn-danger"><FaTrash></FaTrash></button></td>
                              <td>
                                {
                                  myOrder.price && !myOrder.paid && <Link to={`/dashboard/payment/${myOrder._id}`}><button className='btn btn-xs rounded-lg font-semibold text-white'>Pay</button></Link>
                                }  
                                {
                                  myOrder.price && myOrder.paid && <span className='rounded-lg font-semibold text-green-300 btn btn-xs'>Paid</span>
                                }  
                              </td>
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