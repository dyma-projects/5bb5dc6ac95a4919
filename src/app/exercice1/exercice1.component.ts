import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-exercice1",
  templateUrl: "./exercice1.component.html",
  styleUrls: ["./exercice1.component.css"],
})
export class Exercice1Component implements OnInit {
  public title: string;
  public classTitle: string;

  constructor() {
    this.title = "Ceci est un titre en h2 !";
    this.classTitle = "init";
  }

  ngOnInit(): void {}

  public changeTitle(): void {
    this.title = "Le titre vient de changer !";
    this.classTitle = "change";
  }
}
