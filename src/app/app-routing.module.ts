import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResultComponent } from './components/result/result.component'
import { SearchComponentComponent } from './components/search-component/search-component.component';
import { OrderComponent } from './components/order/order.component';
import { DirectionsComponent } from './components/directions/directions.component';
import { SummaryComponent } from './components/summary/summary.component';

const routes: Routes = [{ path: "result", component: ResultComponent },
                        { path: "search", component: SearchComponentComponent},
                        { path: "order", component: OrderComponent},
                        { path: "directions", component: DirectionsComponent},
                        { path: "summary", component: SummaryComponent},
                        { path: '',   redirectTo: '/search', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
