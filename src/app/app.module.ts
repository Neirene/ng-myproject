import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';

import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule,MatCardModule,MatDividerModule,MatGridListModule,MatTabsModule,MatToolbarModule,MatMenuModule,MatPaginatorModule} from '@angular/material';



import { AppComponent } from './app.component';
import { SplashComponent } from './splash/splash.component';
import { BackgroundComponent } from './background/background.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostViewComponent } from './post-view/post-view.component';
import { AboutPageComponent } from './about-page/about-page.component';






//routes goes here....

const routes: Routes = [
  {
    path: '',
    redirectTo: 'posts',
    pathMatch: 'full'
  },
  {
    path: 'posts',
    component: PostListComponent
  },
  {
    path: 'posts/:slug',
    component: PostViewComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    SplashComponent,
    BackgroundComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    PostListComponent,
    PostViewComponent,
    AboutPageComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(routes),FlexLayoutModule,BrowserAnimationsModule,HttpClientModule,MatButtonModule,MatCheckboxModule,MatCardModule,MatDividerModule,MatGridListModule,MatTabsModule,MatToolbarModule,MatMenuModule,MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
