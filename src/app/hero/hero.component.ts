import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  
  
  constructor(private heroService: HeroService) { }

  ngOnInit(): void {

  }

  onBaba(){
    this.heroService.setSomething("Baba");
  }
  onMama(){
    this.heroService.setSomething("Mama");
  }

}
