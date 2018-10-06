import * as React from 'react'
import * as ReactDOM from 'react-dom'

import App from './components/app'

import './index.css'

const container = document.createElement('div')
document.body.appendChild(container)
container.className = 'root'

ReactDOM.render(<App />, container)
