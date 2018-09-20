 import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GuestNavComponent } from './guest-nav/guest-nav.component';
import { AboutComponent } from './guest-nav/about/about.component';
import { SupportComponent } from './guest-nav/support/support.component';
import { PrivacyComponent } from './guest-nav/privacy/privacy.component';
import { GuestDashComponent } from './guest-nav/guest-dash/guest-dash.component';
import { LoginComponent } from './join-comp/login/login.component';
import { TailorViewComponent } from './homepages/tailor-view/tailor-view.component';
import { TailorHomeComponent } from './homepages/tailor-view/tailor-home/tailor-home.component';
import { RegComponent } from './join-comp/reg/reg.component';
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
import { ChatboxComponent } from './homepages/customer-view/inbox/chatbox/chatbox.component';

import { NotificationComponent } from './homepages/customer-view/notification/notification.component';
import { DashboardComponent } from './homepages/customer-view/dashboard/dashboard.component';
import { DashboardhomeComponent } from './homepages/customer-view/dashboard/dashboardhome/dashboardhome.component';

import { CategoriesComponent } from './homepages/customer-view/categories/categories.component';
import { FabricsComponent } from './homepages/customer-view/categories/fabrics/fabrics.component';
import { DenimComponent } from './homepages/customer-view/categories/fabrics/denim/denim.component';
import { ProductDescriptionComponent } from './homepages/customer-view/product-description/product-description.component';

const appRoutes:Routes = [
  {
    path:'',
    component: GuestNavComponent
  },
  {
    path:'dashboard',
     component:DashboardComponent
  },
  {
    path:'about',
    component: AboutComponent
  },
  {
    path:'support',
    component: SupportComponent
  },
  {
    path:'policy',
    component: PrivacyComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'tailor',
    component: TailorViewComponent
  },
  {
    path:'reg',
    component:RegComponent
  },
  {
    path:'forgot',
     component:ForgotComponent
  },
  {
    path:'inbox',
     component:InboxComponent
  },
  {
    path:'profile',
    component: ProfileComponent
  },
  {
    path:'client',
    component: ClientComponent
  },
  {
    path:'details',
    component: DetailsComponent
  },
  {
    path:'my-services',
    component:MyServicesComponent
  },
  {
    path:'manage',
    component:ManageComponent
  },
  {
    path:'job',
    component:ManageJobComponent
  },
{
    path:'settings',
    component: SettingsComponent
  },
  {
    path:'notifications',
    component: NotificationComponent
  },
  {
    path:'dashboardhome',
    component:DashboardhomeComponent
    
  },
  {
    path:'chat',
     component:ChatboxComponent
  },
  {
    path:'categories',
     component:CategoriesComponent
  },
  {
    path:'fabrics',
     component:FabricsComponent
  },
  {
    path:'denim',
     component:DenimComponent
  },
  {
    path:'product-description',
     component:ProductDescriptionComponent
  },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports:[ RouterModule ]
  })
export class AppRoutingModule { }
