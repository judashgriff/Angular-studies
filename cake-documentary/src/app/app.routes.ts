import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { DirectoryComponent } from "./directory/directory.component";
import { FormComponent } from "./form/form.component";


const APP_ROUTES = [
    { path: '', component: HomeComponent},
    { path: 'directory', component: DirectoryComponent },
    { path: 'form', component: FormComponent }
];

export const APP_ROUTES_PROVIDER = RouterModule.forRoot(APP_ROUTES);