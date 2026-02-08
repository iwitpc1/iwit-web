import { Component } from '@angular/core';

interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-useful-features',
  imports: [],
  templateUrl: './useful-features.html',
  styleUrl: './useful-features.scss'
})
export class UsefulFeaturesComponent {
  protected readonly features: Feature[] = [
    {
      id: 'quality-code',
      title: 'Quality Code',
      description: 'Code structure that all developers will easily understand and fall in love with.',
      icon: 'laptop'
    },
    {
      id: 'continuous-updates',
      title: 'Continuous Updates',
      description: 'Free updates for the next 12 months, including new demos and features.',
      icon: 'rocket'
    },
    {
      id: 'starter-kit',
      title: 'Starter Kit',
      description: 'Start your project quickly without having to remove unnecessary features.',
      icon: 'paper-plane'
    },
    {
      id: 'api-ready',
      title: 'API Ready',
      description: 'Just change the endpoint and see your own data loaded within seconds.',
      icon: 'badge'
    },
    {
      id: 'excellent-support',
      title: 'Excellent Support',
      description: 'An easy-to-follow doc with lots of references and code examples.',
      icon: 'user'
    },
    {
      id: 'well-documented',
      title: 'Well Documented',
      description: 'An easy-to-follow doc with lots of references and code examples.',
      icon: 'document'
    }
  ];
}
