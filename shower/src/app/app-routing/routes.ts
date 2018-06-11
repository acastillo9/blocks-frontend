import { Routes } from '@angular/router';
import { BlocksComponent } from '../components/blocks/blocks.component';
export const routes: Routes = [
  { path: 'blocks', component: BlocksComponent },
  { path: '**', redirectTo: 'blocks' }
];
