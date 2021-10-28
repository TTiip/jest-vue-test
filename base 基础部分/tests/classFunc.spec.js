import demoFunction from '../js/classFunc'
import Util from '../js/class'

// jest.mock 发现 Util 是一个类，会自动把类的构造函数和方法变成 jest.fn()
jest.mock('../js/class')

describe('classFunc.js', () => {
	test('测试 demoFunction', () => {
		demoFunction()
		expect(Util).toHaveBeenCalled()
		console.log(Util.mock.instances[0].a)
		expect(Util.mock.instances[0].a).toHaveBeenCalled()
		expect(Util.mock.instances[0].b).toHaveBeenCalled()
	})
})

