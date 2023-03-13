import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent{

  title = 'cmp-databinding';

  customers = [
    { type:'normal', 
      name:'Normal Customer', 
      balance:1000000.00
    }
    ,
    { type:'priority', 
      name:'Priority Customer', 
      balance:20000000000.00
    }
  ];

  onCustomerAdded(customerData: {name: string, balance: number}){
    this.customers.push({
      type:'normal',
      name: customerData.name,
      balance: customerData.balance
    });
  }

  onPriorityCustomerAdded(prirorityCustomerData: {name: string, balance: number}){
    this.customers.push({
      type:'priority',
      name: prirorityCustomerData.name,
      balance: prirorityCustomerData.balance
    });
  }

  onChangeFirstCustomer(){
    this.customers[0].name = 'temp name';
  }

  onDestroyFirstCustomer(){
    this.customers.splice(0, 1);
  }

}
