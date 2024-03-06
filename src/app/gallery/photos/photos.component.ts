import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  public isToggleActive = false;
  public isCollapsed = true;
  public isCollapsing = true;
  public isCollapse = true;
  public Collapse = true;
  public isdropdown = true;
  
  imageHighlight= [
    {
    imageURL: './assets/images/photos/p1.jpg',
    id: 1,
    }, 
    {
      imageURL: './assets/images/photos/p2.jpg',
      id: 2,
    }, 
    {
      imageURL: './assets/images/photos/p3.jpg',
      id: 3,
    }, 
    {
      imageURL: './assets/images/photos/p4.jpg',
      id: 4,
    },
    {
      imageURL: './assets/images/photos/p5.jpg',
      id: 5,
    }
  ]

  image2021= [
    {
    imageURL: './assets/images/photos/p6.jpg',
    }, 
    {
      imageURL: './assets/images/photos/p7.jpg',
    }, 
    {
      imageURL: './assets/images/photos/p8.jpg',
    }, 
    {
      imageURL: './assets/images/photos/p9.jpg',
    },
    {
      imageURL: './assets/images/photos/p10.jpg',
    }
  ]
  image2020= [
    {
    imageURL: './assets/images/photos/p1.jpg',
    }, 
    {
      imageURL: './assets/images/photos/p2.jpg',
    }, 
    {
      imageURL: './assets/images/photos/p3.jpg',
    }, 
    {
      imageURL: './assets/images/photos/p4.jpg',
    },
    {
      imageURL: './assets/images/photos/p5.jpg',
    }
  ]
  image2019= [
    {
    imageURL: './assets/images/photos/p6.jpg',
    }, 
    {
      imageURL: './assets/images/photos/p7.jpg',
    }, 
    {
      imageURL: './assets/images/photos/p8.jpg',
    }, 
    {
      imageURL: './assets/images/photos/p9.jpg',
    },
    {
      imageURL: './assets/images/photos/p10.jpg',
    }
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


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
}
