import { Injectable } from '@angular/core';

import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  
imageName:string;
  constructor() { }
  
  uploadFile(file):any {
    const contentType = file.type;
    const bucket = new S3(
      {
        accessKeyId: 'AKIA3KDCP36Z7KCG2FPX',
        secretAccessKey: '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',
        region: 'US-EAST-2'
    }
      );
      const params = {
          Bucket: 'gobaskt-templates',
          Key: "offer"+"/" + file.name,
          Body: file,
          ACL: 'public-read',
          ContentType: contentType
      };
      bucket.upload(params, function (err, data) {
          if (err) {
              console.log('There was an error uploading your file: ', err);
              return false;
          }
          console.log('Successfully uploaded file.', data);
          this.imageName=params.Key;
          console.log(this.imageName);
          return true;
      });
}

}
