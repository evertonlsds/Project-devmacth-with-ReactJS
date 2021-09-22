import './styles.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';


function InputPassword () {
    const [showPassword, setShowPassword] = useState(false)

    return(
        <div className="flex-column input-password">
            <label htmlFor="password">Senha</label>
            <input id="password" type={showPassword ? 'text' : 'password'} placeholder="Digite sua senha"/>
            <FontAwesomeIcon 
              icon={showPassword ? faEye : faEyeSlash} 
              className= "eye-password" 
              onClick={() => setShowPassword(!showPassword)}
              size='lg'  
             />
        </div> 
    )
}


export default InputPassword;