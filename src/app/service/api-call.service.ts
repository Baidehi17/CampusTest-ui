import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { QuestionDetails } from '../model/QuestionDetails';
import { subQuestions } from '../model/subQuestions';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(private http: HttpClient) { }

  private baseUrl = "https://localhost:7053/api";

  GetQuestionDetials(): Observable<QuestionDetails[]> {
    return this.http.get<QuestionDetails[]>(`${this.baseUrl}/QuestionDetails`);
  }
  getSubQuestionDetailsByID(id: number): Observable<subQuestions[]> {
    return this.http.get<subQuestions[]>(`${this.baseUrl}/SubQuestions/id?id=${id}`);
  }

  getQuestionDetailsByID(id: number): Observable<QuestionDetails> {
    return this.http.get<QuestionDetails>(`${this.baseUrl}/QuestionDetails/id?id=${id}`);
  }

  updateQuestion(question: QuestionDetails): Observable<QuestionDetails> {
    return this.http.put<QuestionDetails>(`${this.baseUrl}/QuestionDetails/id`, question)
  }
  updateSubQuestion(subQuest: subQuestions): Observable<subQuestions> {
    return this.http.put<subQuestions>(`${this.baseUrl}/SubQuestions/id`, subQuest)
  }
  deleteQuest(id:number):Observable<QuestionDetails> {
    return this.http.delete<QuestionDetails>(`${this.baseUrl}/QuestionDetails/id?id=${id}`)
  }
  DeletesubQuest(id:number):Observable<subQuestions> {
    return this.http.delete<subQuestions>(`${this.baseUrl}/SubQuestions/id?id=${id}`)
  }
  deleteSubById(id:number):Observable<subQuestions>
  {
    return this.http.delete<subQuestions>(`${this.baseUrl}/SubQuestions/DeleteById?id=${id}`) 
  }
  addquestion(quest:any):Observable<QuestionDetails>{
    return this.http.post<QuestionDetails>(`${this.baseUrl}/QuestionDetails`, quest)
  }
  addSubquestion(quest:any):Observable<subQuestions>{
    return this.http.post<subQuestions>(`${this.baseUrl}/SubQuestions`, quest)
  }
}
