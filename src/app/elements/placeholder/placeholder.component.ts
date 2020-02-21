import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-placeholder",
  templateUrl: "./placeholder.component.html",
  styleUrls: ["./placeholder.component.scss"]
})
export class PlaceholderComponent implements OnInit {
  @Input() header: boolean = true;
  @Input() line: number = 1;
  constructor() {}

  ngOnInit() {}
}
