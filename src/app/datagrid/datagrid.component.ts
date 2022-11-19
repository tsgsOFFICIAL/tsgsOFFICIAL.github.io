import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-datagrid',
  templateUrl: './datagrid.component.html',
  styleUrls: ['./datagrid.component.scss']
})

export class DatagridComponent {
  @Input() files: File[];
  @Input() filePreviews: string[];
  math = Math;
  showModal: boolean = false;
  activeFile: File;
  activePreview: string;

  closeModal() {
    this.showModal = false;
  }

  openModal(file, preview) {
    this.showModal = true;
    this.activeFile = file;
    this.activePreview = preview;
  }

  UpdateFileName(file, event) {
    console.log(file);
    console.log(event.target.value);
  }
}
