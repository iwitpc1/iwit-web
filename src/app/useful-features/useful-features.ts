import { Component } from '@angular/core';

interface Feature {
  id: string;
  title: string;
  description: string;
  iconUrl: string;
}

@Component({
  selector: 'app-useful-features',
  imports: [],
  templateUrl: './useful-features.html',
  styleUrl: './useful-features.scss',
})
export class UsefulFeaturesComponent {
  protected readonly features: Feature[] = [
    {
      id: 'quality-code',
      title: 'Quality Code',
      description:
        'Code structure that all developers will easily understand and fall in love with.',
      iconUrl: 'assets/useful-features/quality-code.svg',
    },
    {
      id: 'continuous-updates',
      title: 'Continuous Updates',
      description: 'Free updates for the next 12 months, including new demos and features.',
      iconUrl: 'assets/useful-features/continuous-updates.svg',
    },
    {
      id: 'starter-kit',
      title: 'Starter Kit',
      description: 'Start your project quickly without having to remove unnecessary features.',
      iconUrl: 'assets/useful-features/starter-kit.svg',
    },
    {
      id: 'api-ready',
      title: 'API Ready',
      description: 'Just change the endpoint and see your own data loaded within seconds.',
      iconUrl: 'assets/useful-features/api-ready.svg',
    },
    {
      id: 'excellent-support',
      title: 'Excellent Support',
      description: 'An easy-to-follow doc with lots of references and code examples.',
      iconUrl: 'assets/useful-features/excellent-support.svg',
    },
    {
      id: 'well-documented',
      title: 'Well Documented',
      description: 'An easy-to-follow doc with lots of references and code examples.',
      iconUrl: 'assets/useful-features/well-documented.svg',
    },
  ];
}
