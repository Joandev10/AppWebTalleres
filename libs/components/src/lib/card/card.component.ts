import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
    selector: 'glx-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
    @HostBinding('class')
    get cssClass() {
        return `card`;
    }

    constructor() {}

    ngOnInit(): void {}
}
