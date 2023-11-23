import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";


const AllUsers = () => {
    const axiosSecure = useAxiosSecure()
    // load users by TanStack Query
    const {data: users = [], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data;
        }
    })

    const handleMakeAdmin = (user) => {
        axiosSecure.patch(`/users/admin/${user._id}`)
        .then(res => {
            console.log(res.data)
            if(res.data.modifiedCount > 0){
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: `${user.name} has been admin now`,
                    showConfirmButton: false,
                    timer: 1500
                    });
                    refetch()
            }
        })
    }

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelBouttonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/users/${id}`)
                .then(res  => {
                    if(res.data.deletedCount > 0){
                        Swal.fire({
                          title: "Deleted!",
                          text: "Your file has been deleted.",
                          icon: "success"
                        });
                        refetch();
                    }
                })
            }
          });
    }
    
    return (
        <div className="bg-stone-100 pb-16">
            <SectionTitle
                heading={'MANAGE ALL USERS'}
                subHeading={'How many??'}
            ></SectionTitle>
            <div className="w-4/5 mx-auto p-12 bg-white">
                <div className="pb-8">
                    <h2 className="text-2xl font-cinzel font-bold">Total Users: {users.length}</h2>
                </div>
                <div>
                    {/* heading */}
                    <div className="grid md:grid-cols-12 justify-between py-7 px-6 bg-secondary rounded-t-2xl font-medium text-white">
                        <h4></h4>
                        <h4 className="md:col-span-3">NAME</h4>
                        <h4 className="md:col-span-5">EMAIL</h4>
                        <h4 className="md:col-span-2">ROLE</h4>
                        <h4 className="md:col-span-1">ACTION</h4>
                    </div>
                    {/* body */}
                    <div>
                        {
                            users.map((user, index) => <div 
                                key={user._id}
                                className="grid md:grid-cols-12 justify-between items-center py-6 px-6 font-medium border-t">
                                <h4 className="font-bold text-lg">{index + 1}</h4>
                                <h4 className="md:col-span-3">{user.name}</h4>
                                <h4 className="md:col-span-5">{user.email}</h4>
                                <div className="md:col-span-2">
                                    {
                                        user.role === 'admin' ? 'Admin'
                                        : <button onClick={() => handleMakeAdmin(user)} className="btn text-xl"><FaUsers></FaUsers></button>
                                    }
                                </div>
                                <div className="md:col-span-1">
                                    <button onClick={() => handleDelete(user._id)} className="btn btn-ghost text-red-500"><FaTrashAlt className="text-xl"></FaTrashAlt>
                                    </button>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;