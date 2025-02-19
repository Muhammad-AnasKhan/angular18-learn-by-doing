import { Routes } from '@angular/router';
import { AttributeDirComponent } from './components/04-directives/attribute-dir/attribute-dir.component';
import { StructuralDirComponent } from './components/04-directives/structural-dir/structural-dir.component';
import { DataBindingComponent } from './components/03-data-binding/data-binding.component';
import { IfElseComponent } from './components/05-control-flow/if-else/if-else.component';
import { ForSwitchComponent } from './components/05-control-flow/for-switch/for-switch.component';
import { PipeComponent } from './components/06-pipe/pipe.component';
import { TemplateFormsComponent } from './components/07-forms/template-forms/template-forms.component';
import { ReactiveFormsComponent } from './components/07-forms/reactive-forms/reactive-forms.component';
import { GetAPIComponent } from './components/08-API/get-api/get-api.component';
import { PostApiComponent } from './components/08-API/post-api/post-api.component';
import { ParentComponent } from './components/09-InputOutput/parent/parent.component';
import { ComponentLifecycleComponent } from './components/10-component-lifecycle/component-lifecycle.component';
import { NgTemplateComponent } from './components/11-ng-templates/ng-template/ng-template.component';
import { NgContainerComponent } from './components/12-ng-container/ng-container.component';
import { ViewChildComponent } from './components/13-Decorators/view-child/view-child.component';
import { LoginComponent } from './components/14-login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './components/home/home.component';
import { authGuard } from './services/auth-guard/auth.guard';
import { GuardsComponent } from './components/15-guards/guards.component';
import { SignalsComponent } from './components/16-signals/signals.component';
import { SubjectBehaviourSubjectComponent } from './components/17-Observable/subject-behaviour-subject/subject-behaviour-subject.component';
import { ObservableComponent } from './components/17-Observable/observable/observable.component';

export const routes: Routes = [
    {
        path:"",
        redirectTo:"login",
        pathMatch:"full"
    },
    {
        path:"login",
        component:LoginComponent
    },
    {
        path:"",
        component:LayoutComponent,
        children:[
            {
                path:"home",
                component:HomeComponent,
                canActivate:[authGuard]
            },
            {
                path:"attr-directive",
                component:AttributeDirComponent
            },
            {
                path:"str-directive",
                component:StructuralDirComponent
            },
            {
                path:"data-binding",
                component:DataBindingComponent
            },
            {
                path:"app-if-else",
                component:IfElseComponent
            },
            {
                path:"app-for-switch",
                component:ForSwitchComponent
            },
            {
                path:"app-pipe",
                component:PipeComponent
            },
            {
                path:"app-template-forms",
                component:TemplateFormsComponent
            },
            {
                path:"app-reactive-forms",
                component:ReactiveFormsComponent
            },
            {
                path:"app-get-api",
                component:GetAPIComponent
            },
            {
                path:"app-post-api",
                component:PostApiComponent
            },
            {
                path:"parent",
                component:ParentComponent
            },
            {
                path:"app-component-lifecycle",
                component:ComponentLifecycleComponent
            },
            {
                path:"app-ng-template",
                component:NgTemplateComponent
            },
            {
                path:"app-ng-container",
                component:NgContainerComponent
            },
            {
                path:"app-view-child",
                component:ViewChildComponent
            },
            {
                path:"guards",
                component:GuardsComponent
            },
            {
                path:"signals",
                component:SignalsComponent
            },
            {
                path:"observable",
                component:ObservableComponent
            },
            {
                path:"app-subject-behaviour-subject",
                component:SubjectBehaviourSubjectComponent
            },
        ]
    },
    
];
