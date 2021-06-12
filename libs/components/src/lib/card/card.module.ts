import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { CardBobyComponent } from './card-boby/card-boby.component';

@NgModule({
    declarations: [CardComponent, CardBobyComponent],
    imports: [CommonModule],
    exports: [CardComponent, CardBobyComponent]
})
export class GlxCardModule {}
