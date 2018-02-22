import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DirectoryComponent } from './directory/directory.component';
import { APP_ROUTES_PROVIDER  } from './app.routes';
import { FilterPipe } from './filter.pipe';
import { FormComponent } from './form/form.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DirectoryComponent,
    FilterPipe,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    APP_ROUTES_PROVIDER,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
