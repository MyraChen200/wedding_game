import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
// import moment from 'moment'
import App from "./App"
// import 'material-design-icons/iconfont/material-icons.css'
// import './App.css'
// window.moment = moment
// window.axios = axios
// window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

// let csrfToken = null;
// if (document.cookie && document.cookie !== '') {
//     let cookies = document.cookie.split(';')
//     for (let i = 0; i < cookies.length; i++) {
//         let cookie = cookies[i].trim()

//         if (cookie.substring(0, 'csrftoken'.length + 1) === ('csrftoken' + '=')) {
//             csrfToken = decodeURIComponent(cookie.substring(10))
//             break
//         }
//     }
// }

// if(csrfToken) {
// 	window.axios.defaults.headers.common['X-CSRFToken'] = csrfToken
// }

ReactDOM.render(
	<App />,
	document.getElementById('app')
)
