import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  /* below line will disable view encapsulation of server.element.css file
  * that means those file css properties will apply to whole app that classes*/
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit {

  // define element type
  // tslint:disable-next-line:no-input-rename
  @Input('srvElement') element: { name: string, type: string, content: string };

  constructor() {
  }

  ngOnInit(): void {
  }

}
