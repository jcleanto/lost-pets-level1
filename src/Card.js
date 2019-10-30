import React, { Component } from 'react';
import './Card.css';

export default class Card extends Component {

    state = {
        buttonDonateText: 'Doar',
        buttonDonateClassName: 'radius'
    }

    handleClick = event => {
        event.preventDefault();
        alert('Thank you for your donation!');
        this.setState({
            buttonDonateText: 'Já doou',
            buttonDonateClassName: 'radius redButton'
        });
        this.btn.setAttribute("disabled", "disabled");
    }

    render() {
        const { buttonDonateText, buttonDonateClassName } = this.state;

        return (
            <div className="card radius">
                <div className="photo">
                    <div className="photoHeader">
                        <div>Riscas -- #12930</div>
                        <button className="radius">Partilhar</button>
                    </div>
                </div>
                <div className="info">
                    <div className="infoKey">Perdido</div>
                    <div className="infoValue">Setembro 2018</div>
                    <div className="infoKey">Dono</div>
                    <div className="infoValue">Jorge Seabra</div>
                    <div className="infoKey">Localidade</div>
                    <div className="infoValue">Faro</div>
                </div>
                <div className="donate">
                    <div>$50.000 <span>doados</span></div>
                    <button ref={btn => { this.btn = btn; }} className={buttonDonateClassName} onClick={(e) => this.handleClick(e)}>{buttonDonateText}</button>
                </div>
                <div className="call">
                    <div>(<span itemprop="telephone">+351 916 083 075</span>) LIGAR</div>
                </div>
            </div>
        );
    }

}