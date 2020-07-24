import React from 'react'

import { Link } from 'react-router-dom'

import logo from './logo.svg'
import './App.css'


import { ExampleComponent, Ankur } from 'growlvaz007'
import 'growlvaz007/dist/index.css'
import { useGrowl, Growl } from './growl'

const App = () => {
  const [active, setActive] = useGrowl()

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<Link className="App-link" to="/other">
					Go to the Other component
        		</Link>
				<p>
					Edit <code>src/App.js</code> and save to reload.
        		</p>

				<a className="App-link" href="#" onClick={() => void setActive(true)}>
					Clik here to activate the growl
        		</a>
			</header>
			<Growl onDismissed={() => setActive(false)} active={active} message="Hello World!" />
		</div>
  )
}

export default App
