import { Component, EventEmitter, Output } from '@angular/core';
import { DBZCharacter } from '../../interfaces/dbz-character.interface';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styles: ``
})
export class AddCharacterComponent {

  @Output()
  public onCharacterEmitt:EventEmitter<DBZCharacter>=new EventEmitter();

  public character:DBZCharacter={id:'',name:'',power:0};

  emittCharacter():void{
    this.onCharacterEmitt.emit({...this.character});
    this.character.id='';
    this.character.name='';
    this.character.power=0;
  }
}
