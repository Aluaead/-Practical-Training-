import { Component } from "@angular/core";
import { NavController, NavParams, Events } from "ionic-angular";
import { HttpClient } from "@angular/common/http";
import { OtheruserPage } from "../otheruser/otheruser";
/**
 * Generated class for the GuanzhuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: "page-guanzhu",
  templateUrl: "guanzhu.html"
})
export class GuanzhuPage {
  userid;
  items;
  mutual = '<i class="iconfont">&#xe610;</i>互相关注';
  follow = "已关注";
  isMutual = [];
  constructor(
    public events: Events,
    public http: HttpClient,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    this.userid = navParams.data;
  }

  ionViewDidLoad() {
    this.followdetail();
    console.log("ionViewDidLoad GuanzhuPage");
  }
  Follow(i) {
    console.log(this.items[i].Mutual);
    this.http
      .post("/userdata/disfollow", {
        userid: this.items[i].userid,
        fansid: this.userid
      })
      .subscribe(data => {
        console.log(data);
      });
    this.items.splice(i, 1);
    this.followdetail();
  }
  followdetail(){
    this.http
      .post("/userdata/followdetail", { userid: this.userid })
      .subscribe(data => {
        console.log(data);
        this.items = data;
        this.isMutual = this.items.map(item => {
          return item.Mutual;
        });
        console.log(this.isMutual);
      });
  }
  goother(i){
    this.navCtrl.push(OtheruserPage,{
      username: this.items[i].username,
    })
  }
}
