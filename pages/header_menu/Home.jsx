import React from 'react'
import Header from '../../components/Header'
import About from '../../components/About'
import Website_Description from '../../components/Website_Description'
import Sidebar from '../../components/sidebar'
import Searchbar from '../../components/Searchbar'
import Loader from '../../components/Loader'
import TopPlayVisits from '../../components/TopPlayVisits'
import Menu from '../../components/Menu'

const Home = () => {
    return (
        <div>
            <div style={{ margin: '0px', display: 'flex', flexDirection: 'row' }}>
                <Sidebar />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <Searchbar />
                    <Loader />
                    <TopPlayVisits />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <Header />
                    <Website_Description />
                </div>
            </div>
            <div>
                <Menu />
                <About />
            </div>

        </div>

    )
}

export default Home