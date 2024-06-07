import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { TaskManagementComponent } from './task-management/task-management.component';
import { TimelineViewComponent } from './timeline-view/timeline-view.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProjectDetailsComponent,
    TaskManagementComponent,
    TimelineViewComponent
  ],
  imports: [
    
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
