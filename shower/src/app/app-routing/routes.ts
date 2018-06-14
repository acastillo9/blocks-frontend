import { Routes } from '@angular/router';
import { BlocksComponent } from '../components/blocks/blocks.component';
export const routes: Routes = [
  { path: 'shower/blocks', component: BlocksComponent },
  { path: '**', redirectTo: 'shower/blocks' }
];
