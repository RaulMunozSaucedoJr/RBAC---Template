import { Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Home, NotFound, Projects, Services, Contact, Login, SignUp, RecoverPassword, Dashboard } from '@indexPages'
import * as PublicRouting from '@publicRoute'
import * as PrivateRouting from '@privateRoute'
import * as ErrorRouting from '@errorRoute'
const App = () => {
	return (
		<div className='App'>
			<>
				<Routes>
					<Route path={ErrorRouting.NotFound} element={<NotFound />} />
					<Route path={PublicRouting.Home} element={<Home />} />
					<Route path={PublicRouting.Projects} element={<Projects />} />
					<Route path={PublicRouting.Services} element={<Services />} />
					<Route path={PublicRouting.Contact} element={<Contact />} />
					<Route path={PublicRouting.Login} element={<Login />} />
					<Route path={PublicRouting.SignUp} element={<SignUp />} />
					<Route path={PublicRouting.RecoverPassword} element={<RecoverPassword />} />
					<Route path={PrivateRouting.Dashboard} element={<Dashboard />} />
				</Routes>
			</>
		</div>
	)
}

export default App
