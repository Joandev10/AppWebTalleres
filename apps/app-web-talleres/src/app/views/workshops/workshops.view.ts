import { Component, OnInit } from '@angular/core';
import { WorkshopService } from '../../services/workshop.service';
import { Workshop } from '../../interfaces/workshop.interface';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Instructor } from '../../interfaces/instructor.interface';
import * as moment from 'moment';
import { Subscription } from 'rxjs';
moment.locale('es');

@Component({
    templateUrl: './workshops.view.html',
    styleUrls: ['./workshops.view.css']
})
export class WorkshopsView implements OnInit {
    workshops: Workshop[] = [];
    instructors: Instructor[] = [];
    formWorkshop: FormGroup;
    subscriptions: Subscription = new Subscription();

    constructor(private workshopService: WorkshopService, private fb: FormBuilder) {}

    ngOnInit(): void {
        this.getWorkshops();
        this.getInstructors();

        /*Construccion del form */
        this.formWorkshop = this.fb.group({
            name: this.fb.control(null),
            instructor: this.fb.group({
                id: this.fb.control(0)
            }),
            start: this.fb.control(null),
            end: this.fb.control(null)
        });

        /*Escuchar cambios en el nameControl*/
        this.formWorkshop.valueChanges.subscribe((value) => {
            console.log('subs activa');
            console.log(value);
            this.workshopService.filterWorkshops(value).subscribe((response) => {
                this.workshops = response;
            });
        });
    }

    getWorkshops(): void {
        this.workshopService.getWorkshops().subscribe((response) => {
            this.workshops = response;
        });
    }

    getInstructors(): void {
        this.workshopService.getInstructors().subscribe((response) => {
            this.instructors.unshift({
                id: 0,
                name: 'Todos'
            });
            this.instructors.push(...response);
        });
    }

    getWorkshopsNow(): void {
        let now = moment().format('yyyy-MM-DD');
        this.workshopService.getWorkshopsNow(now).subscribe((response) => {
            this.workshops = response;
        });
    }
    getWorkshopsWeek(): void {
        let lastDayOfWeek = moment().endOf('week').format('yyyy-MM-DD');
        let now = moment().format('yyyy-MM-DD');
        this.workshopService.getWorkshopsWeek(now, lastDayOfWeek).subscribe((response) => {
            this.workshops = response;
        });
    }

    getWorkshopsMonth(): void {
        let lastDayOfMonth = moment().endOf('month').format('yyyy-MM-DD');
        let now = moment().format('yyyy-MM-DD');
        this.workshopService.getWorkshopsWeek(now, lastDayOfMonth).subscribe((response) => {
            this.workshops = response;
        });
    }
    ngOnDestroy(): void {
        this.subscriptions.unsubscribe();
    }
}
