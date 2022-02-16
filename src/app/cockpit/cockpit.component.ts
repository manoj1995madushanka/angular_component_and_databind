import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  // these event emitters are listen by app component
  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{ blueprintName: string, blueprintContent: string }>();

  // accessing serverContentInput local reference
  @ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef;

  newServerName = '';
  newServerContent = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  /**
   * trigger @Output event when user click button
   * */
  onAddServer(serverNameInput: HTMLInputElement) {

    // log local reference value
    console.log(serverNameInput);
    console.log(serverNameInput.value);

    console.log(this.serverContentInput);
    console.log(this.serverContentInput.nativeElement.value);

    this.serverCreated.emit(
      {
        serverName: serverNameInput.value,
        serverContent: this.serverContentInput.nativeElement.value
      }
    );
  }

  /**
   * trigger @Output event when user click button
   * */
  onAddBlueprint(serverNameInput: HTMLInputElement) {
    this.blueprintCreated.emit(
      {
        blueprintName: serverNameInput.value,
        /*blueprintContent: this.newServerContent*/
        blueprintContent: this.serverContentInput.nativeElement.value
      }
    );
  }

}
