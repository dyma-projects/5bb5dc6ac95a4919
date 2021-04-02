import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-exercice3",
  templateUrl: "./exercice3.component.html",
  styleUrls: ["./exercice3.component.css"],
})
export class Exercice3Component implements OnInit {
  public statut: boolean;
  public titleButton: string;

  constructor() {
    this.statut = true;
    this.titleButton = "p2";
  }

  ngOnInit(): void {}

  public switchStatut(): void {
    this.statut = !this.statut;
    this.statut ? (this.titleButton = "p2") : (this.titleButton = "p1");
  }
}
