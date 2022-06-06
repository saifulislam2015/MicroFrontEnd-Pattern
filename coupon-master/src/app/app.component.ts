import { environment } from './../environments/environment.prod';
import { Component, OnInit } from '@angular/core';
import { get } from "scriptjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    get(environment.APP_CONTENT_HOST + '/react.prod-16.8.6.min.js',()=>{});
    get(environment.APP_CONTENT_HOST + '/react-dom.prod-16.8.6.min.js',()=>{});
  }
  
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/