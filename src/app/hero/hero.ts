import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class HeroComponent implements OnInit {
  protected uptimeValue = signal('0');
  protected ratingValue = signal('0');
  protected deployedValue = signal('0');
  protected animationComplete = signal(false);

  ngOnInit(): void {
    // Start animations after a small delay for better visual effect
    setTimeout(() => this.animateStats(), 100);
  }

  private animateStats(): void {
    const duration = 2000; // 2 seconds animation
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Animate uptime (99.9%)
      const uptimeTarget = 99.9;
      const uptimeAnimated = (uptimeTarget * progress).toFixed(1);
      this.uptimeValue.set(parseFloat(uptimeAnimated) === uptimeTarget ? '99.9' : uptimeAnimated);

      // Animate rating (4.8)
      const ratingTarget = 4.8;
      const ratingAnimated = (ratingTarget * progress).toFixed(1);
      this.ratingValue.set(parseFloat(ratingAnimated) === ratingTarget ? '4.8' : ratingAnimated);

      // Animate deployed (10k+)
      const deployedTarget = 10;
      const deployedAnimated = Math.floor(deployedTarget * progress);
      this.deployedValue.set(
        deployedAnimated === deployedTarget ? '10k+' : deployedAnimated + 'k+',
      );

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        this.animationComplete.set(true);
      }
    };

    requestAnimationFrame(animate);
  }
}
