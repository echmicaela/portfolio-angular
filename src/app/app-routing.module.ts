import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PortfolioItemComponent } from './components/portfolio-item/portfolio-item.component';

const routes: Routes = [
  //{path: 'portfolio', component:PortfolioArchive},
  //{path: '', component:AppComponent},
  //{path: '', redirectTo: '', pathMatch:'full'},
  //{path: '**', component: Pagina404Component},
  {path: 'portfolio/:id', component:PortfolioItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
