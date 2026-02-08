import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-why-choose-us',
  imports: [CommonModule],
  templateUrl: './why-choose-us.html',
  styleUrl: './why-choose-us.scss'
})
export class WhyChooseUsComponent {
  protected readonly features: Feature[] = [
    {
      id: 'enterprise-delivery',
      title: 'Enterprise-Focused Delivery',
      description: 'We design and deliver solutions tailored for complex enterprise environments. Every solution is scalable, secure, and integrates seamlessly with existing systems.',
      icon: 'enterprise'
    },
    {
      id: 'automation-ai',
      title: 'Expertise in Automation & AI',
      description: 'Our team leverages RPA, AI, Cloud, and DevOps to accelerate digital transformation. We help reduce operational costs while improving process efficiency.',
      icon: 'robot'
    },
    {
      id: 'scalable-secure',
      title: 'Scalable, Secure & Compliant',
      description: 'We build solutions that grow with your business while ensuring data security and compliance. High availability and fault tolerance are embedded in every design.',
      icon: 'rocket'
    },
    {
      id: 'knowledge-transfer',
      title: 'Knowledge Transfer & Enablement',
      description: 'We empower your teams with training, documentation, and consulting. This ensures independent management, maintenance, and scaling of solutions.',
      icon: 'plane'
    }
  ];
}
