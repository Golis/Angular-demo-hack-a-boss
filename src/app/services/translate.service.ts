import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable()
export class TranslateService {
  data: any = {};
  private languageupdated = new Subject<any>();

  constructor(private http: HttpClient) {}

  getLanguageUpdateListener() {
    return this.languageupdated.asObservable();
  }

  public findKeysRecursive(object: any, element:any, i:any) {
    let translationKeyArray = element.translationKey.split('.');
    if (i < translationKeyArray.length) {
      for (var key of Object.keys(object)) {
        if (key == translationKeyArray[i]) {
          i++;
          if (i == translationKeyArray.length) {
            object[translationKeyArray[i - 1]] = element.translationValue;
          } else {
            this.findKeysRecursive(object[key], element, i);
          }
        }
      }
    }
  }

  use(lang: string, translations:any): Promise<{}> {
    return new Promise<{}>((resolve, reject) => {
      const langPath = `assets/locale/${lang}.json`;
      this.http.get<{}>(langPath).subscribe(
        translation => {
          this.data = Object.assign({}, translation || {});
          if (translations != undefined) {
            [...translations].forEach(element => {
              let i = 0;
              this.findKeysRecursive(this.data, element, i);
            });
          }
          this.languageupdated.next(this.data);
          resolve(this.data);
        },
        error => {
          console.log(error);
          this.data = {};
          resolve(this.data);
        }
      );
    });
  }
}
