import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { toast } from 'react-hot-toast';
import { FaTrash } from 'react-icons/fa';

const AllSellers = () => {
    const {data: allSellers = [], refetch} = useQuery({
        queryKey: "allBuyers",
        queryFn: async () => {
            const res = await fetch("https://used-products-resale-server-pied.vercel.app/allSellers");
            const data = await res.json();
            return data;
        }
    });

    
    const handleDeleteUser = id => {
        fetch(`https://used-products-resale-server-pied.vercel.app/user/${id}`, {
          method: "DELETE",
        })
        .then(res => res.json())
        .then(data => {
          refetch();
          toast.success("Delete This Seller");
        })
    }
    return (
        <div>
            {
                allSellers?.length > 0 && <div className="overflow-x-auto">
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
                          allSellers?.map((seller, index) => <tr key={seller._id}>
                              <th>{index + 1}</th>
                              <td>
                                <div className="avatar">
                                  <div className="w-12 rounded-full">
                                    <img src={seller.img} alt="" />
                                  </div>
                                </div>
                              </td>
                              <td>{seller.name}</td>
                              <td>{seller.email}</td>
                              <td><button onClick={() => handleDeleteUser(seller._id)} className="btn btn-xs btn-danger"><FaTrash></FaTrash></button></td>
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

export default AllSellers;