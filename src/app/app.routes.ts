import { Routes } from '@angular/router';
import { DataEntryComponent } from './pages/data-entry/data-entry.component';
import { InformationSummaryComponent } from './pages/information-summary/information-summary.component';

export const routes: Routes = [
  {
    path: '',
    component: DataEntryComponent
  },
  {
    path: 'information-sumary/:document',
    component: InformationSummaryComponent
  }
];
