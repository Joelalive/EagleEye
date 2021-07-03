import { Component, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  current: number = 0;

  constructor() {}

  list = [
    {
      title: 'Basic Information',
      form: new FormGroup({}),
      model: {},
      fields: [
        {
          fieldGroupClassName: 'row',
          fieldGroup: [
            {
              className: 'col-md-2',
              type: 'input',
              key: 'firstName',
              templateOptions: {
                placeholder: 'Enter Firstname',
                label: 'First Name',
                required: true,
              },
            },
            {
              className: 'col-md-2',
              type: 'input',
              key: 'lastName',
              templateOptions: {
                placeholder: 'Enter Lastname',
                label: 'Last Name',
                required: true,
              },
            },
            {
              className: 'col-md-2',
              type: 'input',
              key: 'mobile',
              templateOptions: {
                placeholder: 'Enter Mobile Number',
                label: 'Mobile Number',
                required: true,
              },
            },
            {
              className: 'col-md-2',
              type: 'input',
              key: 'email',
              templateOptions: {
                placeholder: 'Enter Email Address',
                label: 'Email',
                type: 'email',
                required: true,
              },
            },
            {
              className: 'col-md-2',
              key: 'relationshipType',
              type: 'select',
              templateOptions: {
                placeholder: 'Select Relationship Type',
                label: 'Relationship Type',
                options: [
                  { label: 'Father', value: 'father' },
                  { label: 'Mother', value: 'mother' },
                  { label: 'Son', value: 'son' },
                  { label: 'Daughter', value: 'daughter' },
                ],
                required: true,
              },
            },
            {
              className: 'col-md-2',
              type: 'radio',
              key: 'gender',
              templateOptions: {
                label: 'Gender',
                options: [
                  {
                    label: 'Male',
                    value: 'male',
                  },
                  {
                    label: 'Female',
                    value: 'female',
                  },
                ],
                required: true,
              },
            },
          ],
        },
      ],
    },
    {
      title: 'Detailed Information',
      form: new FormGroup({}),
      model: {},
      fields: [
        {
          fieldGroupClassName: 'row',
          fieldGroup: [
            {
              className: 'col-md-2',
              type: 'input',
              templateOptions: {
                label: 'DOB',
                placeholder: 'DOB',
                type: 'date',
                required: true,
              },
            },
            {
              className: 'col-md-2',
              key: 'maritalStatus',
              type: 'select',
              templateOptions: {
                placeholder: 'Select Marital Status',
                label: 'Marital Status',
                options: [
                  { label: 'Single', value: 'single' },
                  { label: 'Married', value: 'married' },
                  { label: 'Divorced', value: 'divorced' },
                ],
                required: true,
              },
            },
            {
              className: 'col-md-2',
              type: 'input',
              key: 'weddingAnniversary',
              templateOptions: {
                placeholder: 'Enter Wedding Anniversary',
                label: 'Wedding Anniversary',
                type: 'date',
              },
            },
            {
              className: 'col-md-2',
              type: 'input',
              key: 'religion',
              templateOptions: {
                placeholder: 'Enter Religion',
                label: 'Religion',
              },
            },
            {
              className: 'col-md-2',
              type: 'input',
              key: 'caste',
              templateOptions: {
                placeholder: 'Enter Caste',
                label: 'Caste',
              },
            },
            {
              className: 'col-md-2',
              type: 'input',
              key: 'subCaste',
              templateOptions: {
                placeholder: 'Enter Subcaste',
                label: 'Subcaste',
              },
            },
            {
              className: 'col-md-2',
              type: 'input',
              key: 'fatherName',
              templateOptions: {
                placeholder: 'Enter Father Name',
                label: 'Father Name',
              },
            },
            {
              className: 'col-md-2',
              type: 'input',
              key: 'motherName',
              templateOptions: {
                placeholder: 'Enter Mother Name',
                label: 'Mother Name',
              },
            },
            {
              className: 'col-md-2',
              type: 'input',
              key: 'spouseName',
              templateOptions: {
                placeholder: 'Enter Spouse Name',
                label: 'Spouse Name',
              },
            },
            {
              className: 'col-md-2',
              type: 'input',
              key: 'children',
              templateOptions: {
                placeholder: 'No of Children',
                label: 'No of Children',
                type: 'number'
              },
            },
            {
              className: 'col-md-12',
              type: 'textarea',
              key: 'education',
              templateOptions: {
                placeholder: 'Enter Education Details',
                label: 'Education',
                rows: 3,
                required: true,
              },
            },
          ],
        },
      ],
    },
    {
      title: "Address & ID's",
      form: new FormGroup({}),
      model: {},
      fields: [
        {
          fieldGroupClassName: 'row',
          fieldGroup: [
            {
              className: 'col-md-6',
              type: 'textarea',
              key: 'address1',
              templateOptions: {
                placeholder: 'Enter Address',
                label: 'Address 1',
                rows: 3,
                required: true,
              },
            },
            {
              className: 'col-md-6',
              type: 'textarea',
              key: 'address2',
              templateOptions: {
                placeholder: 'Enter Address',
                label: 'Address 2',
                rows: 3,
                required: true,
              },
            },
            {
              className: 'col-md-2',
              type: 'input',
              key: 'city',
              templateOptions: {
                placeholder: 'Enter city',
                label: 'City',
              },
            },
            {
              className: 'col-md-2',
              type: 'input',
              key: 'state',
              templateOptions: {
                placeholder: 'Enter State',
                label: 'State',
              },
            },
            {
              className: 'col-md-2',
              type: 'input',
              key: 'pincode',
              templateOptions: {
                placeholder: 'Enter Pincode',
                label: 'Pincode',
              },
            },
            {
              className: 'col-md-2',
              type: 'input',
              key: 'emergencyNo',
              templateOptions: {
                placeholder: 'Enter Number',
                label: 'Emergency Contact Number',
              },
            },
            {
              className: 'col-md-2',
              type: 'input',
              key: 'alternateNo',
              templateOptions: {
                placeholder: 'Enter Number',
                label: 'Alternate Contact Number',
              },
            },
            {
              className: 'col-md-2',
              type: 'input',
              key: 'aadhar',
              templateOptions: {
                placeholder: 'Enter Aadhar',
                label: 'Aadhar Number',
              },
            },
            {
              className: 'col-md-2',
              type: 'input',
              key: 'voterId',
              templateOptions: {
                placeholder: 'Enter Voter ID',
                label: 'Voter ID',
              },
            },
            {
              className: 'col-md-2',
              type: 'input',
              key: 'driverLicense',
              templateOptions: {
                placeholder: 'Enter Driving License',
                label: 'Driving License',
              },
            },
            {
              className: 'col-md-2',
              type: 'input',
              key: 'passport',
              templateOptions: {
                placeholder: 'Enter Passport',
                label: 'Driving Passport',
              },
            },
          ],
        },
      ],
    },
    {
      title: 'Physical Information',
      form: new FormGroup({}),
      model: {},
      fields: [
        {
          fieldGroupClassName: 'row',
          fieldGroup: [
            {
              className: 'col-md-2',
              type: 'radio',
              key: 'physicallyChallenged',
              templateOptions: {
                label: 'Physically Challenged',
                options: [
                  {
                    label: 'Yes',
                    value: true,
                  },
                  {
                    label: 'No',
                    value: false,
                  },
                ],
                required: true,
              },
            },
            {
              className: 'col-md-2',
              type: 'input',
              key: 'height',
              templateOptions: {
                placeholder: 'Enter height in cms',
                label: 'Height',
                maxLength: 3
                },
            },
            {
              className: 'col-md-2',
              type: 'input',
              key: 'weight',
              templateOptions: {
                placeholder: 'Enter Weight in Kg',
                label: 'Weight',
                maxLength: 3
              },
            },
            {
              className: 'col-md-2',
              type: 'input',
              key: 'bloodGroup',
              templateOptions: {
                placeholder: 'Enter Blood Group',
                label: 'Blood Group',
              },
            },
            {
              className: 'col-md-2',
              key: 'skinColor',
              type: 'select',
              templateOptions: {
                placeholder: 'Select Skin Color',
                label: 'Skin Color',
                options: [
                  { label: 'Fair', value: 'fair' },
                  { label: 'Pale', value: 'pale' },
                  { label: 'Medium', value: 'medium' },
                  { label: 'Olive', value: 'olive' },
                  { label: 'Brown', value: 'brown' },
                  { label: 'Dark', value: 'dark' },
                ],
                required: true,
              },
            },
            {
              className: 'col-md-2',
              key: 'photo',
              type: 'file',
              templateOptions: {
                label: 'Photo',
              },
            }
          ]
        },
      ],
    },
  ];

  onSubmit(form: FormGroup) {
    if (form.valid) {
      console.log(form.value);
    }
  }

  clearForm(formDirective: FormGroupDirective) {
    formDirective.resetForm();
  }

  ngOnInit(): void {}
}
