import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MessageDto} from "../interface/message-dto";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MyMessageService {
private apiUrl = "http://localhost:3000/message";
  constructor(private http: HttpClient) { }

  public saveMessage(message: MessageDto): Observable<MessageDto> {
    return this.http.post<MessageDto>(this.apiUrl, message)
  }

  public getMessage(): Observable<MessageDto[]> {
    return this.http.get<MessageDto[]>(this.apiUrl)
  }
}
