import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

@Injectable()
export class TitleService {

  private _titles: BehaviorSubject<String> = <BehaviorSubject<String>>new BehaviorSubject(null);
  public readonly titles: Observable<String> = this._titles.asObservable();

  setTitle(title: String) {
    this._titles.next(title);
  }

}
