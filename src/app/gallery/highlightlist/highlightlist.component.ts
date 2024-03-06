import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-highlightlist',
  templateUrl: './highlightlist.component.html',
  styleUrls: ['./highlightlist.component.css']
})
export class HighlightlistComponent implements OnInit {
  public isToggleActive = false;
  public isCollapsed = true;
  public isCollapsing = true;
  public isCollapse = true;
  public Collapse = true;
  public isdropdown = true;
  
  imageHighlight= [
    {
    imageURL: './assets/images/small/nature_small_1.jpg',
    id: 1,
    }, 
    {
      imageURL: './assets/images/small/nature_small_2.jpg',
      id: 2,
    }, 
    {
      imageURL: './assets/images/small/nature_small_3.jpg',
      id: 3,
    }, 
    {
      imageURL: './assets/images/small/nature_small_4.jpg',
      id: 4,
    },
    {
      imageURL: './assets/images/small/nature_small_5.jpg',
      id: 5,
    }
  ]

  image2021= [
    {
    imageURL: './assets/images/small/nature_small_6.jpg',
    id: 6,
    }, 
    {
      imageURL: './assets/images/small/nature_small_7.jpg',
      id: 7,
    }, 
    {
      imageURL: './assets/images/small/nature_small_8.jpg',
      id: 8,
    }, 
    {
      imageURL: './assets/images/small/nature_small_9.jpg',
      id: 9,
    },
    {
      imageURL: './assets/images/small/nature_small_10.jpg',
      id: 10,
    }
  ]
  image2020= [
    {
    imageURL: './assets/images/small/nature_small_11.jpg',
    id: 1,
    }, 
    {
      imageURL: './assets/images/small/nature_small_12.jpg',
      id: 2,
    }, 
    {
      imageURL: './assets/images/small/nature_small_13.jpg',
      id: 3,
    }, 
    {
      imageURL: './assets/images/small/nature_small_14.jpg',
      id: 4,
    },
    {
      imageURL: './assets/images/small/nature_small_15.jpg',
      id: 5,
    }
  ]
  image2019= [
    {
    imageURL: './assets/images/small/nature_small_16.jpg',
    id: 1,
    }, 
    {
      imageURL: './assets/images/small/nature_small_17.jpg',
      id: 2,
    }, 
    {
      imageURL: './assets/images/small/nature_small_18.jpg',
      id: 3,
    }, 
    {
      imageURL: './assets/images/small/nature_small_19.jpg',
      id: 4,
    },
    {
      imageURL: './assets/images/small/nature_small_20.jpg',
      id: 5,
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
    this.router.navigate(['highlightlist']);
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