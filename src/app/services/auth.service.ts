import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private afAuth: AngularFireAuth) { }

    async logout(): Promise<void> {
        await this.afAuth.signOut();
    }

    login(email: string, password: string): Promise<any> {
        return this.afAuth.signInWithEmailAndPassword(email, password);
    }

    createUser(email: string, password: string) {
        return this.afAuth.createUserWithEmailAndPassword(email, password).then((result) => result.user);
    }

    currentUserObservable(): any {
        return this.afAuth.authState;
    }
}
