import './styles.css'
import '../../styles/form.css'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import AllRightReserved from '../../components/AllRigthReserved';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';


function SignIn() {
    const [showPassword, setShowPassword] = useState(false)
    return (
        <div className = "container-form">
            <form className=" form form-sign-in">
               <div className= "text-center mb-lg">
                   <h1>Entrar</h1>
                   <Link to="/sign-up">Cadastre-se</Link>
                </div>
                <div>
                <div className="flex-column ">
                       <label htmlFor="email">E-mail</label>
                       <input id="email" type="text" placeholder="Digite seu e-mail"/>
                   </div>
                   
                   <div className="flex-column input-password">
                       <label htmlFor="password">Senha</label>
                       <input id="password" type={showPassword ? 'text' : 'password'} placeholder="Digite sua senha"/>
                       <FontAwesomeIcon 
                       icon={showPassword ? faEye : faEyeSlash} 
                       className= "eye-password" 
                       onClick={() => setShowPassword(!showPassword)}
                       size='lg'  />
                   </div>

                   <button className="btn-dark-blue">Entrar</button>
                   <div className="flex-row items-center">
                      <input type="checkbox" value="Lembrar-me" name="remember"/> 
                      <span htmlFor="remember">Lembrar-me</span>
                   </div>
                </div>
                <Link to="/recovery-password" className="my-lg">Esqueceu sua senha?</Link> 
                <AllRightReserved/>
            </form>
        </div>
    )

}


export default SignIn;