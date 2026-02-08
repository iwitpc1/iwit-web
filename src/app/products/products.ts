import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  logo?: string;
}

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrl: './products.scss'
})
export class ProductsComponent {
  protected readonly products: Product[] = [
    {
      id: 'analytics',
      name: 'Analytics Dashboard',
      description: 'Comprehensive analytics and reporting tools.',
      image: 'assets/product-analytics.png'
    },
    {
      id: 'kasebook',
      name: 'KaseBook',
      description: 'Assign. Track. Respond. Manage Cases with Total Clarity.',
      image: 'assets/kasebook-laptop.png',
      logo: 'assets/kasebook-logo.png'
    },
    {
      id: 'design-tools',
      name: 'Design Tools',
      description: 'Professional design and prototyping solutions.',
      image: 'assets/product-design.png'
    }
  ];

  protected currentSlide = signal(1); // Start with KaseBook (middle card)

  nextSlide(): void {
    const current = this.currentSlide();
    this.currentSlide.set(current >= this.products.length - 1 ? 0 : current + 1);
  }

  prevSlide(): void {
    const current = this.currentSlide();
    this.currentSlide.set(current <= 0 ? this.products.length - 1 : current - 1);
  }

  goToSlide(index: number): void {
    this.currentSlide.set(index);
  }
}
