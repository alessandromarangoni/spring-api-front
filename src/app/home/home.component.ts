import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})


export class HomeComponent implements OnInit{

  private path = 'http://localhost:8080/students'
  students: any[] = []

  constructor(
    private http: HttpClient,
  ){

  }
  ngOnInit(): void {
    this.getStudents().subscribe(data => {
      this.students = data,
      console.log(this.students)
    });
  }


  getStudents(): Observable<any[]> {
    return this.http.get<any[]>(this.path);
  }


}
