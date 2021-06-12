import { NgModule } from '@angular/core';
import { ComponentsComponent } from './components.component';
import { InputComponent } from './input/input.component';
import { SelectComponent } from './select/select.component';

@NgModule({
    declarations: [ComponentsComponent, InputComponent, SelectComponent],
    imports: [],
    exports: [ComponentsComponent]
})
export class GlxComponentsModule {}
