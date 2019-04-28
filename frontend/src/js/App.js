import React from "react"
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom"
import PhotoSlideShow from './games/photoslideshow'

class App extends React.Component{
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <Router>
                <PhotoSlideShow />
            </Router>
        )
    }
}

export default App;
