import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ModalController,
  Events
} from "ionic-angular";
import { HttpClient } from "@angular/common/http";
import { DetailPage } from "../detail/detail";

/**
 * Generated class for the AthologyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-athology",
  templateUrl: "athology.html"
})
export class AthologyPage {
  username;
  data;
  anthologyid;
  anthologyname;
  userid;
  imgs = "imgs";
  li_content = "li_content";
  licontent = "licontent";

  constructor(
    public http: HttpClient,
    public modalCtrl: ModalController,
    public navCtrl: NavController,
    public navParams: NavParams,
    public events: Events
  ) {
    this.anthologyid = navParams.data.anthologyid;
    this.anthologyname = navParams.data.anthologyname;
    this.userid = navParams.data.userid;
    this.username = navParams.data.username;
    
    console.log(this.anthologyid,this.username);
  }
  datas = this.navParams.data;
  ionViewDidLoad() {
    console.log("ionViewDidLoad AthologyPage");
  }
  ngOnInit() {
    this.http
      .post("/notedata/getanthologynote", { anthologyid: this.anthologyid })
      .subscribe(data => {
        console.log(data);
        this.data = data;
        this.data.map(item => {
          item.collectionCount = parseInt(item.collectionCount);
        });
      });
  }
  goTog(i) {
    console.log(this.data[i]);
    this.data[i].username = this.username;
    this.data[i].anthologyname = this.anthologyname;
    let profileModal = this.modalCtrl.create(DetailPage, {
      index: i,
      noteid: this.data[i].noteid
    });
    profileModal.present();
  }
}
