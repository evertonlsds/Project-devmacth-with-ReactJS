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
            <Switch>
                <Route path="/" exact component={ Main } />
                <Route path="/signIn"  component={ SignIn } />
                <Route path="/signUp"  component={ SignUp } />
            </Switch>
        </Router>
    )
}

export default Routes;

