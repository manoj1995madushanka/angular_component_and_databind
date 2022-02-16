import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {

  // define element type
  element: {name: string, type: string, content: string};

  constructor() { }

  ngOnInit(): void {
  }

}
