import { FaBars, FaBook, FaCartShopping, FaList, FaUsers, FaUtensils } from "react-icons/fa6";
import { AiFillHome } from "react-icons/ai";
import { FaCalendarAlt } from "react-icons/fa";
import { IoBag, IoMail, IoWalletSharp } from "react-icons/io5";
import { MdReviews } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";

const Dashboard = () => {
    const [cart] = useCart()
    const isAdmin = true;
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center h-screen">
                {/* Page content here */}
                <div className="w-full bg-white py-2 px-2 shadow fixed top-0 z-20 bg-opacity-50 lg:hidden">
                    <label htmlFor="my-drawer-2" className="btn btn-ghost btn-circle drawer-button"><FaBars className="text-2xl"/></label>
                </div>
                <div className="w-full">
                    <Outlet></Outlet>
                </div>
            
            </div>
            <div className="drawer-side z-20">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
                <ul className="menu p-4 w-80 min-h-full bg-primary text-stone-950 gap-y-3">
                    {/* Sidebar content here */}
                    {
                        isAdmin ?
                    <>
                        <li><NavLink to={'/dashboard/admin-home'}>
                            <AiFillHome className="text-xl"/> 
                            Admin Home</NavLink></li>
                        <li><NavLink to={'/dashboard/add-items'}>
                            <FaUtensils className="text-xl"/> 
                            Add Items</NavLink></li>
                        <li><NavLink to={'/dashboard/items'}>
                            <FaList className="text-xl"/> 
                            Manage Items</NavLink></li>
                        <li><NavLink to={'/dashboard/bookings'}>
                            <FaBook className="text-xl"/> 
                            Manage Bookings</NavLink></li>
                        <li><NavLink to={'/dashboard/users'}>
                            <FaUsers className="text-xl"/> 
                            All Users</NavLink></li>
                    </>
                    : <>
                        <li><NavLink to={'/dashboard/user-home'}><AiFillHome className="text-xl"/> User Home</NavLink></li>
                        <li><NavLink to={'/dashboard/reservation'}><FaCalendarAlt className="text-xl"/> Reservation</NavLink></li>
                        <li><NavLink to={'/dashboard/payment-history'}><IoWalletSharp className="text-xl"/> Payment History</NavLink></li>
                        <li><NavLink to={'/dashboard/cart'}><FaCartShopping  className="text-xl"/> My Cart ({cart.length})</NavLink></li>
                        <li><NavLink to={'/dashboard/review'}><MdReviews   className="text-xl"/> Add Review</NavLink></li>
                    </>

                    }
                    {/* divider */}
                    <div className="divider before:bg-white after:bg-white"></div>
                    <li><NavLink to={'/'}><AiFillHome className="text-xl"/> Home</NavLink></li>
                    <li><NavLink to={'/menu'}><FaBars className="text-xl"/> Menu</NavLink></li>
                    <li><NavLink to={'/order/pizza'}><IoBag className="text-xl"/> Shop</NavLink></li>
                    <li><NavLink to={'/contact-us'}><IoMail className="text-xl"/> Contact</NavLink></li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;