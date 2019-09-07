import React from 'react';
import { isTSEnumMember } from '@babel/types';

class Inicio extends React.Component {
    state = {
        posts: []
    };

    componentDidMount() {
        this.list();

    }


    list() {
        fetch('http://localhost:8080/rest/upvote/', {
            method: "GET",
            headers: {
                "access-control-allow-origin": "*",
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(res => res.json())
            .then(res => {
                this.setState({
                    posts: res
                });
            });
    }

    like(id) {
        fetch('http://localhost:8080/rest/upvote/like/' + id, {
            method: "PUT",
            headers: {
                "access-control-allow-origin": "*"
            }
        })
            .then(res => res.json())
            .then(res => {
                console.log(res);
                if (res){
                    this.list();
                }
            });
    }

    render() {
        return (
            <div className='container'>
                <h1>Lista de Posts</h1>

                <ul className="list-group">
                    {this.state.posts.map(item => (
                        <li className="list-group-item" key={item.id}>
                            <div className="card">
                                <div className="card-body">
                                    <p><b>Titulo:</b> {item.title}</p>
                                    <p><b>Descrição:</b> {item.description}</p>
                                    <p>
                                        <button type="button" className="btn btn-primary" value={item.id} onClick={() => this.like(item.id)}>{isTSEnumMember.id}>
                                            <span className="glyphicon glyphicon glyphicon-thumbs-up" aria-hidden="true" /> Votar
                                        </button>
                                        &nbsp;Votos: {item.upVotes}
                                    </p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>


            </div>
        );
    }
}

export default Inicio;