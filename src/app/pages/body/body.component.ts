import { Component } from '@angular/core';
import { FormViewComponent } from '../forms/form-view.component';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [FormViewComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

}
