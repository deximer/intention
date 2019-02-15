import { Injectable } from '@angular/core';

import { Persona } from '../../models/persona';
import { Api } from '../api/api';

@Injectable()
export class Personas {

  constructor(public api: Api) { }

  add(persona: Persona) { }

  delete(persona: Persona) { }

}
