import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ItemListingComponent } from './item-listing/item-listing.component';
import { ListingAdderComponent } from './listing-adder/listing-adder.component';
import { ListingTotalComponent } from './listing-total/listing-total.component';
import { StuffService } from './stuff.service';
import { InventoryService } from './inventory.service';
import { ParrotPipe } from './parrot.pipe';
import { SurpriseComponent } from './surprise/surprise.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'surprise',
    component: SurpriseComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    ItemListingComponent,
    ListingAdderComponent,
    ListingTotalComponent,
    ParrotPipe,
    SurpriseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ 
    StuffService,
    InventoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
