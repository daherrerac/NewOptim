import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-uploadblob',
  templateUrl: './uploadblob.component.html',
  styleUrls: ['./uploadblob.component.css']
})
export class UploadblobComponent implements OnInit {

  constructor(private http: HttpClient) { }

  files: string[] = [];
  fileToUpload: FormData;
  fileUpload: any;
  fileUpoadInitiated: boolean;
  fileDownloadInitiated: boolean;
  private baseUrl = 'http://optimpowerback.azurewebsites.net/api/blobstorage';

  ngOnInit(): void {
    this.showBlobs();
  }

  showBlobs() {
    this.http.get<string[]>(this.baseUrl + '/listfiles').subscribe(result => {
      this.files = result;
      console.log(result);
    }, error => console.error(error));
  }

  addFile() {
    if (!this.fileUpoadInitiated) {
      document.getElementById('fileUpload').click();
    }
  }

  handleFileInput(files: any) {
    const formData: FormData = new FormData();
    formData.append('asset', files[0], files[0].name);
    this.fileToUpload = formData;
    this.onUploadFiles();
  }

  onUploadFiles() {
    if (this.fileUpoadInitiated) {
      return;
    }
    this.fileUpoadInitiated = true;
    if (this.fileToUpload === undefined) {
      this.fileUpoadInitiated = false;
      return false;
    }
    else {
      return this.http.post(this.baseUrl + '/insertfile', this.fileToUpload)
        .subscribe((response: any) => {
          this.fileUpoadInitiated = false;
          this.fileUpload = '';
          console.log(response);
          if (response === true) {
            this.showBlobs();
          }
          else {
            alert('Error occured!');
            this.fileUpoadInitiated = false;
          }
        },
          err => console.log(err),
        );

    }
  }

  downloadFile(fileName: string) {
    this.fileDownloadInitiated = true;
    return this.http.get(this.baseUrl + '/downloadfile/' + fileName, { responseType: 'blob' })
      .subscribe((result: any) => {
        if (result.type !== 'text/plain') {
          let blob = new Blob([result]);
          let saveAs = require('file-saver');
          let file = fileName;
          saveAs(blob, file);
          this.fileDownloadInitiated = false;
        }
        else {
          this.fileDownloadInitiated = false;
          alert('File not found in Blob!');
        }
      }
      );
  }
  deleteFile(fileName: string) {
    let del = confirm('Are you sure want to delete this file');
    if (!del) { return; }
    this.http.get(this.baseUrl + '/deletefile/' + fileName).subscribe(result => {
      if (result != null) {
        this.showBlobs();
      }
    }, error => console.error(error));
  }

}
