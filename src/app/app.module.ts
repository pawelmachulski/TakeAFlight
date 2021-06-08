import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponentComponent } from './components/toolbar-component/toolbar-component.component';
import { SearchComponentComponent } from './components/search-component/search-component.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { ResultComponent } from './components/result/result.component';
import { FooterComponent } from './components/footer/footer.component';
import { AuthModule } from './auth/auth.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OrderComponent } from './components/order/order.component';
import { MonthPipe } from './pipes/month.pipe';
import { DirectionsComponent } from './components/directions/directions.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponentComponent,
    SearchComponentComponent,
    ResultComponent,
    FooterComponent,
    OrderComponent,
    MonthPipe,
    DirectionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    AuthModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
