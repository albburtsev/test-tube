import { mergeSort } from './merge-sort'
import { insertionSort } from './insertion-sort'

test('sort', () => {
	;[mergeSort, insertionSort].forEach(sortAlgo => {
		expect(sortAlgo([])).toEqual([])
		expect(sortAlgo([3, 1, 2])).toEqual([1, 2, 3])
		expect(sortAlgo(['a', 'c', 'w', 'b', 'd', 'z'])).toEqual(['a', 'b', 'c', 'd', 'w', 'z'])
	})
})
