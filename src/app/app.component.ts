import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import AOS from 'aos';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    public animate = false;
    public off = false;

    public constructor(public router: Router) {}

    ngOnInit(): void {
        AOS.init({ disable: 'mobile' });
        AOS.refresh();

        this.initiateStartSequence();
    }

    private initiateStartSequence() {
        setTimeout(() => {
            this.animate = true;
            setTimeout(() => {
                this.off = true;
                setTimeout(() => {
                    const link = this.router.url.substring(1);
                    const navLinks = document.querySelectorAll('header nav a');
                    navLinks.forEach(element => {
                        if (element.getAttribute('href') == link) {
                            (element as HTMLElement).click();
                        }
                    });
                });
            }, 1000);
        }, 1000);
    }
}
