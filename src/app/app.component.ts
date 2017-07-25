import { Component } from "@angular/core";

@Component({
    selector: "my-frist-component",
    templateUrl: './app.component.html',
    styleUrls: [ "./app.component.scss" ],
})
export class AppComponent {
        someValue = 'someDynamicValue';
    }
    
  