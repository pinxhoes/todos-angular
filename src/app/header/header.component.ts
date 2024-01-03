import {Component, OnInit} from '@angular/core';
import {MenuItem, PrimeIcons} from "primeng/api";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  items : MenuItem [];

  ngOnInit(){
    this.items = [{
      label: 'User',
      icon:PrimeIcons.USER,
      items: [
        {label: 'Penguin'},
        {label: 'Giraffe'}
      ]
    },
    { label : 'Todo List',
      icon : PrimeIcons.LIST
    }]
  }
}
