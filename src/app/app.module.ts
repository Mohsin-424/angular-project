import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuperComponent } from './super/super.component';
import { StakeholderComponent } from './stakeholder/stakeholder.component';
import { IssueComponent } from './issue/issue.component';
import { TaskComponent } from './task/task.component';
import { SelectComponent } from './select/select.component';

@NgModule({
  declarations: [
    AppComponent,
    SuperComponent,
    StakeholderComponent,
    IssueComponent,
    TaskComponent,
    SelectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
