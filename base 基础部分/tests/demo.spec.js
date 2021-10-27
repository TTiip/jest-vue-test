import axios from 'axios'
import { runCallBack, createObject, getData } from '../js/demo'

// jest 模拟xxxxx请求
// 第一个参数 需要mock的请求 后面对应每个请求的返回值
jest.mock('../js/demo', () => ({
	__esModule: true,
	getData: jest.fn(() => ({
		value: 'getData'
	}))
}))

// mock的作用
// 1.捕获函数的调用和返回结构
// 2.它可以让我们自由的设置返回的值
// 3.改变函数的返回值（函数内部实现）
describe('demo.js', () => {
	test('测试 callBack', () => {
		const func = jest.fn(() => '445566')
		// 或者这样
		// func.mockReturnValue('445566')
		runCallBack(func)
		runCallBack(func)
		runCallBack(func)
		// expect(func).toBeCalled()
		// expect(func.mock.calls.length).toBe(1)
	})

	test('测试 callBack', () => {
		const func = jest.fn()
		func
			.mockReturnValueOnce('aaa')
			.mockReturnValueOnce('bbb')
			.mockReturnValueOnce('ccc')
		runCallBack(func)
		runCallBack(func)
		runCallBack(func)
		// expect(func).toBeCalled()
		// expect(func.mock.calls.length).toBe(1)
	})

	test('测试 createObject', () => {
		const func = jest.fn()
		createObject(func)
	})

	test.only('测试 getData', async () => {
		const res = await getData()
		expect(res).toEqual({
			value: 'getData'
		})
	})
})
