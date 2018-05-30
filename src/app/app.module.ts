import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, RouterLink } from '@angular/router'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RosterComponent } from './roster/roster.component';
import { RecruitingComponent } from './recruiting/recruiting.component';
import { SaleComponent } from './sale/sale.component';
import { RecipesComponent } from './recipes/recipes.component';

import { TabViewModule } from 'primeng/tabview';
import { AccordionModule } from 'primeng/accordion';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { BlockUIModule } from 'primeng/blockui';
import { ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule } from 'primeng/splitbutton';
import {MenuModule} from 'primeng/menu';

import { NexaDataService } from './services/nexa-data.service';

const routes: Routes = [
  { path: '*', redirectTo: 'home', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'roster', component: RosterComponent },
  { path: 'joinnow', component: RecruitingComponent },
  { path: 'recipes', component: RecipesComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    RosterComponent,
    HomeComponent,
    RecruitingComponent,
    SaleComponent,
    RecipesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    TabViewModule,
    AccordionModule,
    CardModule,
    FieldsetModule,
    ProgressSpinnerModule,
    BlockUIModule,
    ToolbarModule,
    SplitButtonModule,
    MenuModule,
  ],
  providers: [
    NexaDataService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
