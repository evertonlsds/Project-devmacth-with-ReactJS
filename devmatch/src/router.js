import { 
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';


import Main from './pages/Main';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';


function Routes(){
    return (
        <Router>
            <Switch></Switch>
        </Router>
    )
}

export default Routes;

