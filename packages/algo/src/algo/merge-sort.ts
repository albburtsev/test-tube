/*
 * Merge sort is a divide and conquer algorithm that was invented by John von Neumann in 1945.
 * It's stable and takes O(n lg N) times in worst/best/average cases.
 */
const merge = <T>(arrA: T[], arrB: T[]) => {
	const merged: T[] = []

	// @todo: try in-place solution with indicies

	while (arrA.length && arrB.length) {
		if (arrA[0] <= arrB[0]) {
			merged.push(arrA.shift()!)
		} else {
			merged.push(arrB.shift()!)
		}
	}

	return merged.concat(arrA).concat(arrB)
}

export const mergeSort = <T>(arr: T[]): T[] => {
	if (arr.length <= 1) {
		return arr
	}

	const centerIdx = Math.floor(arr.length / 2)
	const left = arr.slice(0, centerIdx)
	const right = arr.slice(centerIdx)

	return merge(mergeSort(left), mergeSort(right))
}
