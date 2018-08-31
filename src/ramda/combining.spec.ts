import { pipe, compose } from 'ramda'

const addOne = (x: number) => x + 1
const square = (x: number) => x * x

test('R.pipe', () => {
	const addFirst = pipe(
		addOne,
		square
	)

	expect(addFirst(2)).toBe(9)

	const squareFirst = pipe(
		square,
		addOne
	)

	expect(squareFirst(2)).toBe(5)
})

test('R.compose', () => {
	const addFirst = compose(
		square,
		addOne
	) // like square(addOne(x))

	expect(addFirst(2)).toBe(9)

	const squareFirst = compose(
		addOne,
		square
	) // like addOne(square(x))

	expect(squareFirst(2)).toBe(5)
})
