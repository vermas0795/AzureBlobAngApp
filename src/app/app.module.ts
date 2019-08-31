import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { EnvServiceProvider } from 'src/services/env.service.provider';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ValService } from 'src/services/val.service';
import { BlobService } from 'angular-azure-blob-service';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [  EnvServiceProvider, ValService, BlobService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
