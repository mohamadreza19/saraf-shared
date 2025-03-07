import { Component, OnInit } from '@angular/core';
import { FormManagerService } from '../../modules/form/services/form-manager.service';
import { FormBuilder } from '../../modules/form/utils/form-builder.util';

@Component({
  selector: 'app-my-component',
  standalone: true,
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css'],

})
export class MyComponentComponent implements OnInit {

  constructor(public fm: FormManagerService) { }

  ngOnInit() {
    const formSection = new FormBuilder('test', {
      name: {
        label: 'نام',
        type: 'text',

      }
    })
    this.fm.registerSection(formSection)

    console.log(this.fm.getSection('test'));

  }

}
