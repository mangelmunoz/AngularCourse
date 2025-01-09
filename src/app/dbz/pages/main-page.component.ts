import { Component} from '@angular/core';
import { DbzService } from '../services/dbz-service';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-page.component.html',
  standalone: false,
})
export class MainPageComponent {

  constructor(private dbzService: DbzService){

  }

  get characters(): Character[]{
    return [...this.dbzService.characters];
  }

  onDeleteCharacteById(uuid: String):void{
    this.dbzService.onDeleteCharacteById(uuid)
  }

  onNewCharacter(character: Character):void{
    this.dbzService.onNewCharacter(character);
  }
}
