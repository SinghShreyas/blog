import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FlashMessagesModule } from  'angular2-flash-messages';
import { FormsModule } from '@angular/forms';

//AngularFire Imports
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabase} from 'angularfire2/database-deprecated';
import { AngularFireAuth } from "angularfire2/auth";

//Components Imports
import { AppComponent } from './app.component';
import { IndexComponent} from './components/index/index.component';
import { JavaComponent } from './components/java/java.component';
import { CComponent } from './components/c/c.component';
import { DbmsComponent } from './components/dbms/dbms.component';
import { AngularComponent } from './components/angular/angular.component';
import { NodeComponent } from './components/node/node.component';
import { TechnologyComponent } from './components/technology/technology.component';
import { PersonalComponent } from './components/personal/personal.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SubscribeComponent } from './components/subscribe/subscribe.component';
import { BlogPageComponent } from './components/blog-page/blog-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { OneComponent } from './model/blogs/one/one.component';
//Imports Services
import { ArticleService } from './services/article.service';

const appRoutes: Routes = [
  {path:'', component: HomePageComponent},
  {path:'sign-up', component: SignUpComponent},
  {path: 'subscribe', component: SubscribeComponent},
  {path: 'java', component: JavaComponent},
  {path: 'c', component: CComponent},
  {path: 'dbms', component: DbmsComponent},
  {path: 'angular', component: AngularComponent},
  {path: 'node', component: NodeComponent},
  {path: 'technology', component: TechnologyComponent},
  {path: 'personal', component: PersonalComponent},
  {path: 'model/blogs/one', component: OneComponent},
];

export const firebaseConfig = {
  apiKey: "AIzaSyA6D4fVlEOvvqLpcdj7bk0BjeFPAPzGIZI",
  authDomain: "blog-bb7ff.firebaseapp.com",
  databaseURL: "https://blog-bb7ff.firebaseio.com",
  storageBucket: "blog-bb7ff.appspot.com",
  messagingSenderId: "18987304198"
}

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    JavaComponent,
    CComponent,
    DbmsComponent,
    AngularComponent,
    NodeComponent,
    TechnologyComponent,
    PersonalComponent,
    SignUpComponent,
    SubscribeComponent,
    BlogPageComponent,
    HomePageComponent,
    OneComponent
   ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    FlashMessagesModule.forRoot()
  ],
  exports: [ RouterModule ],
  providers: [
    AngularFireAuth,
    AngularFireDatabase,
    ArticleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
