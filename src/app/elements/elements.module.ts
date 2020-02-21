import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ElementsHomeComponent } from "./elements-home/elements-home.component";
import { PlaceholderComponent } from "./placeholder/placeholder.component";
import { ElementsRoutingModule } from "./elements-routing.module";

@NgModule({
  declarations: [ElementsHomeComponent, PlaceholderComponent],
  imports: [CommonModule, ElementsRoutingModule],
  exports: []
})
export class ElementsModule {}
