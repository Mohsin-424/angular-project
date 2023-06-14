import { Component} from '@angular/core';

@Component({
  selector: 'app-super',
  templateUrl: './super.component.html',
  styleUrls: ['./super.component.css'],
})
export class SuperComponent {
choosenOption!:string;

data={
  'stakeholder':['Mohsin','Nouman','Usman'],
  'task':['First Task','Second Task','Third Task'],
  'issue':['issue1','issue2','issue3']
     }

  OnChoose( option : string){
    this.choosenOption = option;
                           }
}

