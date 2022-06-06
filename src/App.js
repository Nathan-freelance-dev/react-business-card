import React, { useState } from 'react'
import Layout from './layout/Layout'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.scss'
import { Button } from 'react-bootstrap'
import * as biIcons from 'react-icons/bi'

const App = () => {
	const [theme, setTheme] = useState(true);
	
	const changeTheme = () => setTheme(!theme);

	return (
		<div className={theme ? "app dark" : "app light"}>
			<Button variant="primary" className='theme_button' onClick={changeTheme}>
				{theme ? <biIcons.BiSun /> : <biIcons.BiMoon />}
			</Button>

			<Layout 
				themeChange={theme ? "bg-dark text-light" : "bg-light text-dark"}
			/>
		</div>
	)
}

export default App