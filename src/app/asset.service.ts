import { Coin } from './coin';
import { environment } from './../environments/environment.prod';
import { Observable } from 'rxjs/Observable';
import { AuthenticationService } from './authentication.service';
import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

import { Asset } from './asset';

@Injectable()
export class AssetService {

  public assets: Asset[];

  constructor(private http: Http, private authenticationService: AuthenticationService) { }

  //constructor() {
  // this.assets = new Array<Asset>();
  // }

  //addAsset(asset: Asset) {
  //  this.assets.push(asset);
  //}

  getAssets(): Observable<Asset[]> {
    return this.http.get(`${environment.apiUrl}/assets`
      , { headers: this.getHeaders() })
      .map(res => {
        return res.json().map((a) => {
          return Asset.fromJson(a.asset);
        });
      })
  }


  addAsset(asset: Asset): Observable<Asset> {
    return this.http.post(`${environment.apiUrl}/assets`,
      JSON.stringify({ asset })
      , { headers: this.getHeaders() })
      .map(res => { return res.json() })
      .catch(this.handleError);
  }



  removeAsset(asset: Asset) {
    let index: number = this.assets.indexOf(asset);
    if (index !== -1) {
      this.assets.splice(index, 1);
    }
  }
  /** 
    signup(user: User): Observable<User> {
      return this.http.post(`${environment.apiUrl}/auth/signup`,
        JSON.stringify({ user })
        , { headers: this.getHeaders() })
        .map(res => { return res.json() })
        .catch(this.handleError);
    }
  
  
  
    update(user: User) {
      return this.http.put(`${environment.apiUrl}/users/me`,
        JSON.stringify({ user })
        , { headers: this.getHeaders() });
    }
  
    get() {
      return this.http.get(`${environment.apiUrl}/users/me`
        , { headers: this.getHeaders() });
    }
  */
  private getHeaders() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `Bearer ${this.authenticationService.jwt}`);
    return headers;
  }

  private handleError(error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }

  private extractData(res: Response | any) {
    let assets = res.json().map((a) => {
      return Asset.fromJson(a.asset);
    });

    return assets;
  }

}
