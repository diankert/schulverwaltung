import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {LoginPageComponent} from './auth/login-page/login-page.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatNativeDateModule, MatOptionModule} from '@angular/material/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {AppRoutingModule} from './app-routing.module';
import {StartSeiteComponent} from './startseite/start-seite.component';
import {MatBadgeModule} from '@angular/material/badge';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {BenutzerAnzeigen} from './startseite/benutzer-anzeigen/benutzer-anzeigen.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {RouterModule} from '@angular/router';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {HttpClientModule} from '@angular/common/http';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {PruefungsuebersichtComponent} from './pruefungsuebersicht/pruefungsuebersicht.component';
import {KursplanComponent} from './kursplan/kursplan.component';
import {IonicModule} from '@ionic/angular';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {TeilnehmerAnlegenComponent} from './neuen-user-anlegen/teilnehmer-anlegen/teilnehmer-anlegen.component';
import {EinKursComponent} from './startseite/ein-kurs/ein-kurs.component';
import {MeineDatenComponent} from './startseite/meine-daten/meine-daten.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {CalendarComponent} from './shared/calendar/calendar.component';
import {registerLocaleData} from '@angular/common';
import localeDe from '@angular/common/locales/de';
import {DozentenanlegenComponent} from './neuen-user-anlegen/dozentenanlegen/dozentenanlegen.component';
import {CheckbocktreeComponent} from './checkboxtree/checkbocktree.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTreeModule} from '@angular/material/tree';
import { WochenberichteVonUserComponent } from './wochenberichte-von-user/wochenberichte-von-user.component';
import {AdminbereichComponent} from './adminbereich/adminbereich.component';
import { WochenberichteVonUserDetailComponent } from './wochenberichte-von-user/wochenberichte-von-user-detail/wochenberichte-von-user-detail.component';
import { WochenberichteVonUserCreateComponent } from './wochenberichte-von-user/wochenberichte-von-user-create/wochenberichte-von-user-create.component';
import { WochenberichteVonUserEditComponent } from './wochenberichte-von-user/wochenberichte-von-user-edit/wochenberichte-von-user-edit.component';
import { NeuenUserAnlegenComponent } from './neuen-user-anlegen/neuen-user-anlegen.component';
import { WochenberichtVonUserInhaltComponent } from './wochenberichte-von-user/wochenbericht-von-user-inhalt/wochenbericht-von-user-inhalt.component';
import { InhaltVonTagAnzeigenComponent } from './wochenberichte-von-user/inhalt-von-tag-anzeigen/inhalt-von-tag-anzeigen.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatPaginatorModule} from '@angular/material/paginator';
import {DialogWochenberichtHinzugefuegt} from './wochenberichte-von-user/wochenberichte-von-user-create/dialog-wochenbericht-hinzugefuegt/dialog-wochenbericht-hinzugefuegt';
import {DialogWochenberichtGeloscht} from './wochenberichte-von-user/wochenberichte-von-user-create/dialog-wochenbericht-geloscht/dialog-wochenbericht-geloscht';
import { PageListComponent } from './page-list/page-list.component';
import { TemplateTodoComponent } from './_template/template-todo/template-todo.component';
import { TemplateTodoFormComponent } from './_template/template-todo-form/template-todo-form.component';
import { TemplateHeaderComponent } from './_template/template-header/template-header.component';


registerLocaleData(localeDe);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginPageComponent,
    StartSeiteComponent,
    BenutzerAnzeigen,
    PruefungsuebersichtComponent,
    KursplanComponent,
    TeilnehmerAnlegenComponent,
    EinKursComponent,
    MeineDatenComponent,
    CalendarComponent,
    DozentenanlegenComponent,
    CheckbocktreeComponent,
    WochenberichteVonUserComponent,
    AdminbereichComponent,
    WochenberichteVonUserDetailComponent,
    WochenberichteVonUserCreateComponent,
    WochenberichteVonUserEditComponent,
    NeuenUserAnlegenComponent,
    WochenberichtVonUserInhaltComponent,
    InhaltVonTagAnzeigenComponent,
    DialogWochenberichtHinzugefuegt,
    DialogWochenberichtGeloscht,
    PageListComponent,
    TemplateTodoComponent,
    TemplateTodoFormComponent,
    TemplateHeaderComponent


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
        IonicModule,
        MatSidenavModule,
        MatListModule,
        ReactiveFormsModule,
        MatNativeDateModule,
        MatButtonToggleModule,
        MatCheckboxModule,
        MatTreeModule,
        MatDialogModule,
        MatPaginatorModule,


    ],
  providers: [
    {provide: LOCALE_ID, useValue: 'de'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
