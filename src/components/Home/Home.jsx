import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Header from '../Header/Header';

const Home = () => {
    const navigation = useNavigation()
    return (
        <div>
            <Header></Header>
            {/* <h2>this is home</h2> */}
            <div>{navigation.state === 'loading' && 'loading.....'}</div>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;