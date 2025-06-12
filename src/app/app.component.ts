import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PlanningComponent } from './pages/planning/planning.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContatosComponent } from './pages/contatos/contatos.component';
import { ExperienciasComponent } from './pages/experiencias/experiencias.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, PlanningComponent, NavbarComponent, ContatosComponent, ExperienciasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cg-tour';
}
