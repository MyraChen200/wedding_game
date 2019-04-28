import React from "react"
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom"
import PhotoSlideShow from './games/photoslideshow'
import TEST from './games/TEST'

class App extends React.Component{
    
    render() {
        return (
            <Router>
                <Route exact path="/" component={TEST} />
                <Route path="/photoslideshow" component={PhotoSlideShow} />
            </Router>
        )
    }
}

export default App;
