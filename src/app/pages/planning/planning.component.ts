import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Destination {
  id: number;
  name: string;
  location: string;
  image: string;
  category: string;
  duration: string;
}

interface SelectedDestination extends Destination {}

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  imports: [CardComponent, CommonModule, FormsModule],
  styleUrls: ['./planning.component.scss']
})
export class PlanningComponent {
  searchTerm = '';
  selectedDestinations: SelectedDestination[] = [];

  destinations: Destination[] = [
    {
      id: 1,
      name: "Cristo Redentor",
      location: "Rio de Janeiro, Brasil",
      image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Monumento",
      duration: "2-3 horas"
    },
    {
      id: 2,
      name: "Machu Picchu",
      location: "Cusco, Peru",
      image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Sítio Arqueológico",
      duration: "1 dia"
    },
    {
      id: 3,
      name: "Torre Eiffel",
      location: "Paris, França",
      image: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Monumento",
      duration: "1-2 horas"
    },
    {
      id: 4,
      name: "Santorini",
      location: "Grécia",
      image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Praia",
      duration: "3-5 dias"
    },
    {
      id: 5,
      name: "Bali",
      location: "Indonésia",
      image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Natureza",
      duration: "5-7 dias"
    },
    {
      id: 6,
      name: "Coliseu",
      location: "Roma, Itália",
      image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "Histórico",
      duration: "2-3 horas"
    }
  ];

  get filteredDestinations() {
    const term = this.searchTerm.toLowerCase();
    return this.destinations.filter(dest =>
      dest.name.toLowerCase().includes(term) ||
      dest.location.toLowerCase().includes(term) ||
      dest.category.toLowerCase().includes(term)
    );
  }

  addToItinerary(destination: Destination) {
    if (!this.selectedDestinations.some(item => item.id === destination.id)) {
      this.selectedDestinations = [...this.selectedDestinations, { ...destination }];
    }
  }

  removeFromItinerary(destinationId: number) {
    this.selectedDestinations = this.selectedDestinations.filter(item => item.id !== destinationId);
  }

  updateDestination(destinationId: number, updates: Partial<SelectedDestination>) {
    this.selectedDestinations = this.selectedDestinations.map(item =>
      item.id === destinationId ? { ...item, ...updates } : item
    );
  }

  isSelected(destination: any): boolean {
  return this.selectedDestinations && this.selectedDestinations.some((d: any) => d.id === destination.id);
}

  tab: 'destinos' | 'itinerario' = 'destinos';
}