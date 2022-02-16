import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit,
  Component,
  DoCheck, ElementRef,
  Input,
  OnChanges, OnDestroy,
  OnInit,
  SimpleChanges, ViewChild,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  /* below line will disable view encapsulation of server.element.css file
  * that means those file css properties will apply to whole app that classes*/
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit, OnChanges,
  DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  // define element type
  // tslint:disable-next-line:no-input-rename
  @Input('srvElement') element: { name: string, type: string, content: string };

  /* for test ngOnChange*/
  @Input() name: string;

  @ViewChild('heading', {static: true}) header: ElementRef;

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('on changes called');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('on init called');
    console.log('Text content of onInit ' + this.header.nativeElement.element.textContent);
  }

  /**
   * trigger for any event of all components
   * */
  ngDoCheck(): void {
    console.log('ngDoCheck called');
  }

  /**
   * called after view is initialized
   * */
  ngAfterContentInit(): void {
    console.log('after view init called');
  }

  ngAfterContentChecked(): void {
    console.log('after content checked called');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called');
    console.log('Text content of viewInit ' + this.header.nativeElement.element.textContent);
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy called');
  }

}
