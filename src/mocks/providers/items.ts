import { Injectable } from '@angular/core';

import { Item } from '../../models/item';

@Injectable()
export class Items {
  items: Item[] = [];

  defaultItem: any = {
    "name": "Run Jamaica Pond",
    "profilePic": "assets/img/speakers/bear.jpg",
    "about": "I am a regular jogger.",
  };


  constructor() {
    let items = [
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

    for (let item of items) {
      this.items.push(new Item(item));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.items;
    }

    return this.items.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: Item) {
    this.items.push(item);
  }

  delete(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
