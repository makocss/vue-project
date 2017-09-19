import axios from 'axios'

const instance = axios.create({
	baseURL: 'http://114.215.78.194:30555/',
	timeout: 5000
})

export default instance