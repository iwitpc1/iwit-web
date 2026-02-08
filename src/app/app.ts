import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './hero/hero';
import { ServicesComponent } from './services/services';
import { ProductsComponent } from './products/products';
import { UsefulFeaturesComponent } from './useful-features/useful-features';
import { TestimonialsComponent } from './testimonials/testimonials';
import { AboutUsComponent } from './about-us/about-us';
import { WhyChooseUsComponent } from './why-choose-us/why-choose-us';
import { TechStackComponent } from './tech-stack/tech-stack';
import { ContactComponent } from './contact/contact';
import { FooterComponent } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeroComponent, ServicesComponent, ProductsComponent, UsefulFeaturesComponent, TestimonialsComponent, AboutUsComponent, WhyChooseUsComponent, TechStackComponent, ContactComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('iwit-web');
}
