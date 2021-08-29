import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../services/user-data.service';
declare var $: any;
export interface Vegetable {
  name: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items: any;
  configs: any = [];
  vegetables: Vegetable[] = [
    { name: 'apple' },
    { name: 'banana' },
    { name: 'strawberry' },
    { name: 'orange' },
    { name: 'kiwi' },
    { name: 'cherry' },
  ];
  constructor(private users: UserDataService) {

    this.items = this.users.get();
  }

  ngOnInit(): void {

    // let content = '<button contenteditable="false" class="show_chips" oncut="return false" onpaste="return false" (change)="return false;">AAA</button><p id="a"> </p>';
    // $("#hightlights_tag").append(content);
    // let content = "<div class='show_chips'>A</div>";



    this.configs = {
      triggerChar: '@', maxItems: 1000, labelKey: 'username',
      mentionSelect: (item: any, triggerChar?: string) => {
        let aa = this.onMentionSelect(item, triggerChar);


        // document.getElementById("hightlights_tag") = 'Test Feedback';
        // document.getElementById('hightlights_tag').innerHTML = "<a class='highlight'>" + item[this.configs.labelKey] + "<a>";
        return "";
      }
    }
  }
  onMentionSelect(item: any, triggerChar?: string) {
    let content = "<button class='show_chips'  contenteditable='false'>" + item[this.configs.labelKey] + "</button>";
    $("#hightlights_tag").append(content);
    return content;
  }
  changecall(val: any) {
    console.log(val);
  }
}
