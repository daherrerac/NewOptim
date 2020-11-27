import { Component, OnInit } from '@angular/core';
import {BlobServiceClient, AnonymousCredential, newPipeline } from '@azure/storage-blob';
import { environment } from '../../../environments/environment';
import * as CryptoJS from 'crypto-js';





@Component({
  selector: 'app-upload-files',
  templateUrl: './upload-files.component.html',
  styleUrls: ['./upload-files.component.css']
})
export class UploadFilesComponent implements OnInit {
  title = 'web1';
  currentFile: File = null;
  fileSize = 0;
  currentUpload = 0;
  fileName: string;
  i = 1;
  async onFileChange(event) {
    this.currentFile = event.target.files[0];
    this.fileSize = event.target.files[0].size;
    if (this.fileSize !== 0){
      this.fileSize = 100;
    }
    this.fileName = this.currentFile.name;
    console.log(this.currentFile.name);
    console.log(this.currentFile.type);
    console.log('tamaño:' + this.fileSize);
// generate account sas token
    const accountName = environment.accountName;
    const key = environment.key;
    const start = new Date(new Date().getTime() - (15 * 60 * 1000));
    const end = new Date(new Date().getTime() + (30 * 60 * 1000));
    const signedpermissions = 'rwdlac';
    const signedservice = 'b';
    const signedresourcetype = 'sco';
    const signedexpiry = end.toISOString().substring(0, end.toISOString().lastIndexOf('.')) + 'Z';
    const signedProtocol = 'https';
    const signedversion = '2018-03-28';

    const StringToSign =
      accountName + '\n' +
      signedpermissions + '\n' +
      signedservice + '\n' +
      signedresourcetype + '\n' +
       '\n' +
      signedexpiry + '\n' +
       '\n' +
      signedProtocol + '\n' +
      signedversion + '\n';

    var str = CryptoJS.HmacSHA256(StringToSign, CryptoJS.enc.Base64.parse(key));
    var sig = CryptoJS.enc.Base64.stringify(str);
 
    const sasToken = `sv=${(signedversion)}&ss=${(signedservice)}&srt=${(signedresourcetype)}&sp=${(signedpermissions)}&se=${encodeURIComponent(signedexpiry)}&spr=${(signedProtocol)}&sig=${encodeURIComponent(sig)}`;
    const containerName = environment.containerName;

    const pipeline = newPipeline (new AnonymousCredential(), {
            retryOptions: { maxTries: 4 }, // Retry options
            userAgentOptions: { userAgentPrefix: 'AdvancedSample V1.0.0' }, // Customized telemetry string
            keepAliveOptions: {
                // Keep alive is enabled by default, disable keep alive by setting false
                enable: false
            }
            });

    const blobServiceClient = new BlobServiceClient(`https://${accountName}.blob.core.windows.net?${sasToken}`,
                                                             pipeline  );
    const containerClient = blobServiceClient.getContainerClient(containerName);
    if (!containerClient.exists()){
      console.log('the container does not exit');
      console.log(`https://${accountName}.blob.core.windows.net`);
      await containerClient.create();
    }
    const client = containerClient.getBlockBlobClient(this.currentFile.name);
    const response = await client.uploadData(this.currentFile, {
      blockSize: 4 * 1024 * 1024, // 4MB block size
      concurrency: 20, // 20 concurrency
      onProgress: (ev) => this.currentUpload,
      blobHTTPHeaders : {blobContentType: this.currentFile.type}
    });
    console.log(response._response.status);
    for await (const blob of containerClient.listBlobsFlat()) {
        console.log(`Blob ${this.i++}: ${blob.name}`);
    }
 }

  constructor() { }

  ngOnInit(): void {
  }

}


