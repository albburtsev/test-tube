/*
 * In-place
 * Stable
 * Worst-case: O(N^2)
 * Best-case: O(N) — sorted array
 * Average-case: O(N^2)
 * Good to sort small arrays
 */

const swap = <T>(arr: T[], i: number, j: number) => {
	const mediator = arr[i]
	arr[i] = arr[j]
	arr[j] = mediator
}

export const insertionSort = <T>(arr: T[]) => {
	for (let i = 1; i < arr.length; i++) {
		let currentIdx = i

		while (arr[currentIdx - 1] > arr[currentIdx] && currentIdx > 0) {
			swap(arr, currentIdx - 1, currentIdx)
			currentIdx--
		}
	}

	return arr
}
