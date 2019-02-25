import React, { Component } from 'react'
import {Button} from "reactstrap"

export default class FormContact extends Component {

  render() {
    return (
      <div>
        <form method="POST" action="https://formspree.io/leo.prudh@gmail.com">
            <input required  type="text" name="name" placeholder="Votre nom" style={{width:'50%', margin:'1%'}}/>
            <input type="email" required  name="email" placeholder="Votre email" style={{width:'50%', margin:'1%'}}/>
            <textarea required name="message" placeholder="Message" style={{width:'100%', margin:'1%'}}></textarea>

                <Button color="primary" style={{margin:'1%'}}>Envoyer</Button>
            
        </form>
      </div>
    )
  }
}
