import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';

import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule,MatCardModule,MatDividerModule,MatGridListModule,MatTabsModule,MatToolbarModule,MatMenuModule,MatPaginatorModule,MatSidenavModule} from '@angular/material';

import { AppComponent } from './app.component';
import { BackgroundComponent } from './components/background/background.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MenuComponent } from './layout/menu/menu.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostViewComponent } from './components/post-view/post-view.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContentsComponent } from './layout/contents/contents.component';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';
import { LobbyPageComponent } from './pages/lobby-page/lobby-page.component';
import { SplashPageComponent } from './pages/splash-page/splash-page.component';
import { WorksPageComponent } from './pages/works-page/works-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';






//routes goes here....

const routes: Routes = [
  {
    path: '',
    redirectTo: 'posts',
    pathMatch: 'full'
  },
  {path: 'posts', component: BlogPageComponent, children: [
    {path: '', component: PostListComponent},
    {path: ':slug', component: PostViewComponent},
  ]},
  {path: 'about', component: AboutPageComponent},
  {path: 'works', component: WorksPageComponent},
  {path: '404', component: ErrorPageComponent},
  {path: '**', redirectTo: '/404'}
];


@NgModule({
  declarations: [
    AppComponent,
    SplashPageComponent,
    BackgroundComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    PostListComponent,
    PostViewComponent,
    AboutPageComponent,
    ContentsComponent,
    BlogPageComponent,
    LobbyPageComponent,
    WorksPageComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(routes),FlexLayoutModule,BrowserAnimationsModule,HttpClientModule,MatButtonModule,MatCheckboxModule,MatCardModule,MatDividerModule,MatGridListModule,MatTabsModule,MatToolbarModule,MatMenuModule,MatPaginatorModule,MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
