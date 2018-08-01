import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';

    items: MenuItem[];

    ngOnInit() {
        this.items = [{
            label: 'NEXA Navigation',
            items: [
                { label: 'Home', icon: 'fa-home', routerLink: ['/home'] },
                { label: 'Join Now', icon: 'fa-link', routerLink: ['/joinnow'] },
                { label: 'Roster', icon: 'fa-list-ul', routerLink: ['/roster'] },
                { label: 'Recipes', icon: 'fa-list', routerLink: ['/recipes'] },
            ]
        }];
    }
}
