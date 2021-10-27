const generateConfig = () => {
	return {
		port: 8081,
		time: new Date()
	}
}

const generateAnotherConfig = () => {
	return {
		serve: 'http://localhost'
	}
}

export {
	generateConfig,
	generateAnotherConfig
}
