import { FileValueAccessor } from './../../formly/formly-file/file-value-accessor';
import { FormlyFieldFile } from './../../formly/formly-file/file-type.component';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';


@NgModule({
  declarations: [
    ProfileComponent,
    FileValueAccessor,
    FormlyFieldFile,
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({ 
      extras: { lazyRender: true },
      validationMessages: [
        { name: 'required', message: 'This field is required' },
      ],
      types: [
        { name: 'file', component: FormlyFieldFile, wrappers: ['form-field'] },
      ]
     }),
    FormlyBootstrapModule
  ]
})
export class ProfileModule { }
