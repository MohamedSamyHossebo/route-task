import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class JsonService {

  constructor(private _httpClient: HttpClient) { }

// search by ID
  userSearch(username: string) {
    return this._httpClient.get('https://my-json-server.typicode.com/MohamedSamyHossebo/api/customers' + '/' + username);
  }
// get all data
  getAllTransactions() {
    return this._httpClient.get('https://my-json-server.typicode.com/MohamedSamyHossebo/api/customers');
  }


}

