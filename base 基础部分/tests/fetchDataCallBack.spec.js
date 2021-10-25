import { fetchData } from '../js/fetchDataCallBack'

test('fetchData 返回的结果为 { success: true }', (done) => {
	fetchData(data => {
		expect(data).toEqual({
			success: true
		})
		done()
	})
})
