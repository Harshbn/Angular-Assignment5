import { Component } from '@angular/core';
import { SecondCompComponent } from '../second-comp/second-comp.component';

@Component({
  selector: 'app-firstcomp',
  standalone: true,
  imports: [SecondCompComponent],
  templateUrl: './firstcomp.component.html',
  styleUrl: './firstcomp.component.css'
})
export class FirstcompComponent {

}
