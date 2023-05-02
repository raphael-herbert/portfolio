import { Component } from '@angular/core';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators
} from '@angular/forms';

import { EmailService } from './email.service';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
    public form: FormGroup = this.fb.nonNullable.group({
        name: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required, Validators.email]),
        mobile: new FormControl('', [Validators.required]),
        subject: new FormControl('', [Validators.required]),
        message: new FormControl('', [Validators.required])
    });

    constructor(private fb: FormBuilder, private email: EmailService) {}

    public sendEmail() {
        const email = this.form.value.email;
        const subject = this.form.value.subject;
        const message = this.form.value.message;
        console.log(email);
        this.email.SendEmail(email, subject, message).subscribe(response => {
            if (response != null) {
                console.log('helo');
                location.href = 'https://mailthis.to/confirm';
            }
        });
    }
}
