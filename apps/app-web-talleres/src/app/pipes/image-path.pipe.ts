import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'imagePath'
})
export class ImagePathPipe implements PipeTransform {
    transform(value: string): string {
        return value ? `assets/img/${value}` : 'assets/img/noimage.png';
    }
}
