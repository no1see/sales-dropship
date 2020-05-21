import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchNested'
})
export class NestedSearchPipe implements PipeTransform {
    transform(values: any[], searchValue: any): any {
        if (searchValue == null) { return values; }
    
        return values.filter(v => this.filterFn(v, searchValue));
      }
    
      filterFn(value: any, searchValue) {
        let flag = this.testSearchCondition(value.displayName, searchValue);
        if (!flag && value.children) {
          flag = value.children.filter(v => this.testSearchCondition(v.displayName, searchValue)).length > 0;
        }
        return flag;
      }
      testSearchCondition(name: string, searchValue: string): boolean {
        return name.toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
      }
}