import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    ngOnInit(): void {
        AOS.init({ disable: 'mobile' });
        AOS.refresh();
    }
}
