import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';



@Component({
   selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {

 @Input() rating: number;
  starWidth: number;
//" the only time we can specify a nested component' property
// as an event binding target on the left side of an equal is
// when that property is decorated with the output decorator
  @Output() ratingClicked: EventEmitter<string> =  new EventEmitter<string>();

    ngOnChanges():void {
        this.starWidth= this.rating*86/5;
    }

    onClick(): void {
       this.ratingClicked.emit('the rating '+this.rating +' was clicked!');

    }
}