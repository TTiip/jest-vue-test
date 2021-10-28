import timer from '../js/mock-timers'

// useFakeTimers 和 runAllTimes 配合使用
jest.useFakeTimers()

describe('mock-timers.js', () => {
	test('测试 timer', () => {
		const fn = jest.fn()
		timer(fn)
		// // 立刻执行所有timer
		// jest.runAllTimers()
		// // 只运行队列中的timer
		// jest.runOnlyPendingTimers()

		// 需要 timer快进3秒
		jest.advanceTimersByTime(3000) // 3000~6000 之间的时间 应该只执行一次。
		expect(fn).toHaveBeenCalledTimes(1)
		// jest.advanceTimersByTime(6000)
		// expect(fn).toHaveBeenCalledTimes(2)
	})
})