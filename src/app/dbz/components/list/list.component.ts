import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  @Input()
  public characterList: Character[] = [
    { name: 'Trunks', power: 100 },
  ]

  @Output()
  onDelete: EventEmitter<String> = new EventEmitter();

  onDeleteCharacter(id?: String): void {
    if(!id) return;
    this.onDelete.emit(id);
  }
}
