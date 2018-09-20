
import { BrowserModule } from '@angular/platform-browser';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import { ReactiveFormsModule,} from '@angular/forms'

import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
  MatFormFieldModule, 
} from '@angular/material';
import {BehaviorSubject} from 'rxjs';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GuestNavComponent } from './guest-nav/guest-nav.component';
import { JoinCompComponent } from './join-comp/join-comp.component';
import { CustomerViewComponent } from './homepages/customer-view/customer-view.component';
import { TailorViewComponent } from './homepages/tailor-view/tailor-view.component';
import { AboutComponent } from './guest-nav/about/about.component';
import { SupportComponent } from './guest-nav/support/support.component';
import { PrivacyComponent } from './guest-nav/privacy/privacy.component';
import { GuestDashComponent } from './guest-nav/guest-dash/guest-dash.component';
import { AppRoutingModule } from './/app-routing.module';
import { TailorHomeComponent } from './homepages/tailor-view/tailor-home/tailor-home.component';
import { LoginComponent } from './join-comp/login/login.component';
import { SidenavComponent } from './homepages/tailor-view/sidenav/sidenav.component';
import { RegComponent } from './join-comp/reg/reg.component';
import { FormsModule,  } from '@angular/forms';
import { ForgotComponent } from './join-comp/forgot/forgot.component';
import { InboxComponent } from './homepages/customer-view/inbox/inbox.component';
import { SettingsComponent } from './homepages/tailor-view/settings/settings.component';
import { ProfileComponent } from './homepages/tailor-view/profile/profile.component';
import { ClientComponent } from './homepages/tailor-view/client/client.component';
import { DetailsComponent } from './homepages/tailor-view/details/details.component';
import { MyServicesComponent } from './homepages/tailor-view/my-services/my-services.component';
import { ManageComponent } from './homepages/tailor-view/manage/manage.component';
import { ManageJobComponent } from './homepages/tailor-view/manage/manage-job/manage-job.component';
import { EarningComponent } from './homepages/tailor-view/earning/earning.component';
import { DashboardSupportComponent } from './homepages/tailor-view/dashboard-support/dashboard-support.component';

import { NotificationComponent } from './homepages/customer-view/notification/notification.component';
import { DashboardComponent } from './homepages/customer-view/dashboard/dashboard.component';
import { DashboardhomeComponent } from './homepages/customer-view/dashboard/dashboardhome/dashboardhome.component';
import { ChatboxComponent } from './homepages/customer-view/inbox/chatbox/chatbox.component';
import { DatasetService } from './dataset.service';

import { CategoriesComponent } from './homepages/customer-view/categories/categories.component';
import { FabricsComponent } from './homepages/customer-view/categories/fabrics/fabrics.component';
import { DenimComponent } from './homepages/customer-view/categories/fabrics/denim/denim.component';
import { ProductDescriptionComponent } from './homepages/customer-view/product-description/product-description.component';
@NgModule({
  declarations: [
    AppComponent,
    GuestNavComponent,
    JoinCompComponent,
    CustomerViewComponent,
    TailorViewComponent,
    AboutComponent,
    SupportComponent,
    PrivacyComponent,
    GuestDashComponent,
    TailorHomeComponent,
    LoginComponent,
    RegComponent,
    ForgotComponent,
    InboxComponent,
    SettingsComponent,
    ProfileComponent,
    ClientComponent,
    DetailsComponent,
    MyServicesComponent,
    ManageComponent,
    ManageJobComponent,
    EarningComponent,
    DashboardSupportComponent,
    SidenavComponent,
    NotificationComponent,
    DashboardComponent,
    DashboardhomeComponent,
    ChatboxComponent,
    CategoriesComponent,
    FabricsComponent,
    DenimComponent,
    ProductDescriptionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
     MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
  MatFormFieldModule,
  FormsModule,
  BrowserModule,
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule,
  ],
  exports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
     MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
  MatFormFieldModule,
  BrowserModule,
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule,
  ],
  entryComponents: [],
  providers: [DatasetService],
  bootstrap: [AppComponent]
})
export class AppModule { };

platformBrowserDynamic().bootstrapModule(AppModule);
