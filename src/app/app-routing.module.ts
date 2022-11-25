import { NotfoundComponent } from './notfound/notfound.component';
import { ContactComponent } from './main/contact/contact.component';
import { FaqComponent } from './main/faq/faq.component';
import { PricingComponent } from './main/pricing/pricing.component';
import { TeamComponent } from './main/team/team.component';
import { ClientsComponent } from './main/clients/clients.component';
import { TestimonialsComponent } from './main/testimonials/testimonials.component';
import { PortfolioComponent } from './main/portfolio/portfolio.component';
import { WhyUsComponent } from './main/why-us/why-us.component';
import { FeaturedComponent } from './main/featured/featured.component';
import { ServicesComponent } from './main/services/services.component';
import { AboutComponent } from './main/about/about.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:"about",component : AboutComponent},
  {path:"services",component : ServicesComponent},
  {path:"portfolio",component : PortfolioComponent},
  {path:"team",component : TeamComponent},
  {path:"pricing",component : PricingComponent},
  {path:"contact",component : ContactComponent},
  {path:"notfound",component : NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
