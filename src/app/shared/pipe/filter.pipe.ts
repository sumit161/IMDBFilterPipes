import { Pipe, PipeTransform } from '@angular/core';
import { Imovie } from '../model/interface';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: Array<Imovie>, searchString: string): Array<Imovie> {
    console.log(searchString);
    console.log(value);
    // return value
    // arraylength:Number
    if (!value) {
      return [];
    }
    if (!searchString) {
      return value;
    }
/*     function helllo() {
   let count1 = value.filter((ele) =>
        ele.title
          .toLowerCase()
          .trim()
          .startsWith(searchString.toLowerCase().trim())
      ).length;
      return function inner() {
        return count1;
      };
    }
    console.log(helllo()()) */
    // console.log(count1);
    return value.filter((ele) =>
      ele.title
        .toLowerCase()
        .trim()
        .includes(searchString.toLowerCase().trim())
    );
  }
}
/* function countqq() {
  throw new Error('Function not implemented.');
}
 */
