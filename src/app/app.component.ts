import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PWA';
  files: File[] = [];
  filePreviews: string[] = [];

  
  AddFilePreview($event: string) {
    this.filePreviews.push($event);    
  }
  AddFile($event: File) {
    this.files.push($event);    
  }
}
