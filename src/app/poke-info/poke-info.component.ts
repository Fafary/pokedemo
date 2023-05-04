import { Component, Input, OnInit } from '@angular/core';
import { PokeShareInfoService } from '../poke-share-info.service';
import { PokeInfo } from '../pokemon';

@Component({
  selector: 'app-poke-info',
  templateUrl: './poke-info.component.html',
  styleUrls: ['./poke-info.component.css'],
  providers: []
})

export class PokeInfoComponent implements OnInit{

  @Input('info')
  info!: PokeInfo;

  constructor(private pokeShareInfoService: PokeShareInfoService){
    this.pokeShareInfoService.getValue().subscribe(e => console.log(' e' + e))
  }

  ngOnInit(): void {}

}
