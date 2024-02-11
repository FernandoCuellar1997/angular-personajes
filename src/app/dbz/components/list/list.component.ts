import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DBZCharacter } from '../../interfaces/dbz-character.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: ``
})
export class ListComponent {

  @Input()
  public characterList:DBZCharacter[]=[{id:'0',name:'',power:0}];

  @Output()
  public onIdEmitt:EventEmitter<string>=new EventEmitter();

  removeCharacter(id:string):void{
    if(id==='')return;
    this.onIdEmitt.emit(id);
  }

}
