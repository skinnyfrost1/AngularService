import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service'

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  message:string[];

  constructor(private heroService:HeroService) { }

  ngOnInit(): void {
    this.heroService.getSomething().subscribe(hero =>{
      this.message = hero;
    })

    // this.message = this.heroService.getSomething1();
  }

}
