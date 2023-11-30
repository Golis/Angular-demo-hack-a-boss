import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '../../services/translate.service';

@Pipe({
  name: 'translate',
  pure: false
})
export class TranslatePipe implements PipeTransform {
  constructor(private translate: TranslateService) {}

  transform(key: any): any {
    if (this.isEmpty(this.translate.data)) {
      return key;
    } else {
      const wording = this.getWording(this.translate.data, key);
      return wording ? wording : key;
    }
  }

  isEmpty(obj:any) {
    let count = 0;
    for (let i in obj) {
      if (obj.hasOwnProperty(i)) {
        count++;
      }
    }
    return count === 0;
  }

  getWording(o:any, s:any) {
    s = s.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
    s = s.replace(/^\./, ''); // strip a leading dot
    const a = s.split('.');
    for (let i = 0, n = a.length; i < n; ++i) {
      const k = a[i];
      if (k in o) {
        o = o[k];
      } else {
        return k;
      }
    }
    return o;
  }
}
