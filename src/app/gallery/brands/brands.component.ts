import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FinalImageList } from 'src/app/module/mainmodule/mainmodule';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {
  public isToggleActive = false;
  public isCollapsed = true;
  public isCollapsing = true;
  public isCollapse = true;
  public Collapse = true;
  public isdropdown = true;
  public objImageList: FinalImageList= new FinalImageList();

  constructor(private router: Router, private apiservice: ApiService, private httpClient: HttpClient ) { 
    
    this.httpClient.get("assets/data.json").subscribe((data:any) =>{
      console.log('data',data)
      this.objImageList = data;
    console.log('BrandList', this.objImageList.BrandList);

    });
  }

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
