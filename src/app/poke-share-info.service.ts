import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeShareInfoService {

  constructor() {}

  public val = new Subject<string>;

  getValue(): Subject<string> {
    return this.val;
  }

  setValue(val: string) {
    this.val.next(val);
  }
}
