import { Component } from '@angular/core';
import {BlobService } from 'angular-azure-blob-service';
import { EnvService } from 'src/services/env.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blobang';
  fileName:string;
  downloadurl:string;
  constructor(private blob:BlobService,private env:EnvService){
   
  }
  Download(){
    let fileName= this.fileName;  //filename with which file is stored in blob
    const baseUrl = this.blob.generateBlobUrl(this.env.Config,fileName)
     this.downloadurl=baseUrl+this.env.Config.sas;
    event.preventDefault();
    window.open(this.downloadurl, '_blank');
    console.log(this.downloadurl);
  }
}
