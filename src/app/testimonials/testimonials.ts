import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Testimonial {
  id: string;
  company: string;
  logo: string;
  quote: string;
  rating: number;
  author: {
    name: string;
    title: string;
    avatar: string;
  };
}

@Component({
  selector: 'app-testimonials',
  imports: [CommonModule],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss'
})
export class TestimonialsComponent {
  protected readonly testimonials: Testimonial[] = [
    {
      id: 'airbnb',
      company: 'Airbnb',
      logo: 'airbnb',
      quote: "Vuexy is hands down the most useful front end Bootstrap theme I've ever used. I can't wait to use it again for my next project.",
      rating: 5,
      author: {
        name: 'Cecilia Payne',
        title: 'CEO of Airbnb',
        avatar: 'https://i.pravatar.cc/150?img=5'
      }
    },
    {
      id: 'hubspot',
      company: 'HubSpot',
      logo: 'hubspot',
      quote: "I've never used a theme as versatile and flexible as Vuexy. It's my go to for building dashboard sites on almost any project.",
      rating: 5,
      author: {
        name: 'Eugenia Moore',
        title: 'Founder of Hubspot',
        avatar: 'https://i.pravatar.cc/150?img=10'
      }
    },
    {
      id: 'dribbble',
      company: 'Dribbble',
      logo: 'dribbble',
      quote: "This template is really clean & well documented. The docs are really easy to understand and it's always easy to find a screenshot from their website.",
      rating: 5,
      author: {
        name: 'Curtis Fletcher',
        title: 'Design Lead at Dribbble',
        avatar: 'https://i.pravatar.cc/150?img=12'
      }
    }
  ];

  protected currentSlide = signal(0);

  nextSlide(): void {
    const current = this.currentSlide();
    this.currentSlide.set(current >= this.testimonials.length - 1 ? 0 : current + 1);
  }

  prevSlide(): void {
    const current = this.currentSlide();
    this.currentSlide.set(current <= 0 ? this.testimonials.length - 1 : current - 1);
  }

  getVisibleTestimonials(): Testimonial[] {
    const current = this.currentSlide();
    return [
      this.testimonials[current],
      this.testimonials[(current + 1) % this.testimonials.length],
      this.testimonials[(current + 2) % this.testimonials.length]
    ];
  }
}
