import { useForm } from 'react-hook-form'
import './style.css'
import * as yup from 'yup'
import api from '../../services/api'
import { toast } from 'react-toastify'
import { yupResolver } from '@hookform/resolvers/yup'
const esquemaDeCadastro = yup.object({
    nome: yup.string().required("O nome é obrigatório").min(3, "O nome deve ter pelo menos 3 caracteres"),
    email: yup.string().email("Formato de email invalido").required("o email é obrigatório"),
    cpf: yup.string().required("O cpf é obrigatório").min(11, "O cpf deve ter pelo menos 11 caracteres"),
    senha: yup.string().min(3, "A senha deve ter pelo menos 3 caracteres").required(" A senha é obrigatória"),
    confirmarSenha: yup.string().oneOf([yup.ref('senha'), null], "As senhas devem ser iguais").required("A confirmação da senha é obrigatório"),
})

export default function CadastroPage() {
    const{
        register: registrarCampo,
        handleSubmit: lidarComEnvioFormulario,
        formState: {errors: errosDoFormulario, isSubmitting: estaEnviando},
        setError: definirErroNoCampo,
        reset: limparCampoDoFormulario,
    } = useForm({
    resolver: yupResolver(esquemaDeCadastro),
    defaultValues:{
        nome: "",
        email: "",
        cpf: "",
        senha: "",
        confirmarSenha: "",
        
    },
    
        
    
})

async function enviarDados(dadosDoFormulario) {
    const dadosApi = {
        nome: dadosDoFormulario.nome,
        email: dadosDoFormulario.email,
        cpf : dadosDoFormulario.cpf,
        senha: dadosDoFormulario.senha,
        
    }

    try{
        const resposta = await api.post("/database", dadosApi)
        toast.success(resposta.data.mensagem || "Cadastro realizado com sucesso!")
        limparCampoDoFormulario()
        }catch (error){
            const codigoDeStatus = error.response?.status;
            const mensagemDoServidor = error.response?.data.mensagem || "Erro ao cadastrar usuario!";
            if(codigoDeStatus === 409){
                let campoErro = "email";
                if (mensagemDoServidor.includes("CPF")) {
                    campoErro = "cpf";
                }
                
                definirErroNoCampo(campoErro, {
                    type: "server",
                    message: mensagemDoServidor,
                });
            }
            toast.error(mensagemDoServidor);
    console.error("Erro ao cadastrar usuario:" , error)
    }
    
}

return(
    <>
    <div className='cadastro-continer'>
        <h1>Cadastro de Usuarios</h1>
        <form noValidate onSubmit={lidarComEnvioFormulario(enviarDados)}>
            <div className='form-group'>
                <label htmlFor="campo-nome">Nome:</label>

            <input type="text" id='campo-nome' placeholder='Ex.: Maria Silva' {...registrarCampo("nome")} />
            </div>
                {errosDoFormulario.nome &&(
                <span className='error'>{errosDoFormulario.nome.message}</span>   
                )}

                <div className='form-group'>
                <label htmlFor="campo-email">Email:</label>

            <input type="email" id='campo-email' placeholder='Ex.: Maria@exemplo' {...registrarCampo("email")} />
            </div>
                {errosDoFormulario.email &&(
                <span className='error'>{errosDoFormulario.email.message}</span>   
                )}

                <div className='form-group'>
                <label htmlFor="campo-cpf">CPF:</label>

            <input type="text" id='campo-cpf' placeholder='Ex.: 999.111.222-22' {...registrarCampo("cpf")} />
            </div>
                {errosDoFormulario.cpf &&(
                <span className='error'>{errosDoFormulario.cpf.message}</span>   
                )}

                <div className='form-group'>
                <label htmlFor="campo-senha">Senha:</label>

            <input type="password" id='campo-senha' placeholder='Ex.: 12345' {...registrarCampo("senha")} />
            </div>
                {errosDoFormulario.senha &&(
                <span className='error'>{errosDoFormulario.senha.message}</span>   
                )}

            <div className='form-group'>
        <label htmlFor="campo-confirmarSenha">ConfirmarSenha:</label>

        <input type="password" id='campo-confirmarSenha' placeholder='Ex.: 12345' {...registrarCampo("confirmarSenha")} />
        </div>
                {errosDoFormulario.confirmarSenha &&(
                <span className='error'>{errosDoFormulario.confirmarSenha.message}</span>   
                )}

                <button type='submit' disabled = {estaEnviando}>{estaEnviando ? "Cadastrando..." : "Cadastrar"}

                </button>
            </form>
        </div>
    </>
)}