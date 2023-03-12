import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css']
})
export class ViewerComponent {

  @Input('customerViewAlias')
  customerView: {
    type: string,
    name: string,
    balance: number,
  };

}

