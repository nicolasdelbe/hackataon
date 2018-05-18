import React, { Component } from 'react'

export default class Home extends React.Component {
  render() {
    return (
      <div className="paged1">
      <div classname="container">
      <div className="row">
      <div className="col-md-4">
      <div className="adjust">
        <img src={'https://clipart.info/images/ccovers/1500064730star-wars-wall-stickers-for-kids-chewbacca.png'} alt="wookie" className="wookie"/>
      </div>
      </div>
      <div className="col-md-8">
        <h1 className="slogan">Inscrivez-vous pour retrouver les profils les plus sexy de toutes la galaxie !!!</h1>
        <p><button type="button" class="btn btn-primary">Rejoins le coté obscur !</button> <button type="button" class="btn btn-light">Que l'amour soit encore avec vous ?</button></p>
      </div>
      </div>
      </div>
      </div>
    )
  }
}
