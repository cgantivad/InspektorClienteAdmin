
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogComponent } from './log.component';
import { ConsultlogComponent } from './components/consultlog/consultlog.component';

const routes: Routes = [{
  path: '',
  component: LogComponent,
  children: [
            {
              path: 'consult-log',
              component: ConsultlogComponent,
            }
          ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class LogRoutingModule { }

export const routedComponents = [
  ConsultlogComponent
];
