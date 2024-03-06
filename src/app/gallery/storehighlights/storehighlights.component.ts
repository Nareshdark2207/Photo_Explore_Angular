import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-storehighlights',
  templateUrl: './storehighlights.component.html',
  styleUrls: ['./storehighlights.component.css']
})
export class StorehighlightsComponent implements OnInit {
  public isToggleActive = false;
  public isCollapsed = true;
  public isCollapsing = true;
  public isCollapse = true;
  public Collapse = true;
  public isdropdown = true;
  
  imageHighlight= [
    {
    imageURL: './assets/images/stores/s1.jpg',
    id: 1,
    }, 
    {
      imageURL: './assets/images/stores/s2.jpg',
      id: 2,
    }, 
    {
      imageURL: './assets/images/stores/s3.jpg',
      id: 3,
    }, 
    {
      imageURL: './assets/images/stores/s4.jpg',
      id: 4,
    },
    {
      imageURL: './assets/images/stores/s5.jpg',
      id: 5,
    }
  ]

  image2021= [
    {
    imageURL: './assets/images/stores/s6.jpg',
    id: 6,
    }, 
    {
      imageURL: './assets/images/stores/s7.jpg',
      id: 7,
    }, 
    {
      imageURL: './assets/images/stores/s8.jpg',
      id: 8,
    }, 
    {
      imageURL: './assets/images/stores/s9.jpg',
      id: 9,
    },
    {
      imageURL: './assets/images/stores/s10.jpg',
      id: 10,
    }
  ]
  image2020= [
    {
    imageURL: './assets/images/stores/s11.jpg',
    id: 1,
    }, 
    {
      imageURL: './assets/images/stores/s12.jpg',
      id: 2,
    }, 
    {
      imageURL: './assets/images/stores/s13.jpg',
      id: 3,
    }, 
    {
      imageURL: './assets/images/stores/s14.jpg',
      id: 4,
    },
    {
      imageURL: './assets/images/stores/s15.jpg',
      id: 5,
    }
  ]
  image2019= [
    {
    imageURL: './assets/images/stores/s1.jpg',
    id: 1,
    }, 
    {
      imageURL: './assets/images/stores/s2.jpg',
      id: 2,
    }, 
    {
      imageURL: './assets/images/stores/s3.jpg',
      id: 3,
    }, 
    {
      imageURL: './assets/images/stores/s4.jpg',
      id: 4,
    },
    {
      imageURL: './assets/images/stores/s5.jpg',
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
