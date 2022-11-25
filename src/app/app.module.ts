import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './main/about/about.component';
import { ServicesComponent } from './main/services/services.component';
import { FeaturedComponent } from './main/featured/featured.component';
import { WhyUsComponent } from './main/why-us/why-us.component';
import { PortfolioComponent } from './main/portfolio/portfolio.component';
import { TestimonialsComponent } from './main/testimonials/testimonials.component';
import { ClientsComponent } from './main/clients/clients.component';
import { TeamComponent } from './main/team/team.component';
import { PricingComponent } from './main/pricing/pricing.component';
import { FaqComponent } from './main/faq/faq.component';
import { ContactComponent } from './main/contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    ServicesComponent,
    FeaturedComponent,
    WhyUsComponent,
    PortfolioComponent,
    TestimonialsComponent,
    ClientsComponent,
    TeamComponent,
    PricingComponent,
    FaqComponent,
    ContactComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
