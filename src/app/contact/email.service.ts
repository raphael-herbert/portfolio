import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class EmailService {
    private url = '';

    constructor(private http: HttpClient) {}

    public SendEmail(email: string, subject: string, message: string) {
        return this.http.post(
            'https://mailthis.to/raphael.herbert@outlook.fr',
            {
                email: email,
                _subject: subject,
                message: message
            }
        );
    }
}
