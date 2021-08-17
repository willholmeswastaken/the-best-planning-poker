import React from 'react'
import { Header } from '../../components/header'
import { Hero } from '../../components/hero'

interface LandingPageProps {
    
}

export const LandingPage = (props: LandingPageProps) => {
    return (
        <div>
            <Header />
            <Hero />
        </div>
    )
}
