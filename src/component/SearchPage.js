import { Mic, Search } from '@material-ui/icons';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { key, cx } from '../API';
import ResultElement from './ResultElement';
import { useHistory } from 'react-router-dom'
import './SearchPage.css'
import GoogleS from '../images/googleS.png';

const SearchPage = (props) => {

    const [ searchInput, setSearchInput ] = useState(props.location.state?props.location.state:'');

    const [ searchResults, setSearchResults ] = useState([]);
    const [ searchInfo, setSearchInfo ] = useState([]);

    const history = useHistory();

    const handleSearch = async (e) =>{
        e.preventDefault();
        try {
            const res = await axios.get(`https://www.googleapis.com/customsearch/v1?key=${key}&cx=${cx}&q=${searchInput}`)
            if(res){
                setSearchResults(res.data.items);
                setSearchInfo(res.data.searchInformation);
                console.log(res.data.items);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        const fetchresults = async ()=>{
            try {
                const res = await axios.get(`https://www.googleapis.com/customsearch/v1?key=${key}&cx=${cx}&q=${searchInput}`)
                if(res){
                    setSearchResults(res.data.items);
                    setSearchInfo(res.data.searchInformation);
                    console.log(res.data.items);
                }
            } catch (error) {
                console.log(error);
            }

        }
        fetchresults();
    }, [searchInput]);

    const googleresults = async ()=>{
        try {
            const res = await axios.get(`https://www.googleapis.com/customsearch/v1?key=${key}&cx=${cx}&q=${searchInput}`)
            if(res){
                setSearchResults(res.data.items);
                setSearchInfo(res.data.searchInformation);
                console.log(res.data.items);
            }
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <div className="searchPage__Wrapper">
            <div className="searchPage__Header">
                <img src={GoogleS} alt="logo" onClick={()=>history.push('/')} />
                <form onSubmit={handleSearch} >
                    <Search onCLick={()=>googleresults()}/>
                    <input
                        type="text"
                        value={searchInput}
                        onChange={e=>setSearchInput(e.target.value)}
                    />
                    <Mic/>
                </form>
            </div>
            <div className="searchPage__Results container mt-3">
                <p>About {searchInfo.formattedTotalResults} results ({searchInfo.formattedSearchTime}s)</p>
                <div className="searchPage__ResElements row">
                    <div className="col-lg-8">
                        {searchResults.map( (val, index)=>{
                            return <ResultElement key={index} title={val.title} link={val.displayLink} redirect={val.formattedUrl} snippet={val.snippet} />
                        } )}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchPage