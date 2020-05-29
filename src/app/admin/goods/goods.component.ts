import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { CreateOrEditCategoryGood } from './create-or-edit-good/create-or-edit-good.component';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.scss']
})
export class GoodsComponent implements OnInit, AfterViewInit {
  public displayedColumns = ['name', 'price', 'description', 'sellerName', 'code', 'details', 'update', 'delete'];
  public dataSource = new MatTableDataSource<Product>();
  private dialogConfig;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatTable) table: MatTable<any>;
  products: Product[] = [
    {
      id: 1,
      name: 'Product1',
      price: 150,
      description: 'Description',
      categoryId: 1,
      sellerId: 1,
      sellerName: 'Seller1',
      code: 'Sel1-0123'
    },
    {
      id: 2,
      name: 'Product2',
      price: 250,
      description: 'Description',
      categoryId: 2,
      sellerId: 2,
      sellerName: 'Seller2',
      code: '2el1-0123'
    },
    {
      id: 3,
      name: 'Product3',
      price: 350,
      description: 'Description',
      categoryId: 3,
      sellerId: 3,
      sellerName: 'Seller3',
      code: 'Sel3-0123'
    }
  ];
  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.dataSource.data = this.products as Product[];
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
    const dialogRef = this.dialog.open(CreateOrEditCategoryGood, this.dialogConfig);

    // we are subscribing on the [mat-dialog-close] attribute as soon as we click on the dialog button
    dialogRef.afterClosed()
      .subscribe(result => {
        if (result.event == 'Added') {
          this.products.push(
            {
              id: this.products.length,
              name: result.data.name,
              price: result.data.price,
              description: result.data.description,
              categoryId: result.data.categoryId,
              sellerId: 2,
              sellerName: result.data.sellerName,
              code: result.data.code
            }
          );
          this.dataSource.data = this.products;
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
    this.products = this.products.filter(el => el.id !== id);
    this.dataSource.data = this.products;
  }
}


export class Category {
  id: number;
  name: string;
  dateOfBirth: Date;
}

export class Product {
  id: number;
  name: string;
  price: number;
  description: string;
  categoryId: number;
  sellerId: number;
  sellerName: string;
  code: string;
}
