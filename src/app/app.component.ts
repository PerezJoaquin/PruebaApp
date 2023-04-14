import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// import firebase + enviornment
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule,
    FormsModule, /*AngularFireModule.initializeApp(environment.firebaseConfig),*/
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,],
})
export class AppComponent {
  public environmentInjector = inject(EnvironmentInjector);

  constructor() {}
  usuarios = [
    { "email" : "user1@email.com",
      "pass" : "pass1"
    },
    { "email" : "juanjose@gmail.com",
    "pass" : "pass2"
    },
    { "email" : "emailemail@gmail.com",
      "pass" : "pass3"
    }
  ]

  strUsuarios = JSON.stringify(this.usuarios);

  result = localStorage.setItem("users", this.strUsuarios);

}
