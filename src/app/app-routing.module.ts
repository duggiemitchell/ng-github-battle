import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BattleComponent} from './battle/battle.component';
import {PopularComponent} from './popular/popular.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
  {path: 'battle', component: BattleComponent},
  {path: 'popular', component: PopularComponent},
];
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
