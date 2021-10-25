import { fetchData } from '../js/fetchData'

test('fetchData 返回的结果为 { success: true }', async () => {
	const res = await fetchData()
	expect(res.data).toEqual({
		success: true
	})
})

// test('fetchData 返回的结果为 { success: true }', () => {
// 	// 此处一定要 return !!!!!
// 	return fetchData().then(res => {
// 		expect(res.data).toEqual({
// 			success: true
// 		})
// 	})
// })

// test('fetchData 返回的结果为 { success: true }', () => {
// 	// 此处一定要 return !!!!!
// 	return expect(fetchData()).resolves.toMatchObject({
// 		data: {
// 			success: true
// 		}
// 	})
// })

// 出错的时候执行这个
// test('fetchData 返回的结果为 404', async () => {
// 	expect.assertions(1)
// 	try {
// 		await fetchData()
// 	} catch (e) {
// 		expect(e.toString().includes('404')).toBe(true)
// 	}
// 	// return expect(fetchData()).rejects.toThrow()
// })

// // 出错的时候执行这个
// test('fetchData 返回的结果为 404', () => {
// 	// 以下的expect 必须执行一次 使用catch 的话 一定记得加这个
//  // 以下调用几次 就写几
// 	expect.assertions(1)
// 	// 此处一定要 return !!!!!
// 	return fetchData().catch(e => {
// 		expect(e.toString().includes('404')).toBe(true)
// 	})
// })

// // 出错的时候执行这个
// test('fetchData 返回的结果为 404', () => {
// 	// 此处一定要 return !!!!!
// 	return expect(fetchData()).rejects.toThrow()
// })
