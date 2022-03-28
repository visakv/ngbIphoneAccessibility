import { BrowserModule } from "@angular/platform-browser"
import {
  NgModule,
  CUSTOM_ELEMENTS_SCHEMA,
  NO_ERRORS_SCHEMA,
} from "@angular/core"
// import { DuetComponents } from "@duetds/angular"

import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from "./app.component"
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { IndexPageComponent } from "./index-page/index-page.component"
import { HeaderComponent } from "./header/header.component"
import { FooterComponent } from "./footer/footer.component"
import { InvestmentAmountComponent } from './investment-amount/investment-amount.component';
import { InvestmentOriginComponent } from './investment-origin/investment-origin.component';
import { SummaryComponent } from './summary/summary.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [AppComponent, IndexPageComponent, HeaderComponent,
    FooterComponent, InvestmentAmountComponent, InvestmentOriginComponent,
    SummaryComponent, TestComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class AppModule { }
