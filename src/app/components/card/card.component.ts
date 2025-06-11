import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface Destination {
  id: number;
  name: string;
  location: string;
  image: string;
  category: string;
  duration: string;
}

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
 @Input() destination!: Destination;
  @Input() isSelected = false;
  @Output() add = new EventEmitter<Destination>();
  @Output() remove = new EventEmitter<number>();

  onAdd() {
    this.add.emit(this.destination);
  }

  onRemove() {
    this.remove.emit(this.destination.id);
  }
}
