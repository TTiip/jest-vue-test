import { fetchData } from '../js/mock-more'

// 在 ../js/mock-more 文件中的东西都被mock了以后 直接引用真实的 函数
// 在mock中没有对应的函数的时候 会报错
const { getNumber } = jest.requireActual('../js/mock-more')

jest.mock('../js/mock-more',() => ({
	__esModule: true,
	fetchData: jest.fn(() => ({
		data: '(function (){return "123"})()'
	}))
}))

describe('mock-more.js', () => {
	test('fetchData 测试', async () => {
		const { data } = await fetchData()
		expect(eval(data)).toEqual('123')
	})

	test('getNumber 测试', async () => {
		expect(getNumber()).toEqual(123)
	})
})
