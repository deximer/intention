import { Injectable } from '@angular/core';

import { Persona } from '../../models/persona';
import { Api } from '../api/api';

/*
  Generated class for the PersonasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PersonaProvider {

  constructor(public api: Api) { }

  add(persona: Persona) { }

  delete(persona: Persona) { }

}
