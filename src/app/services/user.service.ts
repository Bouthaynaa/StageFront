import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
const API_URL = "http://localhost:8080/api/user";
@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private http: HttpClient) {}
  getAll() {
    //return this.http.get<Events[]>('')
    return this.http.get(`${API_URL}/getall`);
  }
  getusers() {
    //return this.http.get<Events[]>('')
    return this.http.get(`${API_URL}/getusers`);
  }
  getusersByConverLastUpdate() {
    //return this.http.get<Events[]>('')
    return this.http.get(`${API_URL}/getuserslu`);
  }
  getAllby(str: any) {
    //return this.http.get<Events[]>('')
    return this.http.get(`${API_URL}/getby/` + str);
  }
}
