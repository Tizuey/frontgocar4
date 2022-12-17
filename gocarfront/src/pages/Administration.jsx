import { useFormik } from 'formik';

import "../styles/Administration.css"

// import Imagecar from "../components/ImageS3/UploadImageToS3WithReactS3";

function Administration() {

    const validate = values => {
        const errors = {}

        if(!values.nome){
            errors.nome = "Obrigatório"
        }

        if(!values.category){
            errors.category = "Obrigatório"
        }

        if(!values.address){
            errors.address = "Obrigatório"
        }

        if(!values.city){
            errors.city = "Obrigatório"
        }

        if(!values.description){
            errors.description = "Obrigatório"
        }

        if(!values.features){
            errors.features = "Obrigatório"
        }

        return errors;

    }

    const formik = useFormik({
        initialValues: {
            nome: "",
            category: "",
            address: "",
            city: "",
            description: "",
            features: [],
            images:[]
        },
        validate,
        onSubmit: values => {

    fetch(`https://gocarback.ctdprojetos.com.br/products`, {
        method: "POST",
        headers: {
          Accept: "*/* , application/json, text/plain ",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome: `${values.nome}`,
          description: `${values.description}`,
          features: `${values.features}`,
          images: `${values.images}`,
          category: `${values.category}`,
          city: `${values.city}`,
          booking: [],
        }),
      }).then((res) => {
        if (!res.ok) {
          throw Error(res.statusText);
        } else {
          setTimeout(() => {
            (window.location.href = "/cadastro");
          }, 0);
        }
      });







        }
    })

    return (
        <>

            <div className="body">
                <h1>Admin</h1>

                 <form encType="multipart/form-data" className="form" onSubmit={formik.handleSubmit}>
                    <h3>Criar Produto</h3>

                    <div className="primary_infos">

                        <div className="input_container">
                            <label htmlFor="nome">Nome do Produto</label>
                            {formik.touched.nome && formik.errors.nome ? (
                                <>
                                    <input
                                        className="input_error"
                                        name="nome"
                                        type="text"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.nome} />

                                    <div className="error_message">{formik.errors.nome}</div>
                                </>
                            ) :
                                <input
                                    id="nome"
                                    name="nome"
                                    type="text"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.nome} />
                            }
                        </div>

                        <div className="input_container">
                            <label htmlFor="category">Categoria</label>

                            {formik.touched.category && formik.errors.category ? (
                                <>
                                    <input
                                        className="input_error"
                                        name="category"
                                        type="select"
                                        list="categories"
                                        placeholder="Categoria"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.category}
                                    />

                                    <div className="error_message">{formik.errors.category}</div>
                                </>
                            ) :
                                <input
                                    id="category"
                                    name="category"
                                    type="select"
                                    list="categories"
                                    placeholder="Categoria"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.category}
                                />
                            }
                        </div>

                        <div className="input_container">
                            <label htmlFor="address">Endereço</label>
                            {formik.touched.address && formik.errors.address ? (
                                <>
                                    <input
                                        className="input_error"
                                        name="address"
                                        type="text"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.address} />

                                    <div className="error_message">{formik.errors.address}</div>
                                </>
                            ) :
                                <input
                                    id="address"
                                    name="address"
                                    type="text"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.address} />
                            }
                        </div >

                        <div className="input_container">
                            <label htmlFor="city">Cidade</label>

                            {formik.touched.city && formik.errors.city ? (
                                <>
                                    <input
                                        className="input_error"
                                        name="city"
                                        type="select"
                                        list="cities"
                                        placeholder="Cidade"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.city}
                                    />

                                    <div className="error_message">{formik.errors.city}</div>
                                </>
                            ) : <input
                                name="city"
                                type="select"
                                list="cities"
                                placeholder="Cidade"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.city}
                            />}
                        </div>

                    </div>

                    <div className="description_text_area">
                        <label htmlFor="description"> <h4>Descrição</h4> </label>
                        {formik.touched.description && formik.errors.description ? (

                            <>
                                <textarea
                                    className="text_error"
                                    name="description"
                                    id="description"
                                    cols="150"
                                    rows="8"
                                    placeholder="Escreva aqui"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.city}>
                                </textarea>

                                <div className="error_message">{formik.errors.description}</div>
                            </>
                        ) :
                            <textarea
                                className="text_area"
                                name="description"
                                id="description"
                                cols="150"
                                rows="8"
                                placeholder="Escreva aqui"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.city}>
                            </textarea>}
                    </div>


                    <div className="product_atributes_container">
                        <h3>Adicionar Atributos</h3>
                        <div className="atributes_container">
                            <div className="input_atribute_container">
                                <label htmlFor="features">Direção Hidraulica</label>
                                <input
                                    id="features"
                                    name="features"
                                    type="checkbox"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value="Direção Hidraulica" />
                            </div>

                            <div className="input_atribute_container">
                                <label htmlFor="features">Ar-Condicionado</label>
                                <input id="features1" name="features" type="checkbox" value={"Ar-Condicionado"} />
                            </div>

                            <div className="input_atribute_container">
                                <label htmlFor="features">4 Portas</label>
                                <input id="features2" name="features" type="checkbox" value={"4 Portas"} />
                            </div>

                            <div className="input_atribute_container">
                                <label htmlFor="features">Blindagem</label>
                                <input id="features3" name="features" type="checkbox" value={"Blindagem"} />
                            </div>

                            <div className="input_atribute_container">
                                <label htmlFor="features">ABS</label>
                                <input id="features4" name="features" type="checkbox" value={"ABS"} />
                            </div>

                            <div className="input_atribute_container">
                                <label htmlFor="features">Direção Hidraulica</label>
                                <input id="features5" name="features" type="checkbox" value={"Direção Hidraulica"} />
                            </div>

                            {formik.touched.features && formik.errors.features ? (
                                console.log("não adicionou feature")

                            ) : null}

                        </div>

                    </div>


                    <div className="polices_input">
                        <h3>Politicas de locação padrão</h3>
                        <div className="container">
                            <div className="police_container">
                                <h4>Idade Mínima</h4>
                                <div className="police_description"> 
                                    <p>O locatário/condutor deverá possuir idade mínima de 21 anos.</p>
                                </div>
                            </div>
                            <div className="police_container">
                                <h4>Seguro</h4>
                                <div className="police_description">
                                    <p>O locatário/condutor deverá pagar um taxa de seguro, no qual será entregue se não houver nenhum acidente.</p>
                                </div>
                            </div>
                            <div className="police_container">
                                <h4>Carteira de Habilitação Nacional (CNH)</h4>
                                <div className="police_description">
                                   <p>O locatário deverá apresentar seu documento de habilitação original, emitido há mais de 2 anos (CNH Definitiva), válido e dentro do prazo de vencimento.</p>
                                </div>
                            </div>
                            <div className="police_container">
                                <h4>Desistência</h4>
                                <div className="police_description">
                                   <p>Dois dias antes da data de entrega do carro, será hratuito o cancelamento, menos que isso será cobrada um taxa de cancelamento de 5% do valor.</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="images">
                        <h3>Carregar Imagens</h3>
                        <h9>COLOQUE AS URLS DAS IMAGENS</h9>
                        <div className="image_input_container">
                            <input type="text" name="imagem" id="1"/>
                            <input type="text" name="imagem" id="2"/>
                            <input type="text" name="imagem" id="3"/>
                            <input type="text" name="imagem" id="4"/>
                            <input type="text" name="imagem" id="5"/>
                            <input type="text" name="imagem" id="6"/>
                        </div>
                    </div>

                    


                    <datalist id="cities">
                        <option value="Sorocaba" id="1">Sorocaba</option>
                        <option value="Campinas" id="2">Campinas</option>
                        <option value="São Paulo" id="3">São Paulo</option>
                        <option value="Recife" id="4">Recife</option>
                        <option value="Salvador" id="5">Salvador</option>
                    </datalist>

                    <datalist id="categories">
                        <option value="Esportivos" id="1">Esportivos</option>
                        <option value="Elétricos" id="2">Elétricos</option>
                        <option value="Luxo" id="3">Luxo</option>
                        <option value="SUV" id="4">SUV</option>
                    </datalist>


                    <button className="btn_send" type="submit">Criar</button>

                </form> 

            </div >
        </>
    )

}

export default Administration