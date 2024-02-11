import { Injectable } from '@angular/core';
import {v4 as uuid} from 'uuid';
import { DBZCharacter } from '../interfaces/dbz-character.interface';

@Injectable({providedIn: 'root'})
export class DBZService {
  constructor() { }

  public characters:DBZCharacter[]=
  [
    {
      id:uuid(),
      name:'Krilin',
      power:1000
    },
    {
      id:uuid(),
      name:'Goku',
      power:20000
    },
    {
      id:uuid(),
      name:'Vegeta',
      power:12000
    },
  ]

  addCharacter(newCharacter:DBZCharacter):void{
    this.characters.push(newCharacter);
  }

  deleteCharacter(id:string):void{
    this.characters=this.characters.filter(character=>character.id!==id);
  }

}
