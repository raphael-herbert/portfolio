import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    public toggleMenu = false;

    ngOnInit(): void {
        this.initNavbarActive();
        this.initNavbarClose();
    }

    public initNavbarClose() {
        const navLinks = document.querySelectorAll('header nav a');
        navLinks.forEach(link => {
            (link as HTMLElement).onclick = () => {
                this.toggleMenu = false;
            };
        });
    }

    private initNavbarActive() {
        const sections = document.querySelectorAll('.scroll-area');
        const navLinks = document.querySelectorAll('header nav a');

        window.onscroll = () => {
            sections.forEach(sec => {
                const top = window.scrollY;
                const offset = (sec as HTMLElement).offsetTop - 150;
                const height = (sec as HTMLElement).offsetHeight;
                const id = sec.getAttribute('id');

                if (top >= offset && top < offset + height) {
                    navLinks.forEach(links => {
                        links.classList.remove('active');
                        document
                            .querySelector('header nav a[href*=' + id + ']')
                            ?.classList.add('active');
                    });
                }
            });
        };
    }
}
