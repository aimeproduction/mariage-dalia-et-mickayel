import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MessageDto} from "../interface/message-dto";
import {Observable, retry} from "rxjs";
import {environment} from "../environments/environment";



@Injectable({
  providedIn: 'root'
})
export class MyMessageService {
private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  public saveMessage(message: MessageDto): Observable<MessageDto> {
    return this.http.post<MessageDto>(this.apiUrl, message).pipe(
      retry(2)
    );
  }

  public getMessage(): Observable<MessageDto[]> {
    return this.http.get<MessageDto[]>(this.apiUrl).pipe(
      retry(2)
    );
  }

  public deleteMessage(): Observable<MessageDto> {
    return this.http.delete<MessageDto>(this.apiUrl + '/4').pipe(
      retry(2)
    );
  }
}
