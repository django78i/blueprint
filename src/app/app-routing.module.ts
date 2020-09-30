import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortfolioViewComponent } from './portfolio-view/portfolio-view.component';
import { WorkflowComponent } from './workflow/workflow.component';
import { GetInTouchComponent } from './get-in-touch/get-in-touch.component';
import { ProjectPageComponent } from './project-page/project-page.component';
import { MatNavHeaderComponent } from './mat-nav-header/mat-nav-header.component';

const routes: Routes = [
  { path: 'home', component: PortfolioViewComponent },
  { path: 'workflow',  component: WorkflowComponent },
  { path: 'getInTouch',  component: GetInTouchComponent },
  { path: 'projets',  component: ProjectPageComponent },
  { path: 'projet/:id',  component: ProjectPageComponent },
  { path: '', component: PortfolioViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
