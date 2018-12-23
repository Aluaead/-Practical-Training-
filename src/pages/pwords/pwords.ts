import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PublishPage } from '../publish/publish';
import { SavewenjiPage } from '../savewenji/savewenji';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
/**
 * Generated class for the PwordsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pwords',
  templateUrl: 'pwords.html',
})
export class PwordsPage {
  
  isOriginal: boolean = false;
  isPrivate: boolean = false;
  content: string = '';
  datas = {
    username: '',
    content: '',
    anthologyname: '',
    notecategory: '文字',
    isOriginal: false,
    isPrivate: false
  };
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public http: HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PwordsPage');
  }
  goPublish(){
    this.navCtrl.push(PublishPage);
  }

  go(){
    // 获取用户名
    var that = this;
    function getName() {
      return new Promise((resolve) => {
        that.storage.get('USER_INFO').then((value) =>{
          console.log(value);
          console.log(JSON.parse(value));
          that.datas.username = JSON.parse(value).username;
          console.log('storage:', that.storage);
          resolve(that.datas);
        });
      });
    }
    // 获取内容
    function getDetails(datas) {
        console.log(that.datas.username);
        console.log(that.content);
        datas.imgPath = null;
        datas.musicPath = null;
        datas.isOriginal = that.isOriginal;
        datas.isPrivate = that.isPrivate;
        datas.content = that.content;
        console.log('datas:', datas);
        that.navCtrl.push(SavewenjiPage,datas);
    }

    var p = new Promise((resolve) => {
      resolve();
    });
    p.then(getName).then(getDetails).catch(reason => {console.log(reason);});
  }
}
