import React, { useState } from 'react'
import { Link } from 'react-router-dom';

interface HeaderProps {

}

export const Header = (props: HeaderProps) => {
    const [mobileMenuToggled, setMobileMenuToggled] = useState(false);
    return (
        <header>
            <nav className="container flex items-center py-4 mt-4 sm:mt-12">
                <div className="py-1">
                    <Link to="/">
                        <h2 className="text-tbpp-blue text-md md:text-lg lg:text-xl text-center lg:text-left mb-6">
                            The Best Planning Poker
                        </h2>
                    </Link>
                </div>
                <ul className="hidden sm:flex flex-1 justify-end items-center gap-12 text-tbpp-blue uppercase text-xs">
                    <li className="cursor-pointer">About</li>
                    <li className="cursor-pointer">Features</li>
                    <button type="button" className="bg-tbpp-red text-white rounded-md px-7 py-3 uppercase">Try it out!</button>
                </ul>
                <div className="flex sm:hidden flex-1 justify-end" onClick={() => setMobileMenuToggled(!mobileMenuToggled)}><i className="text-2xl fas fa-bars"></i></div>
            </nav>

            <div className={`shadow rounded-md font-semibold ${mobileMenuToggled ? '' : 'hidden'} sm:hidden`}>
                <ul>
                    <a href="" className="block py-2 px-4 text-sm hover:bg-gray-200">About</a>
                    <a href="" className="block py-2 px-4 text-sm hover:bg-gray-200">Features</a>
                    <a href="" className="block py-2 px-4 text-sm hover:bg-gray-200">Try it out!</a>
                </ul>
            </div>
        </header>
    )
}
