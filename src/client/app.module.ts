import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TransferHttpCacheModule } from '@nguniversal/common';

import { AppComponent } from './app.component';
import { PublicComponent } from './public';

@NgModule({
  declarations: [
    AppComponent,
    PublicComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'my-client'}),
    RouterModule.forRoot([
      {path: '', component: PublicComponent, pathMatch: 'full'},
      {path: 'admin', loadChildren: './admin/admin.module#AdminModule'}
    ]),
    TransferHttpCacheModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
