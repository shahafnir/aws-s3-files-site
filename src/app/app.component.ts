import { environment } from './../environments/environment.prod';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { uploadImage, getImagesData, deleteImage } from '../server/images';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  images = [];
  URL = environment.serverEndpointUrl + 'get-image';

  uploadImageForm = new FormGroup({
    image: new FormControl(''),
  });

  ngOnInit() {
    this.setImages();
  }

  async setImages() {
    this.images = await getImagesData();
  }

  onSubmitForm(event) {
    const image = event.target.children[0].files[0];

    const formData = new FormData();
    formData.append('image', image);

    uploadImage(formData).then((res) => {
      console.log(res);
      this.setImages();
    });
  }

  onDeleteImage(imageId, imageKey) {
    deleteImage(imageId, imageKey).then((res) => {
      console.log(res);

      this.setImages();

      alert('Image deleted');
    });
  }
}
