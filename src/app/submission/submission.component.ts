import { Component, EventEmitter, Output, ViewChild,  ElementRef} from '@angular/core';

@Component({
  selector: 'app-submission',
  templateUrl: './submission.component.html',
  styleUrls: ['./submission.component.css']
})
export class SubmissionComponent {
  @Output() normalCustomerCreated = new EventEmitter<{name: string, balance: number}>();
  @Output() priorityCustomerCreated = new EventEmitter<{name: string, balance: number}>();

  @ViewChild('refCustomerName') refCustomerNameViewChild: ElementRef  ;

  newCustomerName = '';
  newCustomerBalance = 0;

  onAddCustomer(){
    // console.log(refCustomerName.value);
    // console.log(this.refCustomerNameViewChild.nativeElement.value);
    this.normalCustomerCreated.emit(
      {
        name: this.newCustomerName,
        balance: this.newCustomerBalance
      }
    );
  }

  onAddPriorityCustomer(){
    this.priorityCustomerCreated.emit(
      {
        name: this.newCustomerName,
        balance: this.newCustomerBalance
      }
    )
  }

}
