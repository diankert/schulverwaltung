import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginPageComponent } from './auth/login-page/login-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatOptionModule} from '@angular/material/core';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {AppRoutingModule} from './app-routing.module';
import { HelloComponent } from './hello/hello.component';
import { MainComponent } from './main/main.component';
import { MatBadgeModule} from '@angular/material/badge';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import { ShowUserComponent } from './show-user/show-user.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {RouterModule} from '@angular/router';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import { PostfachComponent } from './postfach/postfach.component';
import { InformationenComponent } from './informationen/informationen.component';
import {HttpClientModule} from '@angular/common/http';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NotenuebersichtComponent } from './notenuebersicht/notenuebersicht.component';
import { KursuebersichtComponent } from './kursuebersicht/kursuebersicht.component';
import { UserComponent } from './user/user.component';
import { AdminansichtComponent } from './adminansicht/adminansicht.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginPageComponent,
    HelloComponent,
    MainComponent,
    ShowUserComponent,
    PostfachComponent,
    InformationenComponent,
    NotenuebersichtComponent,
    KursuebersichtComponent,
    UserComponent,
    AdminansichtComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatOptionModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    AppRoutingModule,
    MatBadgeModule,
    MatCardModule,
    MatMenuModule,
    MatDatepickerModule,
    RouterModule,
    MatExpansionModule,
    MatTableModule,
    MatTabsModule,
    HttpClientModule,
    MatProgressSpinnerModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
