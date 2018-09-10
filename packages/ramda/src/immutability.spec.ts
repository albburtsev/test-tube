import * as R from 'ramda'

interface Owner {
	name: string
	surname: string
	age: number
}

interface State {
	owner: Owner
	session?: string
	postIds: string[]
}

const owner: Owner = {
	name: 'Evan',
	surname: 'Ifremov',
	age: 35
}
const state: State = {
	owner,
	session: 'a1b3c3',
	postIds: ['z1', 'b2', 'e4', 'f5']
}

const updateSurname = R.assoc('surname')
const updateOwnerName = R.assocPath(['owner', 'name'])
const incOwnerAge = R.evolve({ owner: { age: R.inc } })

describe('Immutable objects', () => {
	test('R.assoc', () => {
		const surname = 'Efremov'
		const updatedOwner = updateSurname(surname, owner)

		expect(updatedOwner).not.toStrictEqual(owner)
		expect(updatedOwner.surname).toBe(surname)
	})

	test('R.dissoc', () => {
		const updated = R.dissoc('session', state) as State

		expect(state.session).toBe('a1b3c3')
		expect(updated.session).toBe(undefined)
		expect(updated).not.toStrictEqual(state)
	})

	test('R.assocPath', () => {
		const name = 'Ivan'
		const updated = updateOwnerName(name, state) as State

		expect(updated).not.toStrictEqual(state)
		expect(updated.owner.name).toBe(name)
	})

	test('R.evolve', () => {
		const updated = incOwnerAge(state) as State

		expect(updated).not.toStrictEqual(state)
		expect(updated.owner.age).toBe(state.owner.age + 1)
	})
})

describe('Immutable array', () => {
	test('R.insert', () => {
		const updatedIds = R.insert(2, 'c3', state.postIds)

		expect(updatedIds).not.toStrictEqual(state.postIds)
		expect(updatedIds[2]).toBe('c3')
		expect(R.nth(2, updatedIds)).toBe('c3')
	})

	test('R.update', () => {
		const updatedIds = R.update(0, 'a1', state.postIds)

		expect(updatedIds).not.toStrictEqual(state.postIds)
		expect(updatedIds[0]).toBe('a1')
		expect(R.nth(0, updatedIds)).toBe('a1')
	})

	test('R.append and R.prepend', () => {
		const updatedIds = R.pipe(
			R.prepend('z0'),
			R.append('g6')
		)(state.postIds)

		expect(updatedIds).not.toStrictEqual(state.postIds)
		expect(R.head(updatedIds)).toBe('z0')
		expect(R.last(updatedIds)).toBe('g6')
	})

	test('R.remove and R.without', () => {
		expect(R.remove(0, 1, [1, 1, 2, 3])).toEqual([1, 2, 3])
		expect(R.without([1], [1, 1, 2, 3])).toEqual([2, 3])
	})

	test('R.adjust', () => {
		expect(R.adjust(R.multiply(10), 1, [1, 2, 3])).toEqual([1, 20, 3])
	})
})
