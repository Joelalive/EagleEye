import { Component, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  current: number = 0;

  constructor() { }

  list = [
    {
    title: 'Basic Information',
      form: new FormGroup({}),
      fields: [
        {
          fieldGroupClassName: 'row',
          fieldGroup: [
            {
              className: 'col-md-2',
              type: 'input',
              key: 'firstName',
              templateOptions: {
                label: 'First Name',
                required: true,
              },
            },
            {
              className: 'col-md-2',
              type: 'input',
              key: 'lastName',
              templateOptions: {
                label: 'Last Name',
                required: true,
              },
            },
            {
              className: 'col-md-2',
              type: 'input',
              key: 'mobile',
              templateOptions: {
                label: 'Mobile Number',
                required: true,
              },
            },
            {
              className: 'col-md-3',
              type: 'input',
              key: 'email',
              templateOptions: {
                label: 'Email',
                type: 'email',
                required: true,
              },
            },
            {
              className: 'col-md-3',
              type: 'radio',
              key: 'gender',
              templateOptions: {
                  inline: true,
                  label: 'Gender',
                  options: [
                      {
                          label: 'Male',
                          value: 'male'
                      },
                      {
                        label: 'Female',
                        value: 'female'
                      }
                  ],
                  required: true,
              },
            }
          ],
        }
      ]},
    {
    title: 'Detailed Information',
    form: new FormGroup({}),
    fields: [
      {
        key: 'email',
        type: 'input',
        templateOptions: {
          label: 'Email address',
          placeholder: 'Enter email',
          required: true,
        }
      }
    ]},
    {
    title: "Address & ID's",
    form: new FormGroup({}),
    fields: [
      {
        key: 'email',
        type: 'input',
        templateOptions: {
          label: 'Email address',
          placeholder: 'Enter email',
          required: true,
        }
      }
    ]},
    {
    title: "Physical Information",
    form: new FormGroup({}),
    fields: [
      {
        key: 'email',
        type: 'input',
        templateOptions: {
          label: 'Email address',
          placeholder: 'Enter email',
          required: true,
        }
      }
    ]},
  ];
  
  onSubmit(form: FormGroup) {
    if(form.valid) {
      console.log(form.value);
    }
  }

  clearForm(formDirective: FormGroupDirective) {
    formDirective.resetForm();
  }

  ngOnInit(): void {
  }

}
