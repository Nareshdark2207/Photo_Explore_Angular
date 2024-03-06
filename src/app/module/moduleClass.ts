export class ModGetYearData {
    DateRange: string = '';
}

export class ModDateWisePhotoList {
    Highlight : string = '';
    dateRange : string = '';
    _imageList: Array<ModPhotoDetails> = new Array<ModPhotoDetails>();
}

export class ModUpdatePhotoByIdReq {
    Id: string = '';
    FilterType: string = '';
    Comment:  string = '';
}

export class ModUpdatePhotoByIdRes {
    _modDateWisePhotoList: Array<ModDateWisePhotoList> = new Array<ModDateWisePhotoList>();
    ResponseStatus : string = '';
    ErrorMessage : string = '';
}

export class ModGetPhotoByIdReq {
    FilterType: string = '';
    Id: string = '';
}

export class ModGetPhotoByIdRes {
    _modDateWisePhotoList: Array<ModDateWisePhotoList> = new Array<ModDateWisePhotoList>();
    ResponseStatus : string = '';
    ErrorMessage : string = '';
}

export class ModGetDateWisePhotoDetailsReq {
    FilterType: string ='';
}

export class ModGetDateWisePhotoDetailsRes {
    _modDateWisePhotoList: Array<ModDateWisePhotoList> = new Array<ModDateWisePhotoList>();
    ResponseStatus : string = '';
    ErrorMessage : string = '';
}

export class ModPhotoDetails {
    id: string = '';
    PhotoName: string = '';
    FolderName: string = '';
    imageURL: string = '';
    PhotoDate: string = '';
    PhotoHighlight: string = '';
    PhotoComments: string = '';
    DateRange: string = '';
    key:number = 0;
}