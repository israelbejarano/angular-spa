import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';



@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {

  heroe: any = {};
  constructor(private activatedRoute: ActivatedRoute, private _heroesService: HeroesService) { 
    this.activatedRoute.params.subscribe( params => {
      if(params['id']){
        this.heroe = this._heroesService.getHeroe(params['id']);
      }
      if(params['nombre']){
        this.heroe = this._heroesService.getHeroeByName(params['nombre']);
      }
      // this.heroe = this._heroesService.getHeroe(params['id']);
      console.log(this.heroe);
    });
  }

  ngOnInit() {
  }

}
