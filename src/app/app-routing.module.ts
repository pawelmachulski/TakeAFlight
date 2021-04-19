import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResultComponent } from './components/result/result.component'
import { SearchComponentComponent } from './components/search-component/search-component.component';


const routes: Routes = [{ path: "result", component: ResultComponent },
                        { path: "search", component: SearchComponentComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
