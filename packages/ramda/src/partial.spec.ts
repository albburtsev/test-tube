import { curry, partial } from 'ramda'

const abcSum = (a: number, b: number, c: number) => a + b + c

test('R.curry', () => {
	const abcSumCurried = curry(abcSum)

	expect(abcSumCurried(1, 2, 3)).toBe(6)
	expect(abcSumCurried(1, 2)(3)).toBe(6)
	expect(abcSumCurried(1)(2)(3)).toBe(6)
	expect(typeof abcSumCurried(1, 2)).toBe('function')
})

test('R.partial', () => {
	const addOne = partial(abcSum, [0, 1])

	expect(typeof addOne).toBe('function')
	expect(addOne(2)).toBe(3)
})
