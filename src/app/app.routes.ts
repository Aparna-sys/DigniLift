import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ResourcesComponent } from './components/resources/resources.component';
import { SuccessStoriesComponent } from './components/success-stories/success-stories.component';

export const routes: Routes = [
    {path:'login',component:LoginComponent},
    {path:'profile',component:ProfileComponent},
    {path:'resources',component:ResourcesComponent},
    {path:'success-stories',component:SuccessStoriesComponent},
    {path:'',redirectTo:'/login',pathMatch:'full'},
];
