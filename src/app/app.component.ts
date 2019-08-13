import { Component } from "@angular/core";

@Component(
    {selector: 'app-main',
        template: '<h1> Hello {{ name }} you are now an Angular Expert</h1>'
})

export class AppComponent {
    name = 'Espoir Murhabazi';
}
