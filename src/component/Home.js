import { Button } from '@material-ui/core';
import { Mic, Search } from '@material-ui/icons';
import React, { useState } from 'react'
import { useHistory } from 'react-router';
import GoogleL from '../images/googleL.png';
import './Home.css'

const Home = () => {

    const [ searchInput, setSearchInput ] = useState('');

    const history = useHistory();

    const onSubmit = e =>{
        e.preventDefault();
        history.push({ pathname: '/search', state: searchInput });
    }

    return (
        <div className="home__MainDiv">
            <div className="home__Container">
                <div className="home__Logo">
                    <img src={GoogleL} alt="logo" />
                </div>
                <div className="home__Search">
                    <form onSubmit={onSubmit}>
                        <div className="inputDiv">
                            <Search />
                            <input
                                type="text"
                                value={searchInput}
                                onChange={e=>setSearchInput(e.target.value)}
                                autoFocus
                                required
                            />
                            <Mic/>
                        </div>
                        <div className="buttonGroup" >
                            <Button type="submit">Google Search</Button>
                            <Button type="reset" onClick={()=>setSearchInput('')} >Reset Search</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Home
