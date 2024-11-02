import {useState} from 'react'
import Link from './../Link/Link';
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
const NavBar = () => {
    const [open, setOpen]=useState(false)
    const routes = [{ id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' }, 
        { id: 3, path: '/services', name: 'Services' }, 
        { id: 4, path: '/contact', name: 'Contact' }, 
        { id: 5, path: '/login', name: 'Login' }];

    return (
        <nav className="bg-yellow-400 text-black p-4">
     <div className="md:hidden" onClick={()=>setOpen(!open)}>
        {
            open ===true? <RxCross2 className="text-2xl "></RxCross2>: <AiOutlineMenu className="text-2xl "></AiOutlineMenu>
        }
     
     </div>
           <ul className={`md:flex bg-yellow-300 absolute duration-1000
            ${open? 'top-12':'-top-60'} px-4`}>
           {
                routes.map(route=><Link key={route.id} route={route}></Link>)
            }
           </ul>
        </nav>
    );
};

export default NavBar;