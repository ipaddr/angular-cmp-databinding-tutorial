import { Component, Input, ViewEncapsulation, OnChanges, OnInit, DoCheck, 
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, SimpleChanges, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ViewerComponent implements 
OnChanges, 
OnInit, 
DoCheck, 
AfterContentInit, 
AfterContentChecked, 
AfterViewInit, 
AfterViewChecked, 
OnDestroy 
{

  @Input('customerViewAlias')
  customerView: {
    type: string,
    name: string,
    balance: number,
  };

  @Input() name: string;

  @ViewChild('heading') viewChild: ElementRef; 

  @ContentChild('contentParagraf') contentChild: ElementRef;

  constructor(){console.log('constructor called');}

  ngOnChanges(changes:SimpleChanges){
    console.log(changes);
    console.log('ngOnChanges called');
  }

  ngOnInit(){console.log('ngOnInit called'); console.log('Content : '+ this.contentChild); console.log('View : '+this.viewChild);}

  ngDoCheck(){console.log('ngDoCheck called');}

  ngAfterContentInit(){console.log('ngAfterContentInit called');}

  ngAfterContentChecked(){console.log('ngAfterContentChecked called'); console.log('Content : '+this.contentChild);}

  ngAfterViewInit(){console.log('ngAfterViewInit called');}

  ngAfterViewChecked(){console.log('ngAfterViewChecked called'); console.log('View : '+this.viewChild);}

  ngOnDestroy(){console.log('ngOnDestroy called');}

}

