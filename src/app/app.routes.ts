import { Routes } from '@angular/router';
import {HomeComponent} from "../home/home.component";
import {PageNotFoundComponent} from "../page-not-found/page-not-found.component";
import {GoldBookComponent} from "../gold-book/gold-book.component";
import {MessageComponent} from "../message/message.component";
import {ErreurComponent} from "../erreur/erreur.component";

export const routes: Routes = [
  {
    path: '', redirectTo: 'accueil', pathMatch: "full"
  },
  {
    path: 'accueil', component: HomeComponent
  },
  {
    path: 'page-introuvable', component: PageNotFoundComponent
  },
  {
    path: 'livre-dor', component: GoldBookComponent
  },
  {
    path: 'laisser-un-message', component: MessageComponent
  },
  {
    path: 'une-erreur-est-survenue', component: ErreurComponent
  },
  { path: '**', redirectTo: 'page-introuvable' },

];
