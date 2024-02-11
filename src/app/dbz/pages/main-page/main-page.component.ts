import { Component } from '@angular/core';
import { DBZService } from '../../services/dbzservice.service';
import { DBZCharacter } from '../../interfaces/dbz-character.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styles: ``
})
export class MainPageComponent {

  constructor(private dbzService:DBZService){}

  get characters():DBZCharacter[]{
    return [...this.dbzService.characters];
  }

  addCharacter(character:DBZCharacter):void{
    this.dbzService.addCharacter(character);
  }

  removeCharacter(id:string):void{
    this.dbzService.deleteCharacter(id);
  }
}
