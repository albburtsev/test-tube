/**
 * Heap is a specialized tree-based data structure that satisfies the `heap property`:
 * if P is a parent node of C,
 * then the key (the value) of P is either greater than or equal to (in a max heap)
 * or less than or equal to (in a min heap) the key of C
 */

export interface IMinBinaryHeap<T> {
	peek: () => T | null // O(1)
	size: () => number
	insert: (item: T) => void // O(log n)
	extract: () => T | null // O(log n)
}

export class MinBinaryHeap<T> implements IMinBinaryHeap<T> {
	private storage: T[] = []

	peek() {
		return this.storage[0] || null
	}

	size() {
		return this.storage.length
	}

	insert(item: T) {
		this.storage.push(item)
		this.bubbleUp(this.storage.length - 1)
	}

	extract() {
		const item = this.peek()

		if (this.storage.length) {
			const last = this.storage.pop()!

			if (this.storage.length) {
				this.storage[0] = last
				this.bubbleDown(0)
			}
		}

		return item || null
	}

	private swap(i: number, j: number) {
		const mediator = this.storage[i]
		this.storage[i] = this.storage[j]
		this.storage[j] = mediator
	}

	private bubbleUp(idx: number) {
		const child = this.storage[idx]
		const parentIdx = Math.floor((idx - 1) / 2)
		const parent = this.storage[parentIdx]

		if (child < parent) {
			this.swap(idx, parentIdx)

			if (parentIdx > 0) {
				this.bubbleUp(parentIdx)
			}
		}
	}

	private bubbleDown(idx: number) {
		const rightChildIdx = (idx + 1) * 2
		const leftChildIdx = rightChildIdx - 1

		const item = this.storage[idx]
		const leftChild = this.storage[leftChildIdx]
		const rightChild = this.storage[rightChildIdx]

		if (leftChild !== undefined && rightChild !== undefined) {
			const minChildIdx = rightChild < leftChild ? rightChildIdx : leftChildIdx

			this.swap(idx, minChildIdx)
			this.bubbleDown(minChildIdx)
		} else if (leftChild !== undefined && leftChild < item) {
			this.swap(idx, leftChildIdx)
			this.bubbleDown(leftChildIdx)
		}
	}
}
