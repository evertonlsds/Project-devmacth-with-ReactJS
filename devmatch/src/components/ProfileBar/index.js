import './styles.css';
import { useState } from 'react';
import ProfileIcon from '../../assets/profile-icon.svg';
import CloseIcon from '../../assets/close-icon.svg';
import{ useHistory, useLocation} from 'react-router-dom';


function ProfileBar() {
    const [open, setOpen] = useState(false)
    const location = useLocation();
    const history = useHistory()

    function handleOpenProfilePage(){
        if(location.pathname === '/profile'){
            history.push('/')
            return
        }
        history.push('/profile')
    }

    return(
        <div>
            <img 
            className="icon" 
            src={open ? CloseIcon : ProfileIcon} 
            alt="icon"
            onClick={() => handleOpenProfilePage()}
            />
        </div>

    )
};



export default ProfileBar;