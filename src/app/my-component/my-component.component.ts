import { Component, OnInit } from '@angular/core';
import { PokeAPIServiceService } from '../poke-apiservice.service';
import { PokeShareInfoService } from '../poke-share-info.service';
import { PokeInfo, Pokemon } from '../pokemon';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css'],
  providers: [PokeAPIServiceService]
})

export class MyComponentComponent implements OnInit{
  nom: string = '';
  selectedPokeId: string = '';
  filterPokemon = '';
  pokemons: Pokemon[] = [];
  pokeInfo: PokeInfo | undefined;

  constructor(private pokeService: PokeAPIServiceService,
    private pokeShareInfoService: PokeShareInfoService){
  }

  ngOnInit(): void {
    this.pokeService.getPokemons().subscribe((data) => {
      data.results.forEach((e, index) => {
        this.pokemons.push(new Pokemon((index+1).toString(), e.name, e.url));
      });
    });
  }

  go() {
    if(this.selectedPokeId != ''){
      this.pokeService.getPokemonInfo(this.selectedPokeId).subscribe(data => {
        this.pokeInfo = data;
        this.pokeShareInfoService.setValue(this.selectedPokeId);
      });
    }
  }

}
