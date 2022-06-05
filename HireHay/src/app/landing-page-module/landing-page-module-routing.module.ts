import { SignInComponent } from './components/signin.component';
import { LandingPageRouting } from './landing-page-module.router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { LandingPageModuleComponent } from './landing-page-module.component';

@NgModule({
    imports: [CommonModule,FormsModule,LandingPageRouting],
    exports: [LandingPageModuleComponent],
    declarations: [LandingPageModuleComponent,SignInComponent],
    providers: [],
})
export class LandingPageModule { }
