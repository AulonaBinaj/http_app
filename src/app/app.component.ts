import { Component } from '@angular/core';
import { HtttpService } from './htttp.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Response } from '@angular/http/src/static_response';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  items: any[] = [];
  asyncString = this.httpService.getData();
  constructor(private httpService: HtttpService) { }

  ngOnInit() {
    this.httpService.getData()
      .subscribe(
      (data: any) => console.log(data)
      );
  }
  onSubmit(username: string, email: string, password: string) {
    this.httpService.sendData({ username: username, email: email, password: password })
      .subscribe(
      // data => console.log(data)
      error => console.log(error)
      );
  }
  ongetOwnData() {
    this.httpService.getOwnData()
      .subscribe(
      data => {
        const myArray = [];
        for (let celsi in data) {
          myArray.push(data[celsi]);
        }
        this.items = myArray;
      }
      );
  }
}
