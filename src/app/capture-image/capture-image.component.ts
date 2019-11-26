import { Component, OnInit } from '@angular/core';
import * as camera from 'nativescript-camera';
import { Image } from "tns-core-modules/ui/image";

@Component({
  selector: 'ns-capture-image',
  templateUrl: './capture-image.component.html',
  styleUrls: ['./capture-image.component.css']
})
export class CaptureImageComponent {

  image;
  constructor() { }

  ngOnInit() {
  }

  captureImage(event){
    // console.log(event);
    camera.takePicture()
          .then( result => {
            console.log(result);
            this.image = new Image();
            this.image.src = result;
            this.transportImageToHandler(this.image);
          })
          .catch( error => {
            console.log(error);
            });
  }

  handleTakePicture(event) {
    camera.requestCameraPermissions().then(
      () =>{
        this.captureImage(event);
      }),
    () => {
      console.log('Applicaton does not have permissions to use the camera')
    }
  }

  transportImageToHandler(image){
    //this function will pass the image over to the processing component;
  }

}
