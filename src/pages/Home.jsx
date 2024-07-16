import React from 'react'
import Header from '../components/Header'

const Home = () => {
    return (
        <div>
            <Header />
            <div>
                <Blogs />
                <Pagination />
            </div>
        </div>
    )
}

export default Home