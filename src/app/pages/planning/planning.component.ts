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
  notes?: string;
  date?: string;
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
      name: "Parque de Vila Velha",
      location: "Ponta Grossa, Paraná",
      image: "https://upload.wikimedia.org/wikipedia/commons/b/b1/A_Ta%C3%A7a_-_Parque_Estadual_de_Vila_Velha.jpg",
      category: "Parque Natural",
      duration: "2-3 horas"
    },
    {
      id: 2,
      name: "Ponte dos Arcos",
      location: "Porto Amazonas, Paraná",
      image: "https://chacarakiwidaserra.com.br/wp-content/uploads/2021/09/fd87bb0497de5afbbfed3a9b2fc686038a017505-1024x768.jpg",
      category: "Arquitetura",
      duration: "1 dia"
    },
    {
      id: 3,
      name: "Buraco do Padre",
      location: "Ponta Grossa, Paraná",
      image: "https://curitibacult.com.br/wp-content/uploads/2020/02/buraco-do-padre-ponta-grossa-1024x768.jpg",
      category: "Parque Natural",
      duration: "1-3 horas"
    },
    {
      id: 4,
      name: "Frederica’s Tortas",
      location: "Carambeí, Paraná",
      image: "https://www.camposgeraisdoparana.com.br/wp-content/uploads/2022/01/3c50c1_af2a97f5c12c48f8a5af5316bb06386e_mv2.jpg",
      category: "Restaurante",
      duration: "1-4 horas"
    },
    {
      id: 5,
      name: "Recanto dos Papagaios",
      location: "Palmeira, Paraná",
      image: "https://www.camposgeraisdoparana.com.br/wp-content/uploads/2021/11/recanto3.jpg",
      category: "Arquitetura",
      duration: "1-4 horas"
    },
    {
      id: 6,
      name: "Parque Histórico",	
      location: "Carambeí, Paraná",
      image: "https://www.camposgeraisdoparana.com.br/wp-content/uploads/2021/11/museu.jpg",
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

  updateDestination(destinationId: number, updates: Partial<SelectedDestination>) {
  this.selectedDestinations = this.selectedDestinations.map(dest =>
    dest.id === destinationId ? { ...dest, ...updates } : dest
  );
}

removeFromItinerary(destinationId: number) {
  this.selectedDestinations = this.selectedDestinations.filter(dest => dest.id !== destinationId);
}

  isSelected(destination: any): boolean {
  return this.selectedDestinations && this.selectedDestinations.some((d: any) => d.id === destination.id);
}

  tab: 'destinos' | 'itinerario' = 'destinos';
}