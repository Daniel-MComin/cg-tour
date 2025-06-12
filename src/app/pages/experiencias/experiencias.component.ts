import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


interface Experience {
  icon: string; 
  title: string;
  description: string;
  image: string;
}
@Component({
  selector: 'app-experiencias',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.scss']
})

export class ExperienciasComponent {
   experiences: Experience[] = [
    {
      icon: 'camera',
      title: 'Tour Fotográfico',
      description: 'Capture momentos únicos com nossos tours em locais icônicos',
      image: 'https://storage.alboom.ninja/sites/3673/albuns/1256697/sem_ttulo-8.jpg?t=1698177385'
    },
    {
      icon: 'mountain',
      title: 'Aventuras na Natureza',
      description: 'Trilhas, escaladas, cicloturismo e expedições para os mais aventureiros',
      image: 'https://lobi.com.br/wp-content/uploads/2024/08/Cicloturismo-Autoguiado-no-Parque-Vila-Velha-e-Rota-dos-Tropeiros.-Fotos-Ivan-Mendes-%C2%A9-Lobi-Ciclotur.jpg'
    },
    {
      icon: 'mug-hot',
      title: 'Descubra a Gastronomia Local',
      description: 'Experimente sabores autênticos com tours gastronômicos exclusivos com nossos parceiros',
      image: 'https://static.wixstatic.com/media/3c50c1_8e481f635d1b4e0d94c46e7048730be7~mv2.png/v1/fit/w_2500,h_1330,al_c/3c50c1_8e481f635d1b4e0d94c46e7048730be7~mv2.png'
    },
    {
      icon: 'landmark',
      title: 'Patrimônio Cultural',
      description: 'Explore a história e cultura dos Campos Gerais com visitas guiadas a monumentos e museus',
      image: 'https://www.camposgeraisdoparana.com.br/wp-content/uploads/2021/11/museu.jpg'
    }
  ];

}
