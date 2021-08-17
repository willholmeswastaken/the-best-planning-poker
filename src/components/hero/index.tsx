import React from 'react'

interface Props {
    
}

export const Hero = (props: Props) => {
    return (
        <div className="relative">
            <div className="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28">
                <div className="flex flex-1 flex-col items-center lg:items-start">
                    <h2 className="text-tbpp-blue text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-6">
                        A Simple Planning Poker Tool
                    </h2>
                    <p className="text-tbpp-grey text-lg text-center lg:text-left mb-6">
                        A free and open source planning poker tool to facilitate high performant teams with no charge and no cost.
                        Try it for free today.
                    </p>
                    <div className="flex justify-center flex-wrap gap-6">
                        <button type="button" className="btn btn-purple hover:bg-tbpp-white hover:text-black">Try it</button>
                        <button type="button" className="btn btn-white hover:bg-tbpp-purple hover:text-white">Sign up</button>
                    </div>
                </div>
                <div className="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10">
                    <img src="./imgs/hero-bg.png" alt="hero" className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full" />
                </div>
            </div>
        </div>
    )
}
