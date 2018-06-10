import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AdminComponent } from './admin.component';
import { AppMaterialModule } from '../app-material.module';
import { MeetupManagerComponent } from './components/meetup-manager';
import { PreviewImageComponent } from './components/preview-image';
import { HttpErrorHandlerService } from './services/http-error-handler.service';

@NgModule({
  declarations: [
    AdminComponent,
    MeetupManagerComponent,
    PreviewImageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: AdminComponent, pathMatch: 'full'}
    ]),
    AppMaterialModule,
    FlexLayoutModule
  ],
  providers: [HttpErrorHandlerService]
})
export class AdminModule {
}
