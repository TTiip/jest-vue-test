import Counter from '../js/Counter'

let counter = null

describe('Counter的测试代码', () => {
	// 所有测试用例执行之前
	beforeAll(() => {
		console.log('beforeAll')
	})

	// 每个测试用例执行之前 执行
	beforeEach(() => {
		console.log('beforeEach')
		counter = new Counter()
	})

	// 所有测试用例执行之后
	afterAll(() => {
		console.log('afterAll')
	})
	describe('测试增加相关的代码', () => {
		test('测试 Counter中的 addOne', () => {
			console.log('addOne')
			counter.addOne()
			expect(counter.number).toBe(1)
		})
		test('测试 Counter中的 addTwo', () => {
			console.log('addTwo')
			counter.addTwo()
			expect(counter.number).toBe(2)
		})
	})

	describe('测试减少相关的代码', () => {
		test('测试 Counter中的 minusOne', () => {
			console.log('minusOne')
			counter.minusOne()
			expect(counter.number).toBe(-1)
		})

		test('测试 Counter中的 minusTwo', () => {
			console.log('minusTwo')
			counter.minusTwo()
			expect(counter.number).toBe(-2)
		})
	})
})
