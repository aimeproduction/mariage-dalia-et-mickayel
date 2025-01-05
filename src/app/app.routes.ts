import { Routes } from '@angular/router';
import {HomeComponent} from "../home/home.component";
import {PageNotFoundComponent} from "../page-not-found/page-not-found.component";
import {GoldBookComponent} from "../gold-book/gold-book.component";
import {MessageComponent} from "../message/message.component";
import {ErreurComponent} from "../erreur/erreur.component";

export const routes: Routes = [
  {
    path: '', redirectTo: 'mariage-dalia-et-mickayel', pathMatch: "full"
  },
  {
    path: 'mariage-dalia-et-mickayel', component: HomeComponent
  },
  {
    path: 'page-introuvable', component: PageNotFoundComponent
  },
  {
    path: 'mariage-dalia-et-mickayel-livre-dor', component: GoldBookComponent
  },
  {
    path: 'mariage-dalia-et-mickayel-laisser-un-message', component: MessageComponent
  },
  {
    path: 'mariage-dalia-et-mickayel-une-erreur-est-survenue', component: ErreurComponent
  },
  { path: '**', redirectTo: 'page-introuvable' },

];
