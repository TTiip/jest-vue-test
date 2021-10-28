import axios from 'axios'

const fetchData = () => {
	return axios.get('/')
	// return `
	// 	{
	// 		data: '(function (){return "123"})()'
	// 	}
	// `
}

const getNumber = () => {
	return 123
}

export {
	fetchData,
	getNumber
}
