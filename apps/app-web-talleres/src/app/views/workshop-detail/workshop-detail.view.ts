import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WorkshopService } from '../../services/workshop.service';
import { Workshop } from '../../interfaces/workshop.interface';

@Component({
    templateUrl: './workshop-detail.view.html',
    styleUrls: ['./workshop-detail.view.css']
})
export class WorkshopDetailView implements OnInit {
    workshop: Workshop;
    constructor(private route: ActivatedRoute, private workshopService: WorkshopService) {}

    ngOnInit(): void {
        this.route.paramMap.subscribe((paramMap) => {
            let slug = paramMap.get('slug');
            console.log(slug);
            this.workshopService.getWorkshop(slug).subscribe((response) => {
                this.workshop = response;
                console.log('workshop', response);
            });
        });
    }
}
