import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {StoredCity} from "../../dtos/stored-city.dto";
import {StoreService} from "../../services/store.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-citydialog',
  templateUrl: './city-dialog.component.html',
  styleUrls: ['./city-dialog.component.scss']
})
export class CityDialogComponent{
  formGroup!: FormGroup;

  public constructor(
    private readonly fb: FormBuilder,
    private readonly storeService: StoreService,
    public dialogRef: MatDialogRef<CityDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data?: StoredCity,
  ) {
    this.formGroup = this.fb.group({
      city: [this.data ? this.data.city: ''  , [Validators.required, Validators.pattern(/^[a-zA-Z]+[-, ]*[A-Za-z]+$/)]]
    })
  }

  submit() {
    if(!this.formGroup.valid)
      return;
    if(this.data)
      this.storeService.updateCity(this.data.id, this.formGroup.get('city')?.value)
    else
      this.storeService.saveLocation(this.formGroup.get('city')?.value);

    this.dialogRef.close('update');
  }

  getError(controlName: string, validatorName: string) {
    const errors = this.formGroup.get(controlName)?.errors;
    return errors ? errors.hasOwnProperty(validatorName) : false;
  }

  getErrorMessage(validatorName: string) {
    switch (validatorName) {
      case 'required':
        return 'This field is required'
      case 'pattern':
        return 'Value is not valid'
      default:
        return ''
    }
  }


}
