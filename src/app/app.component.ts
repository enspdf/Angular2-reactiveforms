import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Contacts } from './contacts.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    contactinfo: FormGroup;

    constructor(private formBuilder: FormBuilder) {

    }

    ngOnInit() {
        this.contactinfo = this.formBuilder.group({
            name: ['', [Validators.required, Validators.minLength(4)]],
            contactno: ['', [Validators.required, Validators.minLength(7)]]
        });

        //Using the FormGroup control
        //this.contactinfo = new FormGroup({
            //name: new FormControl('Shackox'),
            //contactno: new FormControl('0000')
        //});
    }

    onSubmit({value, valid}: {value: Contacts, valid: boolean}) {
        console.log(value, valid);
    }
}
