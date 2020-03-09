import { Component, OnInit } from "@angular/core";
import { FeatureMenu } from 'src/app/shared/model/feature-menu.model';

@Component({
  selector: "login-root",
  templateUrl: "./login.container.html",
  styleUrls: ["./login.container.scss"]
})
export class LoginContainer implements OnInit {
  loginMenus: FeatureMenu[];

  constructor() { }

  ngOnInit() {
    this.loginMenus = [
      { uri: "login-1", name: "Login 1", description: "Login 1 description", imgUrl: "assets/img/undraw/publish_article_icso.png"},
      { uri: "login-1", name: "Login 2", description: "Login 1 description", imgUrl: "assets/img/undraw/publish_article_icso.png"}
    ]
  }
 }