import { Routes, RouterModule }  from '@angular/router';

import { Dashboard } from './dashboard.component';
import { ModuleWithProviders } from '@angular/core';

import { feedsComponent } from './components/feeds/feeds.component'
import { profileComponent } from './components/profile/profile.component'
import { calendarComponent } from './components/calendar/calendar.component'
import { goalsComponent } from './components/goals/goals.component'
import { relatedformsComponent } from './components/relatedforms/relatedforms.component'
import { approvalsComponent } from './components/approvals/approvals.component'

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: Dashboard,
    children: [
      { path: '', redirectTo: 'feeds' },
      { path: 'feeds', component: feedsComponent },
      { path: 'profile', component: profileComponent },
      { path: 'calendar', component: calendarComponent },
      { path: 'goals', component: goalsComponent },
      { path: 'relatedforms', component: relatedformsComponent },
      { path: 'approvals', component: approvalsComponent },
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
