
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { FaShoppingCart } from 'react-icons/fa';
import useCart from "../../hooks/useCart";

const Navbar = () => {

    const {user, logout} = useAuth()
    const [cart] = useCart()

    const handleLogout = () =>{
        logout()
        .then(() => console.log('Logout success'))
        .catch(err => console.log(err))
    }
    
    const links = <>
        <li><NavLink to={'/'} className={({isActive}) => isActive ? 'text-[#EEFF25]' : 'text-white'}>Home</NavLink></li>
        <li><NavLink to={'/dashboard'} className={({isActive}) => isActive ? 'text-[#EEFF25]' : 'text-white'}>Dashboard</NavLink></li>
        <li><NavLink to={'/menu'} className={({isActive}) => isActive ? 'text-[#EEFF25]' : 'text-white'}>Our Menu</NavLink></li>
        <li><NavLink to={'/order/salad'} className={({isActive}) => isActive ? 'text-[#EEFF25]' : 'text-white'}>Our Shop</NavLink></li>
        <li><NavLink to={'/contact-us'} className={({isActive}) => isActive ? 'text-[#EEFF25]' : 'text-white'}>Contact Us</NavLink></li>
        <li><NavLink to={'/auth/sign-up'} className={({isActive}) => isActive ? 'text-[#EEFF25]' : 'text-white'}>Register</NavLink></li>
        {
            user ? 
            <li><NavLink onClick={handleLogout} className={({isActive}) => isActive ? 'text-red-400' : 'text-white'}>Logout</NavLink></li>
            : <li><NavLink to={'/auth/login'} className={({isActive}) => isActive ? 'text-[#EEFF25]' : 'text-white'}>Login</NavLink></li>
        }
        <li>
            <NavLink to={'/dashboard/cart'} className="btn">
            <FaShoppingCart className="text-xl"></FaShoppingCart>
            <div className="badge badge-secondary">{cart.length}</div>
            </NavLink>
        </li>
    </>
    
    return (
        <div className="drawer text-white fixed z-20">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="w-full navbar bg-black bg-opacity-50 py-4 px-4 md:px-6 lg:px-8">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div> 
                    <div className="flex-1">
                        <h1 className="flex flex-col uppercase"><span className="text-xl">Bistro Boss </span> <span className=" tracking-[0.16em]">Restaurant</span></h1>
                    </div>
                    <div className="flex-none hidden lg:block">
                        <ul className="uppercase menu-horizontal items-center text-sm font-medium gap-4">
                        {/* Navbar menu content here */}
                            {links}
                        </ul>
                    </div>
                </div>
                {/* Page content here */}
            </div> 
            <div className="drawer-side z-20">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
                <ul className="p-4 flex flex-col gap-2 w-80 min-h-full bg-neutral-900 bg-opacity-80">
                {/* Sidebar content here */}
                    {links}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;