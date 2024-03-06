import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ModGetDateWisePhotoDetailsReq, ModGetDateWisePhotoDetailsRes, ModUpdatePhotoByIdReq } from '../module/moduleClass';

@Injectable({
  providedIn: 'root'
})

export class CommonService {

  public simageURL: BehaviorSubject<any> = new BehaviorSubject('')
  readonly bsViewPageFlag: Observable<any> = this.simageURL.asObservable();
  public simageId: BehaviorSubject<any> = new BehaviorSubject('')
  readonly bsViewPagIdFlag: Observable<any> = this.simageId.asObservable();
  public homeDataList: BehaviorSubject<any> = new BehaviorSubject(ModGetDateWisePhotoDetailsRes);
  readonly bsViewPageListFlag: Observable<any> = this.homeDataList.asObservable();
  public selectedImageIndex : BehaviorSubject<any> = new BehaviorSubject('');
  readonly bsViewPagIndexFlag: Observable<any> = this.selectedImageIndex.asObservable();
  public bSeeMoreDateRange : BehaviorSubject<any> = new BehaviorSubject('');
  readonly bsViewPageDaterangeFlag: Observable<any> = this.bSeeMoreDateRange.asObservable();

  constructor(private http: HttpClient) { }

  public get seemoreDateRange() : any {
    return this.bSeeMoreDateRange.getValue();
  }
  
  public set seemoreDateRange(v : any) {
    this.bSeeMoreDateRange.next(v);
  }

  public get selectedImageindex() : any {
    return this.selectedImageIndex.getValue();
  }
  
  public set selectedImageindex(v : any) {
    this.selectedImageIndex.next(v);
  }

  public get selectedImage() : any {
    return this.simageURL.getValue();
  }
  
  public set selectedImage(v : any) {
    this.simageURL.next(v);
  }

  public get selectedImageId() : any {
    return this.simageId.getValue();
  }
  
  public set selectedImageId(v : any) {
    this.simageId.next(v);
  }

  public get selectedImageList() : any {
    return this.homeDataList.getValue();
  }
  
  public set selectedImageList(v : any) {
    this.homeDataList.next(v);
  }


}
