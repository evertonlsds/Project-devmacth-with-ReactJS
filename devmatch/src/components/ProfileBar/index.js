import './styles.css';
import { useState } from 'react';
import ProfileIcon from '../../assets/profile-icon.svg';
import CloseIcon from '../../assets/close-icon.svg';
import{ useHistory, useLocation} from 'react-router-dom';


function ProfileBar() {
    const [open, setOpen] = useState(false)
    return(
        <div>
            <img className="icon" src={open ? CloseIcon : ProfileIcon} alt="icon"/>
        </div>

    )
};



export default ProfileBar;