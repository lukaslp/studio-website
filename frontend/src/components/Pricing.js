import React from 'react'
import { Link } from 'react-router-dom';
import { FaFire } from 'react-icons/fa'
import { Button } from './Button'
import { BsXDiamondFill } from 'react-icons/bs'
import { GiCrystalize } from 'react-icons/gi'
import { IconContext} from 'react-icons/lib'
import './Pricing.css'

function Pricing() {
    return (
        <IconContext.Provider value={{color: '#fff', size: 64}}>
            <div>
                <div className="pricing__section">
                    <div className="pricing__wrapper">
                        <h1 className="pricing__heading">
                            Aluguel do espaço e equipamentos
                        </h1>
                        <div className="pricing__container">
                            <Link to="/sign-up" className="pricing__container-card">
                                <div className="pricing__container-cardInfo">
                                    <div className="icon">
                                        <FaFire />
                                    </div>
                                    <h3>Hora avulsa</h3>
                                    <h4>R$ 120,00</h4>
                                    <p>por hora</p>
                                    <ul className="pricing__container-features">
                                        <li>50 minutos de uso</li>
                                        <li>5 minutos de instalação</li>
                                        <li>5 minutos de teste</li>
                                    </ul>
                                    <Button buttonSize='btn--wide' buttonColor='primary'>
                                        Liga nós
                                    </Button>
                                </div>
                            </Link>
                            <Link to="/sign-up" className="pricing__container-card">
                                <div className="pricing__container-cardInfo">
                                    <div className="icon">
                                        <BsXDiamondFill />
                                    </div>
                                    <h3>Pacote mensal</h3>
                                    <h4>R$ 400,00</h4>
                                    <p>por mês</p>
                                    <ul className="pricing__container-features">
                                        <li>4 horas no mês</li>
                                        <li>Espaçadas como quiser</li>
                                    </ul>
                                    <Button buttonSize='btn--wide' buttonColor='green'>
                                        Vamo ai
                                    </Button>
                                </div>
                            </Link>
                            <Link to="/sign-up" className="pricing__container-card">
                                <div className="pricing__container-cardInfo">
                                    <div className="icon">
                                        <GiCrystalize />
                                    </div>
                                    <h3>Pacote experiente</h3>
                                    <h4>R$ 1.120,00</h4>
                                    <p>por mês</p>
                                    <ul className="pricing__container-features">
                                        <li>16 horas no mês</li>
                                        <li>Max 8 horas por semana</li>
                                        <li>Ideal para projetos longos</li>
                                    </ul>
                                    <Button buttonSize='btn--wide' buttonColor='blue'>
                                        Eita papai
                                    </Button>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </IconContext.Provider>
    )
}

export const Pricing2 = () => {
    return (
        <IconContext.Provider value={{color: '#fff', size: 64}}>
            <div>
                <div className="pricing__section">
                    <div className="pricing__wrapper">
                        <h1 className="pricing__heading">
                            Pricing
                        </h1>
                        <div className="pricing__container">
                            <Link to="/sign-up" className="pricing__container-card">
                                <div className="pricing__container-cardInfo">
                                    <div className="icon">
                                        <FaFire />
                                    </div>
                                    <h3>Starter</h3>
                                    <h4>$8.99</h4>
                                    <p>per month</p>
                                    <ul className="pricing__container-features">
                                        <li>100 Transactions</li>
                                        <li>2% Cash Back</li>
                                        <li>$10,000 Limit</li>
                                    </ul>
                                    <Button buttonSize='btn--wide' buttonColor='primary'>
                                        Escolher Plano
                                    </Button>
                                </div>
                            </Link>
                            <Link to="/sign-up" className="pricing__container-card">
                                <div className="pricing__container-cardInfo">
                                    <div className="icon">
                                        <BsXDiamondFill />
                                    </div>
                                    <h3>Starter</h3>
                                    <h4>R$8.99</h4>
                                    <p>per month</p>
                                    <ul className="pricing__container-features">
                                        <li>100 Transactions</li>
                                        <li>2% Cash Back</li>
                                        <li>$10,000 Limit</li>
                                    </ul>
                                    <Button buttonSize='btn--wide' buttonColor='blue'>
                                        Escolher Plano
                                    </Button>
                                </div>
                            </Link>
                            <Link to="/sign-up" className="pricing__container-card">
                                <div className="pricing__container-cardInfo">
                                    <div className="icon">
                                        <GiCrystalize />
                                    </div>
                                    <h3>Starter</h3>
                                    <h4>R$8.99</h4>
                                    <p>per month</p>
                                    <ul className="pricing__container-features">
                                        <li>100 Transactions</li>
                                        <li>2% Cash Back</li>
                                        <li>$10,000 Limit</li>
                                    </ul>
                                    <Button buttonSize='btn--wide' buttonColor='primary'>
                                        Escolher Plano
                                    </Button>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </IconContext.Provider>
    )
}

export const Pricing3 = () => {
    return (
        <IconContext.Provider value={{color: '#fff', size: 64}}>
            <div>
                <div className="pricing__section">
                    <div className="pricing__wrapper">
                        <h1 className="pricing__heading">
                            Gravação audiovisual para conteúdo na internet
                        </h1>
                        <div className="pricing__container">
                            <Link to="/sign-up" className="pricing__container-card">
                                <div className="pricing__container-cardInfo">
                                    <div className="icon">
                                        <FaFire />
                                    </div>
                                    <h3>Sem edição</h3>
                                    <h4>R$ 100,00</h4>
                                    <p>por hora de gravação</p>
                                    <ul className="pricing__container-features">
                                        <li>50 minutos gravados</li>
                                        <li>5 minutos para instalação</li>
                                        <li>5 minutos para teste</li>
                                    </ul>
                                    <Button buttonSize='btn--wide' buttonColor='primary'>
                                        Vamo que Vamo
                                    </Button>
                                </div>
                            </Link>
                            <Link to="/sign-up" className="pricing__container-card">
                                <div className="pricing__container-cardInfo">
                                    <div className="icon">
                                        <GiCrystalize />
                                    </div>
                                    <h3>Com edição</h3>
                                    <h4>R$ 180,00</h4>
                                    <p>por hora de gravação</p>
                                    <ul className="pricing__container-features">
                                        <li>50 minutos gravados</li>
                                        <li>Edição de Aúdio</li>
                                    </ul>
                                    <Button buttonSize='btn--wide' buttonColor='blue'>
                                        Agora vai
                                    </Button>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </IconContext.Provider>
    )
}

export default Pricing;
