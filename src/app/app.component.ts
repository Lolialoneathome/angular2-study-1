import { Component, ViewEncapsulation } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  private isNavDetailsShow: boolean = false;
  private isNavDetailsHowered = false;
  mouseEnter(div : string){
        console.log("mouse enter : " + div);
        this.isNavDetailsShow = true;
     }

     mouseLeave(div : string){
       console.log('mouse leave :' + div);
       //if (!this.isNavDetailsHowered)
        //this.isNavDetailsShow = false;
     }

     mouseEnterDetailedNav(div : string){
       console.log('mouse leave :' + div);
       this.isNavDetailsHowered = true;
     }

     mouseLeaveDetailedNav(div : string){
       console.log('mouse leave :' + div);
       this.isNavDetailsShow = false;
       this.isNavDetailsHowered = false;
     }

}
