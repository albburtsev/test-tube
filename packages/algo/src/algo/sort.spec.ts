import { mergeSort } from './merge-sort'

test('sort', () => {
	;[mergeSort].forEach(sortAlgo => {
		expect(sortAlgo([])).toEqual([])
		expect(sortAlgo([3, 1, 2])).toEqual([1, 2, 3])
		expect(sortAlgo(['a', 'c', 'w', 'b', 'd', 'z'])).toEqual(['a', 'b', 'c', 'd', 'w', 'z'])
	})
})
