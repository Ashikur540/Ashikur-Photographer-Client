import React from 'react'
import { About } from '../../Components/About/About'
import { Header } from '../../Components/Header/Header'
import { Milestone } from '../../Components/Milestone/Milestone'

const Home = () => {
    return (
        <div className="min-h-screen">
            <Header />
            <Milestone />
            <About />
        </div>
    )
}

export default Home