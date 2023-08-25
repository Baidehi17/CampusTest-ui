import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { skillAndQuestion } from '../model/skills-and-question';
import { QuestionDetails } from '../model/QuestionDetails';
import { subQuestions } from '../model/subQuestions';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(private http: HttpClient) { }

  url = "http://localhost:3000/cards";
  apiURL = "https://localhost:7053/api/QuestionDetails";

  skillAndQuestion(): Observable<skillAndQuestion[]> {
    return this.http.get<skillAndQuestion[]>(this.url);
  }

  GetQuestionDetials(): Observable<QuestionDetails[]> {
    return this.http.get<QuestionDetails[]>(this.apiURL);
  }
  getSubQuestionDetailsByID(id: number): Observable<subQuestions[]> {
    return this.http.get<subQuestions[]>(`https://localhost:7053/api/QuestionDetails?id=${id}`);
  }
  
  getQuestionDetailsByID(id: number): Observable<QuestionDetails[]> {
    return this.http.get<QuestionDetails[]>(`https://localhost:7053/api/SubQuestions?id=${id}`);
  }
}
