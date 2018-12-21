import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectListComponent } from './project-list/project-list.component';
import { MatDividerModule, MatCardModule, MatButtonModule, MatChipsModule } from '@angular/material';

@NgModule({
    declarations: [ProjectListComponent],
    imports: [
        CommonModule,
        ProjectsRoutingModule,
        MatButtonModule,
        MatCardModule,
        MatChipsModule,
        MatDividerModule
    ]
})
export class ProjectsModule {
}
