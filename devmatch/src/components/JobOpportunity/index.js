import './styles.css';


function JobOpportunity({
    img_url,
    name,
    description,
    requirements,
    seniority,
    salary,
    benefits
}){
    return(
        <div className="container-job-opportunity">
            <img src="https://logodownload.org/wp-content/uploads/2014/09/google-logo-1-1.png" alt="logo" className="logo"/>
            <h2>google</h2>
            <div className="details">
                <strong>Descrição</strong>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et pellentesque risus tempor blandit. Eu nibh et at dignissim diam, donec adipiscing. Suspendisse imperdiet mauris in enim diam, tortor id aliquet sagittis. Aliquam arcu, et proin phasellus porta aliquet suscipit. Sed nunc, nam sem placerat aliquam vitae vel hendrerit ullamcorper. Vel faucibus quisque diam pulvinar quam. Neque nibh est tellus lacus malesuada egestas volutpat sit vitae. Nunc mollis pellentesque netus sollicitudin id egestas convallis. Posuere tellus amet ultricies arcu commodo vitae in in. Sed bibendum enim at ut condimentum pulvinar vulputate suspendisse diam. Porta tempus ornare ac nulla tristique eleifend libero cursus. Pellentesque felis ornare gravida viverra cursus eget curabitur feugiat. Urna, velit ornare vitae facilisi egestas est. Amet nibh porttitor scelerisque felis felis enim. Id pellentesque ut porta nec sed a, cursus. Platea sem odio ornare ut varius fermentum, facilisis id. A, amet ut sit eu nisl. Mattis molestie urna lacus aliquet tempus semper a sapien. Eget aliquet risus commodo, nulla tellus. Sem et in in diam enim, nunc erat egestas leo. Enim id ultrices platea habitant quis egestas. Duis gravida quam molestie.</p>
            </div>
            <div className="details">
                <strong>Requisitos</strong>
                <div className="flex-row">
                    <div className="badge-blue">
                        texto
                    </div>
                </div>
            </div>
            <div className="details">
                <strong>Senioridade</strong>
                <span>Pleno</span>
            </div>
            <div className="details">
                <strong>Salário / Benefícios</strong>
                <span>R$ 5.200,00 / VT, VA, Plano de saúde, Gympass, Auxílio Home Office</span>
            </div>
            
        </div>
    )
}

export default JobOpportunity;