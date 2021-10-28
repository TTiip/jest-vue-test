import axios from 'axios'

const runCallBack = callback => {
	callback()
}

const createObject = classItem => {
	new classItem()
}

const getData = () => axios({
	url: '/api',
	method: 'GET'
})

export {
	runCallBack,
	createObject,
	getData
}

