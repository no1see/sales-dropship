import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SuccessDialogComponent } from 'src/app/shared/dialogs/success-dialog/success-dialog.component';

@Component({
  selector: 'app-create-or-edit-good',
  templateUrl: './create-or-edit-good.component.html',
  styleUrls: ['./create-or-edit-good.component.scss']
})
export class CreateOrEditCategoryGood implements OnInit {
  public categoryForm: FormGroup;
  private dialogConfig;
  categoryList: Category[] = [
    {
      id: 1,
      name: 'Cat1',
      dateOfBirth: new Date()
    },
    {
      id: 2,
      name: 'Cat2',
      dateOfBirth: new Date()
    },
    {
      id: 3,
      name: 'Cat3',
      dateOfBirth: new Date()
    }
  ];
  constructor(
    private dialog: MatDialog,
    private currentDialog: MatDialogRef<CreateOrEditCategoryGood>
  ) { }

  ngOnInit(): void {
    this.categoryForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      price: new FormControl(''),
      description: new FormControl(''),
      sellerName: new FormControl(''),
      code: new FormControl(''),
      categoryId: new FormControl('')
    });

    this.dialogConfig = {
      width: '600px',
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


export class Category {
  id: number;
  name: string;
  dateOfBirth: Date;
}
