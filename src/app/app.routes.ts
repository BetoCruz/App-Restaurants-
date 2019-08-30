import {Routes}  from '@angular/router'
import {HomeComponent} from './home/home.component'
import {AboutComponent} from './about/about.component'


//constante de nome ROUTES representa a classe Routes que fornece a diretiva <router-outlet> e [routerLink]=""
export const ROUTES:    Routes = [
    {path:'', component: HomeComponent},
    {path:'about', component: AboutComponent}
    

]