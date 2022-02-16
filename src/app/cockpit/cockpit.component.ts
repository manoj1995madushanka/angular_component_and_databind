import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  // these event emitters are listen by app component
  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{ blueprintName: string, blueprintContent: string }>();

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

    this.serverCreated.emit(
      {
        serverName: serverNameInput.value,
        serverContent: this.newServerContent
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
        blueprintContent: this.newServerContent
      }
    );
  }

}
