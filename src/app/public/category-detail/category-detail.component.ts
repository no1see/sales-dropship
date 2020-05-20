import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.scss']
})
export class CategoryDetailComponent implements OnInit {
  public category: string;
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getCategoryDetails();
  }

  getCategoryDetails() {
    const categoryName = this.route.snapshot.paramMap.get('category');
    this.category = categoryName;
  }

}
