import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Injectable()
export class CommunicationService {
    private messageSource = new BehaviorSubject(0);
    currentMessage = this.messageSource.asObservable();
    constructor() {}
    changeMessage(message: any) {
        this.messageSource.next(message);
    }
    // subject = new Subject<any>();

    // getsubject(): Observable<any> {
    //     return this.subject.asObservable();
    // }
    // setSubject(params) {
    //     this.subject.next(params);
    // }
}
