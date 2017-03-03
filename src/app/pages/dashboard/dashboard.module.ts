import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { Dashboard } from './dashboard.component';
import { routing }       from './dashboard.routing';

import { ModalModule } from 'ng2-bootstrap/modal';

import { feedsComponent } from './components/feeds/feeds.component'
import { profileComponent } from './components/profile/profile.component'
import { calendarComponent } from './components/calendar/calendar.component'
import { goalsComponent } from './components/goals/goals.component'
import { relatedformsComponent } from './components/relatedforms/relatedforms.component'
import { approvalsComponent } from './components/approvals/approvals.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing,
    ModalModule.forRoot()
  ],
  declarations: [
    Dashboard,
    feedsComponent,
    profileComponent,
    calendarComponent,
    goalsComponent,
    relatedformsComponent,
    approvalsComponent,
  ],
  providers: [

  ]
})
export class DashboardModule {}
