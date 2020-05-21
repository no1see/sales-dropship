import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  contactForm : FormGroup;
  constructor(
    private formBuilder: FormBuilder
  ) {
    this.contactForm = formBuilder.group({
      firstName : '',
      lastName : '',
      email : '',
      comment: ''
    });
  }

  ngOnInit(): void {
  }

}
