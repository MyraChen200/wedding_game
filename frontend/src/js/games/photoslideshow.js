import React from "react"

class PhotoSlideShow extends React.Component {
	constructor(props) {
        super(props)

        this.state = {
        	photo_list: [],
        	frame_path: null
        }
    }

    componentDidMount() {
    	// console.log("cxxx")
        this.loadPhotos()
    }

    loadPhotos() {
     	this.setState({
     		photo_list : ['/static/assets/demo1.jpeg'],
     		frame_path: '/static/assets/frame.png'
     	})
        console.log(this.state)
    }

    render() {
        const style = {
        	photo_content: {
        		width: '600px',
        		height: '600px',
        		position: 'absolute',
        		top: 0,
        		left: 0
        	},
        	frame: {
        		position: 'absolute',
        		width: '600px',
        		height: '600px',
        		zIndex: 99,
        		top: 0,
        		left: 0
        	}
        }

        return (
        	<div>
        	    {this.props.match.params.id}
	            <div>This is photo page</div>
	            <img src={this.state.frame_path} style={style.frame}/> 
	            {this.state.photo_list.map((p)=>
                    <img src={p} key={p} style={style.photo_content}/> 
	            )}
        	</div>
        )
    }
}

export default PhotoSlideShow
