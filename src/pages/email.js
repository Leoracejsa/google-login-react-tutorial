import React from 'react'
import { Container, Col, Row } from 'react-bootstrap';
import '../style/style.css';
// import { MdLabel } from 'react-icons/md';
import logo from '../image/logo.svg';
import invasao from '../image/hacker.gif'
import linkurl from '../image/Imagem_link.png'
const Email = () => {
    return(
        <>
        <img className="logo-promo" src={logo} />
        
        <div className="global">
            <Container>
                <Row>
                    <div className="">
                        <p className="corAfya">
                            <br />
                            Olá, Colaborador(a) Unigranrio!
                            <br /><br />
                            Temos novidades! A plataforma da Universidade Corporativa Afya está disponível para você!
                            <br />
                            {/* Clique aqui e confira o recado que o Denis Lopes, Diretor da Unidade, deixou pra gente! */}
                            </p>
                            <br />
                        <br />
                        
                        <br />
                        <h2 className="list-sub"> Clique aqui, para retirar seu brinde </h2>                    
                    </div>
                </Row>              
            </Container>
        </div>
        </>
    )

}

export default Email;