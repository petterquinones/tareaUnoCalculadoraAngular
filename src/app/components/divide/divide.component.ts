import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-divide',
  templateUrl: './divide.component.html',
  styleUrls: ['./divide.component.css']
})
export class DivideComponent implements OnInit {

  divideForm: FormGroup;
  result:number = 0;

  constructor(private formBuilder: FormBuilder) {
    this.divideForm = this.formBuilder.group(
      {
        number1:["", Validators.required],
        number2:["", Validators.required]
      }
    )
   }

  ngOnInit(): void {
  }

  divide(){
    this.result = +this.divideForm.value.number1 - +this.divideForm.value.number2;
    console.log("Dividiendo. ");
  }

}
