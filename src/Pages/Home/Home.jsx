import React from 'react'
import { useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Layout from '../../Layout/Layout';
import { Link } from 'react-router-dom';
import Subscribers from '../../Apps/Subscribers/Subscribers';
import Counter from '../../Apps/Counter/Counter';

const Home = () => {

    return (
        <Layout>
            <div className="home">

                <div className="wrapper">
                    <ul>
                        <li><Link to="/subscribers" element={<Subscribers />}>Subscribers App</Link></li>
                        <li><Link to="/counter" element={<Counter />}>Counter App</Link></li>
                    </ul>
                </div>


            </div>
        </Layout>
    )
}

export default Home
