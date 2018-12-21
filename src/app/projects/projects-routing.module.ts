import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectService } from '../services/project.service';

const routes: Routes = [
    {
        path: '',
        component: ProjectListComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [ProjectService]
})
export class ProjectsRoutingModule {
}
