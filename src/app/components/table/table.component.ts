import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { JsonService } from '../../services/json.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ChartsComponent } from '../charts/charts.component';


@Component({
  selector: 'app-table',
  standalone: true,
  imports: [FormsModule,RouterLink,ChartsComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent implements OnInit {
  customers: any = [];
  transactions:any=[];
  user: any = [];
  username: string = '';
  searchTextChange: EventEmitter<any> = new EventEmitter<any>();


  constructor(private _httpClient: HttpClient, private _jsonService: JsonService) { }

  ngOnInit(): void {
    this.getUsers();
    this.searchTextChange.pipe(
      debounceTime(500), distinctUntilChanged(),
      switchMap((username: string) => this._jsonService.userSearch(username))
    ).subscribe((res: any) => {
      this.user = [res];
      this.searchTextChange.emit(this.username);
    });

  }

  getUsers() {
    this._jsonService.getAllTransactions().subscribe((res: any) => {
      this.customers = res;
    })
  }
  getUserInfo() {
    this.searchTextChange.next(this.username);
    // this.clearSearchInput();
    console.log('username'+this.username)
  }
  
  clearSearchInput() {
    this.user = [];
    console.log('Empty Array' + this.user);
  }

}
