import axios from 'axios'

const fetchData = (fn) => {
	return axios.get('http://www.dell-lee.com/react/api/demo.json')
}

export {
	fetchData
}
