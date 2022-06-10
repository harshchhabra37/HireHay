import { LandingPageModuleComponent } from './landing-page-module.component';
import { RouterModule,Routes } from "@angular/router";
import { SignInComponent } from "./components/signin.component";
import { SignUpComponent } from './components/signup.component';

export const customRoutes:Routes=[
    { path:"",component:LandingPageModuleComponent },
    { path:"signin",component:SignInComponent },
    { path:"signup",component:SignUpComponent }
]

export const LandingPageRouting=RouterModule.forRoot(customRoutes)
