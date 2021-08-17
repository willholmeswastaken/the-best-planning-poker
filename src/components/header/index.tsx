import React from 'react'

interface HeaderProps {

}

export const Header = (props: HeaderProps) => {
    return (
        <header>
            <nav className="container flex items-center py-4 mt-4 sm:mt-12">
                <div className="py-1">
                    <h2 className="text-tbpp-blue text-md md:text-lg lg:text-xl text-center lg:text-left mb-6">
                        The Best Planning Poker
                    </h2>
                </div>
                <ul className="hidden sm:flex flex-1 justify-end items-center gap-12 text-tbpp-blue uppercase text-xs">
                    <li className="cursor-pointer">About</li>
                    <li className="cursor-pointer">Features</li>
                    <button type="button" className="bg-tbpp-red text-white rounded-md px-7 py-3 uppercase">Try it out!</button>
                </ul>
                <div className="flex sm:hidden flex-1 justify-end"><i className="text-2xl fas fa-bars"></i></div>
            </nav>
        </header>
    )
}
