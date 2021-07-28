import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './component/Home'
import './App.css'
import SearchPage from './component/SearchPage'

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/search" component={SearchPage} />
            </Switch>
        </BrowserRouter>
    )
}

export default App