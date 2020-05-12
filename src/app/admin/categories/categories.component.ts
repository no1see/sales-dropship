import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatTable } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { CreateOrEditCategoryComponent } from './create-or-edit-category/create-or-edit-category.component';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit, AfterViewInit {
  public displayedColumns = ['name', 'dateOfBirth', 'details', 'update', 'delete'];
  public dataSource = new MatTableDataSource<Category>();
  private dialogConfig;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatTable) table: MatTable<any>;
  categories: Category[] = [
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
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.dataSource.data = this.categories as Category[];
    this.dialogConfig = {
      disableClose: true,
      data: {}
    };
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

 }

  public addCategory = () => {
    const dialogRef = this.dialog.open(CreateOrEditCategoryComponent, this.dialogConfig);

    // we are subscribing on the [mat-dialog-close] attribute as soon as we click on the dialog button
    dialogRef.afterClosed()
      .subscribe(result => {
        if (result.event == 'Added') {
          this.categories.push({id: this.categories.length, name: result.data.name, dateOfBirth: result.data.dateOfBirth});
          this.dataSource.data = this.categories;
        }
        console.log(result);
      });
  }

  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  public redirectToDetails = (id: string) => {
    const url = `/owner/details/${id}`;
    
  }

  public redirectToUpdate = (id: string) => {
    const url = `/owner/update/${id}`;
    
  }

  public redirectToDelete = (id: number) => {
    console.log(id);
    this.categories = this.categories.filter(el => el.id !== id);
    this.dataSource.data = this.categories;
  }

}

export class Category {
  id: number;
  name: string;
  dateOfBirth: Date;
}
