import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Project } from '../models/project.interface';

const SERVICE_NAME = 'ProjectService';
const PROJECTS_URL = '/assets/resources/projects.json';

@Injectable()
export class ProjectService {

    private projects = new BehaviorSubject<Project[]>(null);

    constructor(private httpClient: HttpClient) {

    }

    observeProjects(): Observable<Project[]> {
        if (!this.projects.getValue()) {
            this.loadProjects();
            this.projects.next([]);
        }
        return this.projects;

    }

    private loadProjects() {
        this.httpClient
            .get(PROJECTS_URL)
            .subscribe((projects: Project[]) => {
                this.projects.next(projects);
            });
    }
}
