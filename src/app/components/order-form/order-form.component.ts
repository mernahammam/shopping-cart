import { Component, OnInit } from '@angular/core';
import{ FormControl , FormGroup , Validators} from '@angular/forms';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {

  reactiveForm:FormGroup = new FormGroup({
    address: new FormControl('' , Validators.required),
    phone: new FormControl('' , Validators.required),
    email: new FormControl('' , Validators.required)
  });

  submitted = false;
  constructor() { }

  ngOnInit(): void {
  }

  submitOrder(){
    this.submitted = true;
    console.log(this.reactiveForm.value);
  }

}
