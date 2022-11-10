import React from 'react'
import { About } from '../../Components/About/About'
import CTA from '../../Components/CTA/CTA'
import { Header } from '../../Components/Header/Header'
import { useDynamicTitle } from '../../Components/Hooks/DynamicTitle'
import { Milestone } from '../../Components/Milestone/Milestone'
import Services from '../../Components/Services/Services'

const Home = () => {
    useDynamicTitle("Ashikur- Home")
    return (
        <div className="min-h-screen">
            <Header />
            <Milestone />
            <About />
            <Services />
            <CTA />
        </div>
    )
}

export default Home