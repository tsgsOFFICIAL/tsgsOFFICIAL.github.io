import { Component, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})

export class FileUploadComponent implements OnInit {
  @Output() newFileEvent = new EventEmitter<File>();
  @Output() newFilePreviewEvent = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit(): void { }

  // Image Preview
  showPreview(event) {
    const file = (event.target as HTMLInputElement).files[0];

    // File Preview
    const reader = new FileReader();
    reader.onload = () => {
      this.newFileEvent.emit(file);
      this.newFilePreviewEvent.emit(reader.result as string);
      
    }

    reader.readAsDataURL(file);
  }
}