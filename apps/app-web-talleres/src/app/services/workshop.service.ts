import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Workshop } from '../interfaces/workshop.interface';
import { Instructor } from '../interfaces/instructor.interface';
import { FormType } from '../types/form.type';
import * as moment from 'moment';
moment.locale('es');

@Injectable({
    providedIn: 'root'
})
export class WorkshopService {
    constructor(private http: HttpClient) {}

    getWorkshops(): Observable<Workshop[]> {
        return this.http.get<Workshop[]>('/workshops');
    }

    getWorkshop(slug: string): Observable<Workshop> {
        const params = new HttpParams().set('slug', slug);
        return this.http.get<Workshop>('/workshops');
    }

    getWorkshopsNow(now: string): Observable<Workshop[]> {
        const params = new HttpParams().set('date', now);
        return this.http.get<Workshop[]>('/workshops', { params });
    }
    getWorkshopsWeek(now: string, lastDayOfWeek: string): Observable<Workshop[]> {
        const params = new HttpParams().set('date_gte', now).set('date_lte', lastDayOfWeek);
        return this.http.get<Workshop[]>('/workshops', { params });
    }
    getWorkshopsMonth(now: string, lastDayOfMonth: string): Observable<Workshop[]> {
        const params = new HttpParams().set('date_gte', now).set('date_lte', lastDayOfMonth);
        return this.http.get<Workshop[]>(`/workshops`, { params });
    }
    filterWorkshops(obj: FormType): Observable<Workshop[]> {
        let params = new HttpParams();

        if (obj.name) {
            params = params.set('name_like', obj.name);
        }
        if (obj.instructor.id !== null && obj.instructor.id > 0) {
            params = params.set('instructor.id', obj.instructor.id.toString());
        }
        if (obj.start) {
            params = params.set('date_gte', moment(obj.start, 'DD-MM-YYYY').format('YYYY-MM-DD'));
        }
        if (obj.end) {
            params = params.set('date_lte', moment(obj.end, 'DD-MM-YYYY').format('YYYY-MM-DD'));
        }
        return this.http.get<Workshop[]>(`/workshops`, { params });
    }

    getInstructors(): Observable<Instructor[]> {
        return this.http.get<Instructor[]>('/instructors');
    }
}
