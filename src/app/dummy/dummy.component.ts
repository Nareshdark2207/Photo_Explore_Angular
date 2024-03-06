import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';
import { ClsFinalImageList } from './dummyModClass';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.css']
})
export class DummyComponent implements OnInit {
 
  public isToggleActive = false;
  public isCollapsed = true;
  public isCollapsing = true;
  public isCollapse = true;
  public Collapse = true;
  public isdropdown = true;
  public imageList = [];

  public objImageList: ClsFinalImageList= new ClsFinalImageList();


  //imageHighlight= [
  //{
    //imageURL: './assets/images/small/nature_small_1.jpg',
    //id: 1,
    //}, 
    //{
      //imageURL: './assets/images/small/nature_small_2.jpg',
     // id: 2,
    //}, 
   // {
      //imageURL: './assets/images/small/nature_small_3.jpg',
     // id: 3,
    //}, 
   // {
      //imageURL: './assets/images/small/nature_small_4.jpg',
      //id: 4,
    //},
    //{
    //  imageURL: './assets/images/small/nature_small_5.jpg',
      //id: 5,
    //}
  //]


  imageHighlight: any;

  constructor(private router: Router, private apiservice: ApiService, private httpClient: HttpClient ) { 
    this.httpClient.get("assets/sample.json").subscribe((data:any) =>{
      console.log('data',data)
      this.objImageList = data;
    console.log('image', this.objImageList.ImageList);

    });
  }


  ngOnInit(): void {
   // this.loadImages();
   
  }

  loadImages(){
    //this.apiservice.getimages().subscribe(result=>{
      //console.warn("result", result);
      //debugger;
      //this.imageHighlight = result.imageHighlight.imageList;

    //})
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