import * as React from 'react'
import { block } from 'bem-cn'

const b = block('button')

export interface ButtonProps {
	disabled?: boolean
}

export class Button extends React.Component<ButtonProps, {}> {
	render() {
		const { disabled, children } = this.props

		return (
			<button className={b({ disabled }).toString()} disabled={disabled}>
				{children}
			</button>
		)
	}
}
