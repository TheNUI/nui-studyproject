import { Component, Input } from '@angular/core';
@Component({
selector: 'lab4-component',
templateUrl: './lab4.component.html',
styleUrls: ['./lab4.component.css']
})
export class lab4component {
    @Input()
    items = [1,2,3,4,5,6,7,8,9,10];
constructor() {

    }

}