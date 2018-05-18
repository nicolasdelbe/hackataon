import React, {Component} from 'react';
import {Field, Label, Control, Input, Button, Notification } from 'bloomer'
import { Redirect } from 'react-router'
import axios from 'axios/index';

class Addcontact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      success: false,
      cancel: false,
      error: false,
      Pseudo: '',
      mdp: ''
    }

    this.onCancelClick = this.onCancelClick.bind(this)
    this.onValidateClick = this.onValidateClick.bind(this)
    this.onPseudoChanged = this.onPseudoChanged.bind(this)
    this.onmdpChanged = this.onmdpChanged.bind(this)
  }

  onCancelClick() {
    this.setState({
      cancel: true
    })
  }

  onValidateClick() {
    let self = this
    if (this.state.Pseudo.trim().length <= 0) {
      this.setState({
        error: true
      })
      return
    }
    axios.post('https://localhost:2222/account', {
      pseudo: this.state.Pseudo,
      password: this.state.mdp
    })
    .then(function (response) {
      self.setState({
        success: true
      })
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  onPseudoChanged(event) {
    this.setState({
      Pseudo: event.target.value,
      //error: false
    })
  }

  onmdpChanged(event) {
    this.setState({
      mdp: event.target.value
    })
  }

  render() {
    if (this.state.cancel || this.state.success) {
      return (
          <Redirect push to="/" />
      )
    }
    return (
        <div>
          {
            this.state.error &&
                <Notification isColor='danger'>
                  Champs Name obligatoire
                </Notification>
          }
          <div className="paged2">
          <div classname="container">
          <div className="row">
          <div className="col-md-4">
          <Field>
            <Label>Pseudo</Label>
            <Control>
              <Input className="inputform" type="text" placeholder='Pseudo' onChange={this.onPseudoChanged}/>
            </Control>
          </Field>
          <Field>
            <Label>Mot de passe</Label>
            <Control>
              <Input className="inputform" type="password" placeholder='mdp' onChange={this.onmdpChanged} />
            </Control>
          </Field>

          <Button className="buttoncontact" isColor='danger' onClick={this.onCancelClick}>Annuler</Button>
          <Button className="buttoncontact" isColor='primary' onClick={this.onValidateClick}>Inscription</Button>
        </div>
        <div className="col-md-8">
        <div className="adjust">
          <img src={'https://www.tenstickers.fr/stickers/img/preview/sticker-r2d2-2469.png'} alt="wookie" className="R2D2"/>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
    );
  }
}

export default Addcontact;
