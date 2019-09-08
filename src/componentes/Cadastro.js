import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Cadastro extends Component {

    constructor(props) {
        super(props)
        this.gravaPost = this.gravaPost.bind(this)
        this.state = { showSuccess: false, showError: false };
    }

    gravaPost(e) {
        console.log("gravaPost - 1");
        this.state.showError = false;
        this.state.showSuccess = false;


        const postObj = {
            title: this.title.value,
            description: this.description.value,
            upVotes: 0

        }

        if (postObj.title == "") {
            this.state.showError = true;
        } else if (postObj.description == "") {
            this.state.showError = true;
        }

        if (this.state.showError) {
            this.setState(state => ({
                showError: true
            }));
        } else {
            console.log("Erro: " + this.state.showError);

            fetch('http://localhost:8080/rest/upvote/', {
                method: "POST",
                headers: {
                    "access-control-allow-origin": "*",
                    "Content-type": "application/json; charset=UTF-8"
                },
                body: JSON.stringify(postObj)
            })
                .then(res => res.json())
                .then(res => {
                    console.log(res);
                    this.setState(state => ({
                        showSuccess: !state.showWarning
                    }));
                });

            console.log(postObj);
            
        }

        e.preventDefault();
    }


    render() {

        return (
            <div className='container'>

                {this.state.showSuccess ?
                    (
                        <div>
                            <div className="alert alert-success" role="alert">
                                Postado com sucesso
                            </div>
                            <Link to='/'>
                                <button className="btn btn-primary">INICIO</button>
                            </Link>
                        </div>
                    ) :
                    (
                        <div>
                            <h1>Cadastrar novo Post</h1>
                            {this.state.showError ?
                                <div className="alert alert-danger" role="alert">Todos os campos são obrigatórios!</div>
                                : null}

                            <form onSubmit={this.gravaPost}>
                                <div className="form-group">
                                    <label htmlFor="title">Título</label>
                                    <input type="text" className="form-control" id="title" placeholder="Titulo" ref={(ref) => this.title = ref} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="descricao">Descrição</label>
                                    <textarea className="form-control" id="descricao" rows="3" ref={(ref) => this.description = ref} />
                                </div>
                                <button type="submit" className="btn btn-primary">Salvar</button>
                            </form>
                        </div>
                    )
                }

            </div>
        )
    }

}

export default Cadastro