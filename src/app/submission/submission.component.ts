import { Component } from '@angular/core';

@Component({
  selector: 'app-submission',
  templateUrl: './submission.component.html',
  styleUrls: ['./submission.component.css']
})
export class SubmissionComponent {

  newCustomerName = '';
  newCustomerBalance = 0;

  onAddCustomer(){
    // this.customers.push({
    //   type:'normal',
    //   name: this.newCustomerName,
    //   balance: this.newCustomerBalance
    // });
  }

  onAddPriorityCustomer(){
    // this.customers.push({
    //   type:'priority',
    //   name: this.newCustomerName,
    //   balance: this.newCustomerBalance
    // });
  }

}
