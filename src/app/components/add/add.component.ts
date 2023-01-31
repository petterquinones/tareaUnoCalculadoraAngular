import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  addform: FormGroup;
  result: number = 0;

  constructor(private formBuilder: FormBuilder) { 
    this.addform = this.formBuilder.group(
      {
        number1:["", Validators.required],
        number2:["", Validators.required],
        number3:["", Validators.required],
      }
    )
  }

    ngOnInit(): void {
  
  }

  add(){
    
    this.result = +this.addform.value.number1 + +this.addform.value.number2 + +this.addform.value.number3
    console.log("Sumando");
  }

}
