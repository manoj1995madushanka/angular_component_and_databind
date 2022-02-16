import {Component, EventEmitter, OnInit, Output} from '@angular/core';

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
  onAddServer() {
    this.serverCreated.emit(
      {
        serverName: this.newServerName,
        serverContent: this.newServerContent
      }
    );
  }

  /**
   * trigger @Output event when user click button
   * */
  onAddBlueprint() {
    this.blueprintCreated.emit(
      {
        blueprintName: this.newServerName,
        blueprintContent: this.newServerContent
      }
    );
  }

}
