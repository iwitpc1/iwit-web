import { Component } from '@angular/core';
import { NgClass } from '../../../node_modules/@angular/common/types/_common_module-chunk';

interface TechFeature {
  id: string;
  title: string;
  description: string;
  iconUrl: string;
}

interface TechIcon {
  id: string;
  name: string;
  logoSrc: string;
}

@Component({
  selector: 'app-tech-stack',
  templateUrl: './tech-stack.html',
  styleUrl: './tech-stack.scss',
})
export class TechStackComponent {
  protected readonly techIcons: TechIcon[] = [
    {
      id: 'angular',
      name: 'Angular',
      logoSrc: 'assets/tech-stack/angular.svg',
    },
    {
      id: 'google-cloud',
      name: 'Google Cloud',
      logoSrc: 'assets/tech-stack/google-cloud.svg',
    },
    {
      id: 'azure',
      name: 'Azure',
      logoSrc: 'assets/tech-stack/azure.svg',
    },
    {
      id: 'figma',
      name: 'Figma',
      logoSrc: 'assets/tech-stack/figma.svg',
    },
    {
      id: 'automation-anywhere',
      name: 'Automation Anywhere',
      logoSrc: 'assets/tech-icons/automation-anywhere.svg',
    },
    {
      id: 'uipath',
      name: 'UIPath',
      logoSrc: 'assets/tech-icons/uipath.svg',
    },
    {
      id: 'css',
      name: 'CSS',
      logoSrc: 'assets/tech-stack/css.svg',
    },
    {
      id: 'docker',
      name: 'Docker',
      logoSrc: 'assets/tech-stack/docker.svg',
    },
  ];

  protected readonly features: TechFeature[] = [
    {
      id: 'automation',
      title: 'Automation Accelerators',
      description: 'Reusable RPA frameworks to fast-track enterprise automation.',
      iconUrl: 'assets/automation-accelerator.svg',
    },
    {
      id: 'ai-processing',
      title: 'AI Document Processing',
      description: 'GenAI-powered document extraction and validation platform.',
      iconUrl: 'assets/ai-document-processing.svg',
    },
    {
      id: 'insights',
      title: 'Enterprise Insights Dashboard',
      description: 'Operational analytics dashboards for leadership visibility.',
      iconUrl: 'assets/enterprise-insights-dashboard.svg',
    },
  ];
}
