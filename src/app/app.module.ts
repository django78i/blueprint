import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortfolioViewComponent } from './portfolio-view/portfolio-view.component';
import { PortfolioService } from './services/portfolio.service';
import { MenuService } from './services/menu.service';
import { PortfolioThumbComponent } from './portfolio-thumb/portfolio-thumb.component';
import { PortfolioFormComponent } from './portfolio-form/portfolio-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BestPortfoliosComponent } from './best-portfolios/best-portfolios.component';
import { NavigationHeaderComponent } from './navigation-header/navigation-header.component';
import { WorkflowComponent } from './workflow/workflow.component';
import { GetInTouchComponent } from './get-in-touch/get-in-touch.component';
import { ProjectPageComponent } from './project-page/project-page.component';
import { RowProjectContentComponent } from './row-project-content/row-project-content.component';
import { MatNavHeaderComponent } from './mat-nav-header/mat-nav-header.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { ParallaxScrollModule } from 'ng2-parallaxscroll';
import { ParallaxDirective } from './parallax.directive';
import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreModule, } from '@angular/fire/firestore';
import { AngularFireFunctionsModule, REGION } from '@angular/fire/functions';
import { WorkflowPageComponent } from './workflow-page/workflow-page.component';
import { CarouselHomeComponent } from './carousel-home/carousel-home.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule, } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ServicesPageComponent } from './services-page/services-page.component';
import { ArticlesliderComponent } from './articleslider/articleslider.component';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { FooterComponent } from './footer/footer.component';
import { ProjectListPageComponent } from './project-list-page/project-list-page.component';
import { RowMediaTextComponent } from './row-media-text/row-media-text.component';
import { ParallaxTemplateComponent } from './parallax-template/parallax-template.component';
import { MediaOnlyComponent } from './media-only/media-only.component';
import { StatsRowComponent } from './stats-row/stats-row.component';
import { TextsOnlyComponent } from './texts-only/texts-only.component';

export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    AppComponent,
    PortfolioViewComponent,
    PortfolioThumbComponent,
    PortfolioFormComponent,
    BestPortfoliosComponent,
    NavigationHeaderComponent,
    WorkflowComponent,
    GetInTouchComponent,
    ProjectPageComponent,
    RowProjectContentComponent,
    MatNavHeaderComponent,
    ParallaxDirective,
    WorkflowPageComponent,
    CarouselHomeComponent,
    ServicesPageComponent,
    ArticlesliderComponent,
    FooterComponent,
    ProjectListPageComponent,
    RowMediaTextComponent,
    ParallaxTemplateComponent,
    MediaOnlyComponent,
    StatsRowComponent,
    TextsOnlyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgbModule,
    MatCheckboxModule,
    MatGridListModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    MatChipsModule,
    LayoutModule,
    MatSidenavModule,
    ParallaxScrollModule,
    AnimateOnScrollModule.forRoot(),
    MatListModule,
    LottieModule.forRoot({ player: playerFactory }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireFunctionsModule,
    CarouselModule,
    CdkStepperModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgxUsefulSwiperModule
  ],
  providers: [
    PortfolioService,
    { provide: REGION, useValue: 'europe-west6' },
    MatDatepickerModule,
    MenuService
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
