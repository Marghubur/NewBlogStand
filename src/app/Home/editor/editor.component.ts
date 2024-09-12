import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { EditorChangeContent, EditorChangeSelection, QuillEditorComponent } from 'ngx-quill';
import Quill from 'quill';
import ImageResizor from 'quill-image-resizor'
Quill.register('modules/imageResizor', ImageResizor)

import hljs from 'highlight.js'
@Component({
  selector: 'app-editor',
  standalone: true,
  imports: [QuillEditorComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.scss'
})
export class EditorComponent {
  blurred = false
  focused = false
  modules = {}

  constructor() {
    this.modules = {
      syntax: { hljs },
      imageResizor: {},
      toolbar: [['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      ['blockquote', 'code-block'],
  
      [{ 'header': 1 }, { 'header': 2 }],               // custom button values
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
      [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
      [{ 'direction': 'rtl' }],                         // text direction
  
      [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  
      [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      [{ 'font': [] }],
      [{ 'align': [] }],
  
      ['clean'],                                         // remove formatting button
  
      ['link', 'image', 'video'] ]
    }
  }

  created(event: Quill | any) {
    // tslint:disable-next-line:no-console
    console.log('editor-created', event)
  }

  changedEditor(event: EditorChangeContent | EditorChangeSelection | any) {
    // tslint:disable-next-line:no-console
    console.log('editor-change', event)
  }

  focus($event: any) {
    // tslint:disable-next-line:no-console
    console.log('focus', $event)
    this.focused = true
    this.blurred = false
  }
  nativeFocus($event: any) {
    // tslint:disable-next-line:no-console
    console.log('native-focus', $event)
  }

  blur($event: any) {
    // tslint:disable-next-line:no-console
    console.log('blur', $event)
    this.focused = false
    this.blurred = true
  }
  nativeBlur($event: any) {
    // tslint:disable-next-line:no-console
    console.log('native-blur', $event)
  }
}
