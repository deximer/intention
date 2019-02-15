import { Injectable } from '@angular/core';

import { Item } from '../../models/persona';

@Injectable()
export class Personas {
  personas: Personas[] = [];

  defaultItem: any = {
    "name": "Run Jamaica Pond",
    "profilePic": "assets/img/speakers/bear.jpg",
    "about": "I am a regular jogger.",
  };


  constructor() {
    let personas = [
      {
        "name": "Run Jamaica Pond",
        "profilePic": "assets/img/speakers/bear.jpg",
        "about": "I am a regular jogger.",
      },
      {
        "name": "Write a one page story weekly",
        "profilePic": "assets/img/speakers/cheetah.jpg",
        "about": "I am practicing writing."
      },
      {
        "name": "Play guitar 3 hours a week",
        "profilePic": "assets/img/speakers/duck.jpg",
        "about": "I am learning guitar."
      },
      {
        "name": "No candy",
        "profilePic": "assets/img/speakers/eagle.jpg",
        "about": "I am not a sugar eater."
      },
      {
        "name": "Stretch every morning",
        "profilePic": "assets/img/speakers/elephant.jpg",
        "about": "I stay limber."
      }
    ];

    for (let persona of personas) {
      this.personas.push(new Persona(persona));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.personas;
    }

    return this.personas.filter((persona) => {
      for (let key in params) {
        let field = persona[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return persona;
        } else if (field == params[key]) {
          return persona;
        }
      }
      return null;
    });
  }

  add(persona: Persona) {
    this.personas.push(persona);
  }

  delete(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
