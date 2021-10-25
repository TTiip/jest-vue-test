
test('toBe', () => {
	// toBe 会匹配 引用
	const a = 10
	expect(a).toBe(10)
})

test('toEqual', () => {
	// toEqual 值匹配内容
	const a = { one: 1 }
	expect(a).toEqual({ one: 1 })
})

test('toBeNull', () => {
	// toBeNull 匹配null
	const a = null
	expect(a).toBeNull()
})

test('toBeUndefined', () => {
	// toBeUndefined 匹配undefined
	const a = undefined
	expect(a).toBeUndefined()
})

test('toBeTruthy', () => {
	// toBeTruthy 匹配 js 转化以后的boolean
	const a = 1
	expect(a).toBeTruthy()
})

test('toBeFalsy', () => {
	// toBeFalsy 匹配 js 转化以后的boolean
	const a = 0
	expect(a).toBeFalsy()
})

test('not', () => {
	// not 匹配 取反
	const a = 0
	expect(a).not.toBeTruthy()
	expect(a).toBeFalsy()
})

test('toBeGreaterThan', () => {
	// toBeGreaterThan 匹配 比某个数大
	const a = 10
	expect(a).toBeGreaterThan(9)
})

test('toBeGreaterThanOrEqual', () => {
	// toBeGreaterThanOrEqual 匹配 比某个数小 或者等于
	const a = 10
	expect(a).toBeGreaterThanOrEqual(10)
})

test('toBeLessThan', () => {
	// toBeLessThan 匹配 比某个数小 或者小于
	const a = 10
	expect(a).toBeLessThan(11)
})

test('toBeLessThanOrEqual', () => {
	// toBeLessThanOrEqual 匹配 比某个数小 或者等于
	const a = 10
	expect(a).toBeLessThanOrEqual(10)
})

test('toBeCloseTo', () => {
	// toBeCloseTo 匹配 浮点数相关的比较
	const a = .1
	const b = .2
	expect(a + b).toBeCloseTo(.3)
})

test('toMatch', () => {
	// 匹配字符串
	const str = 'http://www.dell-lee.com'
	expect(str).toMatch(/dell-lee/)
})

test('toContain', () => {
	// 数组中的匹配
	const arr = ['dell', 'lee', 'imooc']
	const data = new Set(arr)
	expect(arr).toContain('dell')
	expect(data).toContain('dell')
})

const throwNewErrorFunc = () => {
	throw new Error('this is a new error!')
}
test('toThrow', () => {
	// 匹配 抛出异常
	expect(throwNewErrorFunc).toThrow('this is a new error!')
	// // 不通过
	// expect(throwNewErrorFunc).toThrow('aaaa')
})
