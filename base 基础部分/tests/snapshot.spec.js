import { generateConfig, generateAnotherConfig } from "../js/snapshot";

describe('snapshot.js', () => {
	test('测试 generateConfig 函数', () => {
		// 快照时间 只要是Date类型即可 不用每次都相同
		expect(generateConfig()).toMatchSnapshot({
			time: expect.any(Date)
		})
	})

	test('测试 generateAnotherConfig 函数', () => {
		expect(generateAnotherConfig()).toMatchSnapshot()
	})


	// 安装 prettier 包 使用 toMatchInlineSnapshot 生成一个快照当作第二个参数
	// test("测试 generateConfig 函数", () => {
  //   // 快照时间 只要是Date类型即可 不用每次都相同
  //   expect(generateConfig()).toMatchInlineSnapshot(
  //     {
  //       time: expect.any(Date),
  //     },
  //     `
  //     Object {
  //       "port": 8081,
  //       "time": Any<Date>,
  //     }
  //   `
  //   )
  // })

})
