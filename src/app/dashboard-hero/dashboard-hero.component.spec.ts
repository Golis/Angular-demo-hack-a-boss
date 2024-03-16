import { Hero } from 'src/models/hero';
import { DashboardHeroComponent } from './dashboard-hero.component';
import { first } from 'rxjs';

describe('DashboardHeroComponent', () => {
  it('raises the selected event when clicked', () => {
    const comp = new DashboardHeroComponent();
    const hero: Hero = { id: 42, name: 'Test' };
    comp.hero = hero;
  
    comp.selected.pipe(first()).subscribe((selectedHero: Hero) => expect(selectedHero).toBe(hero));
    comp.click();
  });
});
