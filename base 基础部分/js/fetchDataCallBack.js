import axios from 'axios'

const fetchData = (fn) => {
	axios.get('http://www.dell-lee.com/react/api/demo.json')
		.then(res => {
			fn(res.data)
		})
}

export {
	fetchData
}
