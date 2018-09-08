import * as R from 'ramda'

const isAdult = R.compose(
	R.lte(18),
	R.prop('age')
)

test('R.prop', () => {
	expect(isAdult({ age: 16 })).toBe(false)
	expect(isAdult({ age: 18 })).toBe(true)
	expect(isAdult({ age: 20 })).toBe(true)
})
