import * as React from 'react'
import { Button } from './button'
import * as renderer from 'react-test-renderer'

test('Button component', () => {
	const tree = renderer.create(<Button disabled />)

	expect(tree.toJSON()).toMatchSnapshot()
})
