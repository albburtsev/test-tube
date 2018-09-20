import { lens, lensPath, lensProp, prop, assoc, view, set } from 'ramda'

test('R.lens', () => {
	const nameLens = lens(prop('name'), assoc('name'))
	const getName = view(nameLens)
	const setName = set(nameLens)

	const user = {
		name: 'Bob',
		surname: 'Doe'
	}

	expect(getName(user)).toBe('Bob')
	expect(setName('John', user).name).toBe('John')
})

test('R.lensPath and R.lensProp', () => {
	const propLens = (prop: string) => lensPath(['properties', prop])
	const relLens = (rel: string) => lensPath(['relations', rel])

	interface User {
		id: number
		name: string
		surname?: string
		properties?: {
			age?: number
		}
		relations?: {
			spouse?: User
		}
	}

	const user = {
		id: 1,
		name: 'Bob',
		properties: {
			age: 33
		},
		relations: {
			spouse: {
				id: 2,
				name: 'Jinny'
			}
		}
	}

	const User = {
		getName: view<User, string>(lensProp('name')),
		setName: set(lensProp('name')),
		getSurname: view<User, string>(lensProp('surname')),
		setSurname: set(lensProp('surname')),
		getAge: view<User, number>(propLens('age')),
		setAge: set(propLens('age')),
		getSpouse: view<User, User>(relLens('spouse')),
		setSpouse: set(relLens('spouse'))
	}

	expect(User.getName(user)).toBe('Bob')
	expect(User.getAge(user)).toBe(33)
	expect(User.getSpouse(user).id).toBe(2)
	expect(User.getSurname(user)).toBeUndefined()

	expect(User.setName('John', user).name).toBe('John')
})
