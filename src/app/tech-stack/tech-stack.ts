import { Component } from '@angular/core';

interface TechFeature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-tech-stack',
  imports: [],
  templateUrl: './tech-stack.html',
  styleUrl: './tech-stack.scss'
})
export class TechStackComponent {
  protected readonly features: TechFeature[] = [
    {
      id: 'automation',
      title: 'Automation Accelerators',
      description: 'Reusable RPA frameworks to fast-track enterprise automation.',
      icon: 'rocket'
    },
    {
      id: 'ai-processing',
      title: 'AI Document Processing',
      description: 'GenAI-powered document extraction and validation platform.',
      icon: 'brain'
    },
    {
      id: 'insights',
      title: 'Enterprise Insights Dashboard',
      description: 'Operational analytics dashboards for leadership visibility.',
      icon: 'dashboard'
    }
  ];
}
