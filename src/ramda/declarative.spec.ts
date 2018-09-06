import { cond, both, ifElse, gt, lte, identity, always, T } from 'ramda'

const nonNegative = ifElse(lte(0), identity, always(0))

test('R.ifElse', () => {
	expect(nonNegative(-1)).toBe(0)
	expect(nonNegative(0)).toBe(0)
	expect(nonNegative(1)).toBe(1)
})

enum Stages {
	Boy = 'Go to school',
	Teen = 'Can drive',
	Green = 'Can drink',
	Old = 'Noooo'
}

const stage: (age: number) => number = cond([
	[gt(16), always(Stages.Boy)],
	[both(lte(16), gt(21)), always(Stages.Teen)],
	[both(lte(21), gt(30)), always(Stages.Green)],
	[T, always(Stages.Old)]
])

test('R.cond', () => {
	expect(stage(11)).toBe(Stages.Boy)
	expect(stage(16)).toBe(Stages.Teen)
	expect(stage(20)).toBe(Stages.Teen)
	expect(stage(21)).toBe(Stages.Green)
	expect(stage(30)).toBe(Stages.Old)
})
