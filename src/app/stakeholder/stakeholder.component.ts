import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-stakeholder',
  templateUrl: './stakeholder.component.html',
  styleUrls: ['./stakeholder.component.css']
})
export class StakeholderComponent {
  @Input( ) data:any[] =  [];
  // @Input chosenStakeholder:string = '';

}
