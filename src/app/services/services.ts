import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  iconColor: string;
}

@Component({
  selector: 'app-services',
  imports: [CommonModule],
  templateUrl: './services.html',
  styleUrl: './services.scss'
})
export class ServicesComponent {
  protected readonly services: Service[] = [
    {
      id: 'rpa',
      title: 'RPA & Intelligent Automation',
      description: 'Enterprise-grade automation leveraging RPA, AI, and intelligent workflows.',
      icon: 'rpa',
      iconColor: 'orange'
    },
    {
      id: 'web-dev',
      title: 'Web Application Development',
      description: 'Secure, scalable, cloud-native web applications for enterprise platforms.',
      icon: 'globe',
      iconColor: 'cyan'
    },
    {
      id: 'uiux',
      title: 'UI/UX Design',
      description: 'User-centric designs balancing usability, accessibility, and brand consistency.',
      icon: 'badge',
      iconColor: 'orange'
    },
    {
      id: 'mobile-dev',
      title: 'Mobile Application Development',
      description: 'High-performance enterprise mobile applications with seamless UX.',
      icon: 'diamond',
      iconColor: 'cyan'
    },
    {
      id: 'devops',
      title: 'DevOps Services',
      description: 'CI/CD automation, infrastructure optimization, and reliability engineering.',
      icon: 'cloud',
      iconColor: 'blue'
    },
    {
      id: 'training',
      title: 'Training & Tech Enablement',
      description: 'Hands-on enterprise training and strategic consulting for faster adoption.',
      icon: 'laptop',
      iconColor: 'orange'
    }
  ];
}
