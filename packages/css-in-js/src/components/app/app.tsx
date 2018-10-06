/* tslint:disable:no-unused-variable */

import * as React from 'react'
import * as css from './app.jss'

export default class App extends React.Component<{}, {}> {
	render() {
		return (
			<div className={css.app}>
				<header className={css.header}>Hey!</header>
				<section>How is it going?</section>
			</div>
		)
	}
}
