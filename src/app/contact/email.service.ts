import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class EmailService {
    private url = 'https://formspree.io/f/mlekzlap';

    constructor(private http: HttpClient) {}

    public SendEmail(
        name: string,
        mobile: string,
        email: string,
        subject: string,
        message: string
    ) {
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.post(
            this.url,
            {
                name: 'raphael.herbert@outlook.fr',
                replyto: email,
                message:
                    '/ name : ' +
                    name +
                    ' / mobile : ' +
                    mobile +
                    ' / subject : ' +
                    subject +
                    ' / message : ' +
                    message
            },
            { headers: headers }
        );
    }
}
