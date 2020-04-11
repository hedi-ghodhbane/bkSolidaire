import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  donations  = [];
  services = [];
  filteredDonations = [];
  filteredServices = [];

  constructor(private router:Router,private auth:AuthService) { }
  fileName= 'ExcelSheet.xlsx';
  deconnexion(){
   this.auth.logout();
  }

    exportexcel(id:String): void
    {
       /* table id is passed over here */
       let element = document.getElementById(`excel-table-${id}`);
       const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

       /* generate workbook and add the worksheet */
       const wb: XLSX.WorkBook = XLSX.utils.book_new();
       XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

       /* save to file */
       XLSX.writeFile(wb, this.fileName);

    }

  ngOnInit(){
     firebase.database().ref("donators")
     .on('value',(data)=>{
       this.donations = [];
       let allData = data.val();
            let keys = Object.keys(data.val());
       for(let i=0;i<keys.length;i++){
         this.donations.push(allData[keys[i]]);
       }
       this.filteredDonations = [...this.donations];
       console.log(this.donations);
     },(error)=>{
       console.log(error);
     });
     firebase.database().ref("services")
     .on('value',(data)=>{
       this.services = [];
       let allData = data.val();
            let keys = Object.keys(data.val());
       for(let i=0;i<keys.length;i++){
         this.services.push(allData[keys[i]]);
       }
       this.filteredServices= [...this.services];
       console.log(this.services);
     },(error)=>{
       console.log(error);
     })

  }
  filterCin(e){
    console.log(this.services[0].tel) ;
    this.filteredServices = this.services.filter(element=>element.tel.indexOf(e.target.value)!=-1);
  }
  filterPlace(e){
    this.filteredServices = this.services.filter(element=>element.emplacement.indexOf(e.target.value)!=-1);
  }
  filterName(e){
    this.filteredServices = this.services.filter(element=>element.user.indexOf(e.target.value)!=-1);
  }
}
