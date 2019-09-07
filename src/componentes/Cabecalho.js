import React from 'react'
import { Link } from 'react-router-dom'

const Cabecalho = props => {
    return (
        <div>
            <div className='jumbotron text-center'>
                <h1>UpVote</h1>
                <p>Vote no Post de seu interesse</p>
            </div>

            <nav className='navbar navbar-default navbar-fixed-top'>
                <div className='container'>
                    <div className='navbar-header'>
                        <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='#myNavbar'>
                            <span className='icon-bar'></span>
                            <span className='icon-bar'></span>
                            <span className='icon-bar'></span>
                        </button>
                        <Link className='navbar-brand' to='/'>UpVote</Link>
                    </div>
                    <div className='collapse navbar-collapse' id='myNavbar'>
                        <ul className='nav navbar-nav navbar-right'>
                            <li><Link to='/'>INICIO</Link></li>
                            <li><Link to='/cadastro'>CADASTRAR</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>            
        </div>
    )
}

export default Cabecalho