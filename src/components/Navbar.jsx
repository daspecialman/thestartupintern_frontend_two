import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavLinks = () =>{
    const { pathname } = useLocation("");
    
    if(pathname === "/"){
        return (
            <React.Fragment>
                <Link to="/" className="whitespace-nowrap text-base font-medium text-white-500 hover:text-white-900">Login</Link>
                <Link to="/register" className="ml-8 whitespace-nowrap text-base font-medium text-white-500 hover:text-white-900">Register</Link>
            </React.Fragment>
        )
    }
    else if(pathname === "/register"){
        return (
            <React.Fragment>
                <Link to="/" className="whitespace-nowrap text-base font-medium text-white-500 hover:text-white-900">Login</Link>
                <Link to="/register" className="ml-8 whitespace-nowrap text-base font-medium text-white-500 hover:text-white-900">Register</Link>
            </React.Fragment>
        )
    }
    else{
        return(
            <React.Fragment>
                <Link to="/" className="ml-8 whitespace-nowrap text-base font-medium text-white-500 hover:text-white-900">Logout</Link>
                <Link to="/bucket" className="ml-8 whitespace-nowrap text-base font-medium text-white-500 hover:text-white-900">My Bucket</Link>
            </React.Fragment>
        )
    }
}


function Navbar() {
    return (
        <div>
            <div className="relative" style={{ backgroundColor: '#008289', color: '#ffffff' }}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                        <div className="flex justify-start lg:w-0 lg:flex-1">
                            <a href="!#" className="whitespace-nowrap text-base font-medium  text-white-500 hover:text-white-900">
                                Eventful Moments.
                                
                            </a>
                        </div>
                    
                        <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                            <NavLinks />
                        </div>
                    </div>
                </div>

                {/* <!-- 
                    Mobile menu, show/hide based on mobile menu state.

                    Entering: "duration-200 ease-out"
                    From: "opacity-0 scale-95"
                    To: "opacity-100 scale-100"
                    Leaving: "duration-100 ease-in"
                    From: "opacity-100 scale-100"
                    To: "opacity-0 scale-95"
                --> */}

                <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                    <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                        <div className="pt-5 pb-6 px-5">
                            <div className="flex items-center justify-between">
                                <div>
                                    <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow"/>
                                </div>
                            </div>
                        </div>
                        <div className="py-6 px-5 space-y-6">
                            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                                <Link to="/" className="whitespace-nowrap text-base font-medium text-black-500 hover:text-black-900">Login</Link>
                                
                                <Link to="/register" className="ml-8 whitespace-nowrap text-base font-medium text-black-500 hover:text-black-900">Register</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
