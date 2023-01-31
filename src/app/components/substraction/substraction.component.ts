
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-substraction',
  templateUrl: './substraction.component.html',
  styleUrls: ['./substraction.component.css']
})

export class SubstractionComponent implements OnInit {

  substractForm: FormGroup;
  result:number = 0;

  constructor(private formBuilder: FormBuilder) { 
    this.substractForm = this.formBuilder.group(
      {
        number1:["", Validators.required],
        number2:["", Validators.required]
      }
    )
  }

  ngOnInit(): void {
  }

  substraction(){
    this.result = +this.substractForm.value.number1 - +this.substractForm.value.number2;
    console.log("Restando. ");
  }

}
