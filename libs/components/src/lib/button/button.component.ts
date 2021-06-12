import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'glx-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
    @Input('color') color: string;
    @Input('type') type: string;

    cssClass: string;

    constructor() {}

    ngOnInit(): void {
        this.cssClass = this.type ? `btn btn-${this.type}-${this.color}` : `btn btn-${this.color}`;
    }
}
