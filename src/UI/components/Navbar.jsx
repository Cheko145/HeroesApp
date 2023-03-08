import { Link, NavLink } from 'react-router-dom';


export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={({isActive})=>`nav-item nav-link${isActive?'':''}`} 
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className={({isActive})=>`nav-item nav-link${isActive?'':''}`} 
                        to="/dc"
                    >
                        DC
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flec justify-content-end">
                <ul className="navbar-nav ml-auto">
                   
                   <span className='nav-item nav-link text-danger'>
                    Pacheco
                   </span>
                   <button
                   className='nav-item nav-link btn'
                   >Logout
                   </button>
                </ul>
            </div>
        </nav>
    )
}