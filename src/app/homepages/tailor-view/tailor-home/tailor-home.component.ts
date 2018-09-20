import { Component, OnInit } from '@angular/core';
import { DatasetService } from 'src/app/dataset.service';


@Component({
  selector: 'app-tailor-home',
  templateUrl: './tailor-home.component.html',
  styleUrls: ['./tailor-home.component.css']
})
export class TailorHomeComponent implements OnInit {
  take;
  constructor(private serve:DatasetService) { }

  ngOnInit() {
    
  }

}
