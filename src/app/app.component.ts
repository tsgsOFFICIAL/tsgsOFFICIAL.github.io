import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  math = Math;
  title = 'pwa';
  preview = '';
  files: File[] = [];
  
  // On file Select
  onChange(event: any) {
    this.files.push(event.target.files[0]);

    this.preview = event.target.result;
    console.log(event.target.files[0]);
    
}
}
