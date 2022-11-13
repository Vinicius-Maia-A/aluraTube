import { StyledRegisterVideo } from "./styles";
import React from "react";

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

export default function RegisterVideo() {
    const [formVisivel, setFormVisivel] = React.useState(false)
    const formCadastro = useForm({
        initialValues: { titulo: "Forst Punk", url: "https://... "}
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