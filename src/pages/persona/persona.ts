import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Persona } from '../../models/item';
import { Personas } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-persona',
  templateUrl: 'persona.html',
})
export class PersonaPage {
  currentItems: Persona[];

  constructor(public navCtrl: NavController, public personas: Personas, public navParams: NavParams) {
    this.currentItems = this.personas.query();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonaPage');
  }

}
