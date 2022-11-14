import { StyledRegisterVideo } from "./styles";
import React from "react";
import { createClient } from '@supabase/supabase-js';

function getThumbnail(url) { return `https://img.youtube.com/vi/${url.split("=v")[1]}/hqdefault.jpg` }

function useForm(propsDoForm) {
    const [values, setValues] = React.useState( propsDoForm.initialValues );

    return {
        values,
        handleChange: (evento) => {   
            const value = evento.target.value;
            const name = evento.target.name;
            setValues({
                ...values, 
                [name]: value,
            })
        },
        clearForm() {
            setValues({})
        }
    }
}

const PROJECT_URL = 'https://lzfgtyzqzzrfocwmtiew.supabase.co'
const PUBLIC_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx6Zmd0eXpxenpyZm9jd210aWV3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgzNzE2NjcsImV4cCI6MTk4Mzk0NzY2N30.imydmimEWaxqM03LR5_bNCZ6mbLDdIcWWdqin_18VGs'
const supabase = createClient(PROJECT_URL, PUBLIC_KEY)


export default function RegisterVideo() {
    const [formVisivel, setFormVisivel] = React.useState(false)
    const formCadastro = useForm({
        initialValues: { titulo: "Forst Punk", url: "https://www.youtube.com/watch?v=gGHZHDJ2URY"}
    })

    return (
        <StyledRegisterVideo>
            <button type="button " className="add-video" onClick={() => setFormVisivel(true)}>
                +
            </button>
            {formVisivel ?
                (
                <form onSubmit={ (evento) => {
                    evento.preventDefault()
                    supabase.from("video").insert({
                        title: formCadastro.values.title,
                        url: formCadastro.values.url,
                        thumb: getThumbnail(formCadastro.values.url),
                        playlist: "jogos"
                    })
                    .then((oqueveio) => {
                        console.log(oqueveio)
                    })
                    .catch((err) =>{
                        console.log(err)
                    })

                    setFormVisivel(false)
                    formCadastro.clearForm()
                }} >
                    <div>
                        <button className="close-modal" onClick={() => setFormVisivel(false)} >
                            x
                        </button>
                        <input 
                            name="titulo"
                            placeholder="Titulo do video "  
                            value={ formCadastro.values.titulo } 
                            onChange={formCadastro.handleChange} 
                        />
                        <input 
                            name="url"
                            placeholder="URL"  
                            value={ formCadastro.values.url } 
                            onChange={formCadastro.handleChange} 
                        />    
                        <button type="submit">
                            cadastrar
                        </button>
                    </div>
                </form>
                ) :
                null
        }
        </StyledRegisterVideo>
    )
}