import { useState } from 'react';
import { createUser } from '../services/UserService';
import Swal from "sweetalert2";

export default function NewUser() {

    const [name , setName ] = useState('');
    const [email , setEmail ] = useState('');
    const [password , setpassword ] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        let result = await createUser({name, email, password});
        console.log(result);
        let msg={
            title: "Erro ao cadastrar usuário",
            icon: "error"
        };

        if(result?.id) {
            msg.title="Usuário cadastrado com sucesso"
            msg.icon="success"
        }
        Swal.fire (msg);
        // const options = {
        //     method: "POST",
        //     body: JSON.stringify({
        //         name,
        //         email,
        //         password
        //     })
        //}

        // let response = await fetch('http://localhost:3000/users', options);
        // let dados = await response.json();

        // console.log(dados);
       }

    return (
        <div className='dark:bg-slate-800 h-screen'>
            <form action="" className="max-w-96 m-auto dark:bg-slate-800 dark:text-white dark:border-b"
                onSubmit={handleSubmit}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="">Nome</label>
                    <input type="text" className="border w-full" 
                            value={name}
                            onChange={(event) => setName(event.target.value)}/>
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="">Email</label>
                    <input type="text" className="border w-full" 
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}/>
                </div>
                
                <div className="flex flex-col gap-2">
                    <label htmlFor="">Senha</label>
                    <input type='password' className="border w-full" 
                            value={password}
                            onChange={(event) => setpassword(event.target.value)}/>
                </div>
                <div>
                    <button className="w-full bg-black text-white mt-5">Criar conta</button>
                </div>
            </form>
        </div>
    )
}