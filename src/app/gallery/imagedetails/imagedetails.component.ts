import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-imagedetails',
  templateUrl: './imagedetails.component.html',
  styleUrls: ['./imagedetails.component.css']
})
export class ImagedetailsComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fa-solid fa-arrow-left" (click)="showPreviousImage()" ></i>', '<i class="fa-solid fa-arrow-right" (click)="showNextImage()" ></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }
  public isToggleActive = false;
  public imageId:  any;
  public imageUrl: any;
  public isCollapsed = true;
  public isCollapsing = true;
  public isCollapse = true;
  public Collapse = true;
  public isdropdown = true;
  public imageArrayFirst : any;
  public imageArraySecond : any;
  public imageArray : any ;
  public tabName : any;
  constructor(private activeroute: ActivatedRoute, private router: Router) { 
    this.activeroute.queryParams.subscribe(params=>{
      console.log(params['id']);
      this.imageId=params['id']-1;
      this.tabName = params['name'];
      let tempArray: any;
      switch(this.tabName) {
        case 'recent':
          tempArray = this.slidesStore;
          break;
        case 'Jan-Sept':
          tempArray = this.slides2021;
          break;
        case 'Mar-Nov':
          tempArray = this.slides2020;
          break;
        case 'Feb-Dec':
          tempArray = this.slides2019;
          break;

      }
      
      this.imageUrl = tempArray[params['id']-1].imageURL;
      this.imageArrayFirst = tempArray.slice(0, this.imageId);
      this.imageArraySecond = tempArray.slice(this.imageId, tempArray.length);
      this.imageArray = [...this.imageArraySecond, ...this.imageArrayFirst];
      
    })
  }

  ngOnInit(): void {
  
  }


slidesStore=[
  {
    imageURL: '../assets/images/small/nature_small_1.jpg',
    title: 'image1',
    id: 1,
  }, 
  {
    imageURL: '../assets/images/small/nature_small_2.jpg',
    title: 'image1',
    id: 2,
  }, 
  {
    imageURL: '../assets/images/small/nature_small_3.jpg',
    title: 'image1',
    id: 3,
  }, 
  {
    imageURL: '../assets/images/small/nature_small_4.jpg',
    id: 4,
  },
  {
    imageURL: '../assets/images/small/nature_small_5.jpg',
    title: 'image1',
    id: 5,
  }
]
slides2021=[
  {
    imageURL: '../assets/images/small/nature_small_6.jpg',
    title: 'image1',
    id: 1,
  }, 
  {
    imageURL: '../assets/images/small/nature_small_7.jpg',
    title: 'image1',
    id: 2,
  }, 
  {
    imageURL: '../assets/images/small/nature_small_8.jpg',
    title: 'image1',
    id: 3,
  }, 
  {
    imageURL: '../assets/images/small/nature_small_9.jpg',
    id: 4,
  },
  {
    imageURL: '../assets/images/small/nature_small_10.jpg',
    title: 'image1',
    id: 5,
  }
]
slides2020=[
  {
    imageURL: '../assets/images/small/nature_small_11.jpg',
    title: 'image1',
    id: 1,
  }, 
  {
    imageURL: '../assets/images/small/nature_small_12.jpg',
    title: 'image1',
    id: 2,
  }, 
  {
    imageURL: '../assets/images/small/nature_small_13.jpg',
    title: 'image1',
    id: 3,
  }, 
  {
    imageURL: '../assets/images/small/nature_small_14.jpg',
    id: 4,
  },
  {
    imageURL: '../assets/images/small/nature_small_15.jpg',
    title: 'image1',
    id: 5,
  }
]
slides2019=[
  {
    imageURL: '../assets/images/small/nature_small_16.jpg',
    title: 'image1',
    id: 1,
  }, 
  {
    imageURL: '../assets/images/small/nature_small_17.jpg',
    title: 'image1',
    id: 2,
  }, 
  {
    imageURL: '../assets/images/small/nature_small_18.jpg',
    title: 'image1',
    id: 3,
  }, 
  {
    imageURL: '../assets/images/small/nature_small_19.jpg',
    id: 4,
  },
  {
    imageURL: '../assets/images/small/nature_small_20.jpg',
    title: 'image1',
    id: 5,
  }
]
darkToggle(){
  const themeBtn = document.querySelector('.theme-btn');
  
    themeBtn?.addEventListener('click', () =>{
    document.body.classList.toggle("dark-theme");
    themeBtn?.querySelector('span.light')?.classList.toggle('active');
    themeBtn?.querySelector('span.dark')?.classList.toggle('active');

  })
}

onClose(){
  this.router.navigate(['home']);
}
myFunction(){
  this.isToggleActive=!this.isToggleActive;
    // Toggle the side navigation
    const sidebarToggle = document.getElementById('#sidebarToggle');
   
    if (sidebarToggle) {
      console.log('its worked...');
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        // sidebarToggle.addEventListener('click', event => {
        //     event.preventDefault();
            document.getElementById("sb-sidenav-toggled");
           //document.body.classList.toggle('sb-sidenav-toggled');
            //localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
  
        // });
    }

};
showPreviousImage(){
  console.log("Check")
  if( this.imageId > 0 ) {
  this.imageId= this.imageId - 1;
  this.imageUrl = this.slidesStore[this.imageId].imageURL;
  }
}

}

