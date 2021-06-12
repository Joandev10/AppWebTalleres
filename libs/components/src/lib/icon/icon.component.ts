import { Component, Input, OnInit, HostBinding } from '@angular/core';

@Component({
    selector: 'glx-icon',
    templateUrl: './icon.component.html',
    styleUrls: ['./icon.component.css']
})
export class IconComponent implements OnInit {
    @Input('name') name: string;

    @HostBinding('class')
    get cssClass() {
        return `icon-${this.name} `;
    }

    constructor() {}

    ngOnInit(): void {}
}
