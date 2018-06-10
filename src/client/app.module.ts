import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TransferHttpCacheModule } from '@nguniversal/common';

import { AppMaterialModule } from './app-material.module';
import { AppComponent } from './app.component';
import { PublicComponent } from './public';
import { MeetupsComponent } from './public/components/meetups';

@NgModule({
  declarations: [
    AppComponent,
    PublicComponent,
    MeetupsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'my-client'}),
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path: '', component: PublicComponent, pathMatch: 'full'},
      {path: 'admin', loadChildren: './admin/admin.module#AdminModule'}
    ]),
    HttpClientModule,
    TransferHttpCacheModule,
    AppMaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
