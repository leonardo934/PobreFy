import style from "./Form.module.css"
import { categories } from "../Category"
import { useState } from "react"

function Form() {

    const [url, setUrl] = useState('')
    const [category, setCategory] = useState('')
    const [videos, setVideos] = useState([])
    const [errors, setErrors] = useState('')


    function valideUrl(url) {
        const regex = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:embed\/|watch\?v=)|youtu\.be\/)([a-zA-Z0-9\-_]+)$/

        if (!regex.test(url) || url.length < 96) {
            setErrors('ERRO: LINK inválida!')
            return false
        } else {
            return url.substring(43, 96)
        }
    }




    function onSave(e) {
        e.preventDefault()
        console.log(url, category)


        // validar url e category
        if (!category || category === '-') {
            setErrors('ERRO: Escolha uma categoria!')
            return
        } else {
            setErrors('')
        }

        //validar URL
        const urlVideo = valideUrl(url)
        if (urlVideo && category) {

            setErrors('ERRO: LINK inválido!')
        } else {

            // guardar a url e o genero
            const newVideo = { url, category }
            setVideos([...videos, newVideo])
            localStorage.setItem('videos', JSON.stringify([...videos, newVideo]))
            // limpar form
            setUrl('')
            setCategory('')
        }



    }
    return (

        <section className={style.container}>
            <h2>Cadastro de Musicas</h2>
            <form onSubmit={onSave}>
                <div>
                    <label>LINK da Musica</label>
                    <input type="text" placeholder="Digite o LINK da musica" required="required" value={url} onChange={e => setUrl(e.target.value)} maxLength="96" minLength="43" />
                </div>
                <div>
                    <label>Gênero Musical</label>

                    <select required="required" value={category} onChange={e => setCategory(e.target.value)}>

                        <option value="-">Selecione um Gênero Musical</option>
                        {categories.map(item => {
                            return <option key={item} value={item}>{item}</option>
                        })}

                    </select>

                </div>
                <div>
                    <button>Cadastrar</button>
                </div>
                <div>
                    {errors}
                </div>
            </form>
        </section>
    )
}

export default Form