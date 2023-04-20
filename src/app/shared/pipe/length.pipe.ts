import { Pipe, PipeTransform } from '@angular/core';
import { Imovie } from '../model/interface';

@Pipe({
  name: 'length',
})
export class LengthPipe implements PipeTransform {
  transform(value: Array<Imovie>, searchString: string): number {
/*     console.log(
      value.filter((ele) =>
        ele.title
          .toLowerCase()
          .trim()
          .includes(searchString.toLowerCase().trim())
      )
    ); */
    return value.filter((ele) =>
      ele.title.toLowerCase().trim().includes(searchString.toLowerCase().trim())
    ).length;
  }
}
