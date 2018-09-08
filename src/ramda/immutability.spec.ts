import * as R from 'ramda'

interface Owner {
	name: string
	surname: string
	age: number
}

interface State {
	owner: Owner
}

const owner: Owner = {
	name: 'Evan',
	surname: 'Ifremov',
	age: 35
}
const state: State = {
	owner
}

const updateSurname = R.assoc('surname')
const updateOwnerName = R.assocPath(['owner', 'name'])
const incOwnerAge = R.evolve({ owner: { age: R.inc } })

test('R.assoc', () => {
	const surname = 'Efremov'
	const updatedOwner = updateSurname(surname, owner)

	expect(updatedOwner).not.toStrictEqual(owner)
	expect(updatedOwner.surname).toBe(surname)
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
