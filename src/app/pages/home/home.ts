import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { RevealDirective } from '../../reveal.directive';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  imports: [RouterLink, RevealDirective],
})
export class HomeComponent {}
