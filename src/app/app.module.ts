import { CollectionsModule } from "./collections/collections.module";
import { ElmentsModule } from "./elments/elments.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ElmentsModule, CollectionsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
