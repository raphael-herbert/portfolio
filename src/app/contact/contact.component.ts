import { Component } from '@angular/core';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators
} from '@angular/forms';

import { EmailService } from './email.service';
import { MatSnackBar } from '@angular/material/snack-bar';

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

    constructor(
        private fb: FormBuilder,
        private email: EmailService,
        private snackBar: MatSnackBar
    ) {}

    public sendEmail() {
        const mobile = this.form.value.mobile;
        const name = this.form.value.name;
        const email = this.form.value.email;
        const subject = this.form.value.subject;
        const message = this.form.value.message;
        this.email.SendEmail(name, mobile, email, subject, message).subscribe(
            () =>
                this.snackBar.open(
                    "Thanks ! I'll reply to you as soon as possible !", 'OK', { panelClass: 'snackbar' }
                ),
            () =>
                this.snackBar.open(
                    'An error occured ! Please contact me at "raphael.herbert@outlook.fr"', 'OK', { panelClass: 'snackbar' }
                )
        );
    }
}
