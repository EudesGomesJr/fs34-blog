import { useState } from 'react';

export default function NewPost() {

    const [title , setTitle ] = useState('');
    const [content , setContent ] = useState('');
    const [slug , setSlug ] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const options = {
            method: "POST",
            body: JSON.stringify({
                /* O JS entende como title: title*/
                title,
                /* O JS entende como slug: slug*/
                slug,
                /* O JS entende como content: content*/
                content
            })
        }

        let response = await fetch('http://localhost:3000/posts', options);
        let dados = await response.json();

        console.log(dados);
      }

      const handleTitle = (event) => {
        let inputValue = event.target.value;
        setTitle(inputValue);
        setSlug(inputValue.replaceAll(' ','-').toLowerCase());
      }

    return (
        <div className='dark:bg-slate-800 h-screen'>
            <form action="" className="max-w-96 m-auto dark:bg-slate-800 dark:text-white dark:border-b"
                onSubmit={handleSubmit}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="">Título</label>
                    <input type="text" className="border w-full" value={title}
                           onChange={handleTitle}/>
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="">Slug</label>
                    <input type="text" className="border w-full" value={slug}
                           onChange={(event) => setSlug(event.target.value)}/>
                </div>
                
                <div className="flex flex-col gap-2">
                    <label htmlFor="">Conteúdo</label>
                    <textarea className="border w-full" 
                              onChange={(event) => setContent(event.target.value)}></textarea>
                </div>
                <div>
                    <button className="w-full bg-black text-white mt-5">Criar novo post</button>
                </div>
            </form>
        </div>
    )
}