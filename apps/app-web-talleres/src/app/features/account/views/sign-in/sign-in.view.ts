import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: './sign-in.view.html',
    styleUrls: ['./sign-in.view.css']
})
export class SignInView implements OnInit {
    formLogin: FormGroup;
    get emailControl(): FormControl {
        return this.formLogin.get('email') as FormControl;
    }
    get passwordControl(): FormControl {
        return this.formLogin.get('password') as FormControl;
    }
    constructor(private fb: FormBuilder) {}

    ngOnInit(): void {
        this.formLogin = this.fb.group({
            email: this.fb.control(null, [Validators.required]),
            password: this.fb.control(null, [Validators.required])
        });
    }

    signIn() {
        console.log(this.formLogin);
        if (this.formLogin.valid) {
            console.log('form valido');
        }
    }
}
