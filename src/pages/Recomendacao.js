import React from 'react'
import { Container, Col, Row } from 'react-bootstrap';
import '../style/style.css';
// import { MdLabel } from 'react-icons/md';
import logo from '../image/logo.jpg';
import invasao from '../image/hacker.gif'
import linkurl from '../image/Imagem_link.png'
const Promo = () => {
    return(
        <>
        <img className="logo-promo" src={logo} />
        
        <div className="global">
            <Container>
                <Row>
                    <img className="invasao" src={invasao} />
                    <div className="promo">
                        <p className="title"><span className="textoMenor">VOCÊ NÃO FOI</span> HACKEADO!</p>
                        <br />
                        <p>Este foi um teste de PHISHING realizado pela área de Governança da DTI.<br /> Se fosse um ataque real, seus dados pessoais e os dados da Universidade estariam vulneráveis.</p>
                        <br />
                        <br />
                        <p className="destaqueAtencao">SE VOCÊ ABRIU ESTA PÁGINA, LEIA O TEXTO ABAIXO COM A MÁXIMA ATENÇÃO</p>
                        <br />
                        
                        <br />
                        <h2 className="list-sub">Recomendações:</h2>                    
                    </div>
                </Row>
                <Row>
                    <Col>
                        <ul className="">
                            <h4 className="list-title">Desconfie sempre!</h4>
                            <li>Preste atenção aos remetentes e tenha certeza que eles são conhecidos e confiáveis. Estes são os primeiros passos para atestar a 
                                legitimidade de uma mensagem. Recomendamos não clicar em links ou abrir anexos que cheguem por e-mail ou sistemas de mensagens, sem 
                                ter a certeza de que o remetente é confiável.</li>
                            <br/>
                            <li>Atenção para tratamentos genéricos, com mensagens que comecem com “Sr.”, “Sra.”, “Prezado” ou mensagens em nome de uma pessoa ou 
                                empresa, mas que cheguem de endereços de e-mail desconhecidos ou que não correspondam às mesmas. 
                                <br /><br />
                                Ex.: Mensagens enviadas pela Unigranrio, possuem a extensão <b className="destaqueAtencao">@unigranrio.com.br.</b>, asim como os da AFYA, são enviados com a 
                                extensão <b className="destaqueAtencao">@afya.com.br</b>. Utilize esta mesma lógica para qualquer outro email externo e na dúvida, envie 
                                à DTI para averiguação e comunique ao seu gestor.</li>
                            <br />
                            <li>
                                Links de sites ou emails normalmente exibem a origem, com o endereço real. Abaixo observamos um exemplo de como garantir que o link que 
                                está sendo acessado tem um destino confiável.
                            </li>
                            <br />
                            <img className="imagemUrl" src={linkurl} />    
                            <br/>
                            <br />
                            <h4 className="list-title">Evite preencher cadastros ou enviar informações pessoais</h4>
                            <li>O preenchimento de cadastros ou solicitações de envio de informações, somente devem ser realizados quanto se tem a certeza de que 
                                o contato é legítimo.</li>
                            <br/>
                            <li>Nomes de empresas e até a aparência de sites e comunicações oficiais são utilizados frequentemete, para dar aparência de legitimidade
                                a ações desta categoria. Novamente, valem as dicas de prestar atenção a remetentes de e-mails e desconfiar de pedidos enviados por 
                                mensageiros instantâneos, já que muitas companhias simplesmente não atuam dessa forma. Empresas que prezam pela segurança dos dados
                                nunca solicitam envio de informações sensíveis por e-mail, WhatsApp ou outros sistemas assim, a não ser que a origem do contato seja 
                                do próprio usuário.</li>
                            <br/>
                            <br/>
                            <h4 className="list-title">Cuidado com textos sensacionalistas e ofertas que lhe deixem animados</h4>
                            <li>Temas como as vacinas para o coronavírus, informações alarmistas sobre o processo eleitoral ou revelações bombásticas sobre celebridades 
                                e políticos, costumam ser armas comuns dos hackers em tentativas de phishing. O ideal, ao invés de clicar em links de supostas notícias ou 
                                até repassar informações desse tipo, seria checar se a informação reportada é verídica, por meio de sites renomados ou perfis oficiais.</li>
                            <br/>
                            <li>Ofertas incríveis, entregas de itens gratuitos, prêmios, benefícios ou produtos com preços muito abaixo do normal, também costumam ser 
                                armadilhas para o roubo de dados pessoais ou informações bancárias.</li>
                            <br/>
                            <li>Desconfie se receber propostas de venda de produtos em evidência, com valores muito abaixo do praticado por lojas varejistas ou lojas oficiais
                                Não existe iPhone 12 por R$ 1.000 ou Playstation 5 por R$ 500,00.</li>
                            <br/>
                            <br/>
                            <h4 className="list-title">Procure utilizar autenticação em duas etapas e utilize senhas variadas</h4>
                            <li>A autenticação em duas etapas adiciona uma senha a mais, além da original, que deve ser conhecida apenas pelo usuário e impede que terceiros 
                                acessem a partir das credenciais originais.</li>
                            <br/>
                            <li>A maioria dos serviços online conta com recursos de proteção desse tipo, desde redes sociais como o Facebook ou Twitter até mensageiros como 
                                o WhatsApp e o Telegram, além de sites, e-commerces, bancos e demais plataformas.</li>
                            <br/>
                            <li>Pesquise sobre configurações de segurança para cada um deles, para ativar a senha adicional.</li>
                            <br/>
                            <br />
                            <h4 className="list-title">Verifique se possui softwares de segurança e antivírus</h4>
                            <li>Estas aplicações devem ser mantidas sempre ativas e atualizadas. São essenciais, pois adicionam um nível básico de proteção. Tais soluções 
                                também podem dar alertas ao usuário no acesso à páginas fraudulentas.</li>
                            <br/>
                            <br/>
                            <br/>
                            <p className="destaqueAtencao"><b>OBRIGADO E NÃO ESPERAMOS VÊ-LO NOVAMENTE!</b></p>
                            <br/>
                        </ul>
                    </Col>
                </Row>
                
            </Container>
        </div>
        </>
    )

}

export default Promo;