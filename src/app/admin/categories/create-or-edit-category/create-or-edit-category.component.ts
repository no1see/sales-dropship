import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SuccessDialogComponent } from 'src/app/shared/dialogs/success-dialog/success-dialog.component';

@Component({
  selector: 'app-create-or-edit-category',
  templateUrl: './create-or-edit-category.component.html',
  styleUrls: ['./create-or-edit-category.component.scss']
})
export class CreateOrEditCategoryComponent implements OnInit {
  public categoryForm: FormGroup;
  private dialogConfig;

  constructor(
    private dialog: MatDialog,
    private currentDialog: MatDialogRef<CreateOrEditCategoryComponent>
  ) { }

  ngOnInit(): void {
    this.categoryForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      dateOfBirth: new FormControl(new Date()),
    });

    this.dialogConfig = {
      height: '200px',
      width: '400px',
      disableClose: true,
      data: {}
    };
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.categoryForm.controls[controlName].hasError(errorName);
  }

  public onCancel = () => {
    // this.location.back();

  }

  public createOrEditCategory = (ownerFormValue) => {
    if (this.categoryForm.valid) {
      // this.executeOwnerCreation(ownerFormValue);
      const dialogRef = this.dialog.open(SuccessDialogComponent, this.dialogConfig);

        // we are subscribing on the [mat-dialog-close] attribute as soon as we click on the dialog button
      dialogRef.afterClosed()
        .subscribe(result => {
          // 
          console.log(result);
          this.currentDialog.close({event: 'Added', data: ownerFormValue});
        });
    }
  }

  // private executeOwnerCreation = (ownerFormValue) => {
  //   const owner: OwnerForCreation = {
  //     name: ownerFormValue.name,
  //     dateOfBirth: ownerFormValue.dateOfBirth,
  //     address: ownerFormValue.address
  //   };

  //   const apiUrl = 'api/owner/create';
  //   this.repository.create(apiUrl, owner)
  //     .subscribe(res => {
  //       const dialogRef = this.dialog.open(SuccessDialogComponent, this.dialogConfig);

  //       // we are subscribing on the [mat-dialog-close] attribute as soon as we click on the dialog button
  //       dialogRef.afterClosed()
  //         .subscribe(result => {
  //           this.location.back();
  //         });
  //     },
  //       (error => {
  //         this.errorService.dialogConfig = { ...this.dialogConfig };
  //         this.errorService.handleError(error);
  //       })
  //     );
  // }

}
