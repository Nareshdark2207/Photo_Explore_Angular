
export class ClsFinalImageList {

    ImageList: Array<ClsImageList> = new Array<ClsImageList>();
}

export class ClsImageList
{
    date_range: string ='';
    image_list: Array<ClsImages> = new Array<ClsImages>();
}

export class ClsImages
{
    Id: string = '';
    url: string = '';
}
