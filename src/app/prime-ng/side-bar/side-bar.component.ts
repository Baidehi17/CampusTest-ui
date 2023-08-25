import { Component } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {


  sidebarMenu=[
    {
      label:'DashBoard',
      icon:'pi pi-fw pi-home'
    },
    {
      label:'Form Layout',
      icon:'pi pi-fw pi-id-card'
    },
    {
      label:'Input',
      icon:'pi pi-fw pi-check-square'
    },
    {
      label:'Float Label',
      icon:'pi pi-fw pi-bookmark'
    },
    {
      label:'Invalid State',
      icon:'pi pi-fw pi-exclamation-circle'
    },
    {
      label:'Button',
      icon:'pi pi-fw pi-mobile'
    },
    
    {
      label:'List',
      icon:'pi pi-fw pi-list'
    },
    {
      label:'Tree',
      icon:'pi pi-fw pi-share-alt'
    },
    {
      label:'Panel',
      icon:'pi pi-fw pi-tablet'
    },
    {
      label:'Overlay',
      icon:'pi pi-fw pi-clone'
    },
    {
      label:'Menu',
      icon:'pi pi-fw pi-bars'
    },
    {
      label:'Message',
      icon:'pi pi-fw pi-comment'
    },
   
    {
      label:'File',
      icon:'pi pi-fw pi-file'
    },
    {
      label:'Chart',
      icon:'pi pi-fw pi-chart-bar'
    },
    {
      label:'Media',
      icon:'pi pi-fw pi-image'
    },
    {
      label:'Misc',
      icon:'pi pi-fw pi-circle-off'
    }    
  ]
}
