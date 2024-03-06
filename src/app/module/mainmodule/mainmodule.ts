export class FinalImageList {

    CategoryList: Array<CategoryList> = new Array<CategoryList>();
    BrandList: Array<BrandList> = new Array<BrandList>();
}

export class CategoryList {

    date_range: string ='';
    image_list: Array<Images> = new Array<Images>();
}
export class BrandList {

    date_range: string ='';
    image_list: Array<Images> = new Array<Images>();
}
export class Images {

    Id: string = '';
    url: string = '';
}