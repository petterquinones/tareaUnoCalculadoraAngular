import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-multiply',
  templateUrl: './multiply.component.html',
  styleUrls: ['./multiply.component.css']
})
export class MultiplyComponent implements OnInit {

  multiplyform: FormGroup;
  result: number = 0;


  constructor(private formBuilder: FormBuilder) { 
    this.multiplyform = this.formBuilder.group(
      {
        number1: ["", Validators.required],
        number2: ["", Validators.required],
        number3: ["", Validators.required]

      }
    )
  }

  ngOnInit(): void {
  }

  multiply(){
    this.result = +this.multiplyform.value.number1 * +this.multiplyform.value.number2 + +this.multiplyform.value.number3
    console.log("Multiplicando");
  }

}
