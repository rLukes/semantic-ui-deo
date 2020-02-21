import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ElmentsRoutingModule } from "./elments-routing.module";
import { ElementsHomeComponent } from "./elements-home/elements-home.component";

@NgModule({
  declarations: [ElementsHomeComponent],
  imports: [CommonModule, ElmentsRoutingModule],
  exports: []
})
export class ElmentsModule {}
