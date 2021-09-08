import { Component, OnInit } from '@angular/core';
import * as albumData from '../data/SearchResultsAlbums.json';
import * as artistData from '../data/SearchResultsArtist.json';

@Component({
  selector: 'app-artist-discography',
  templateUrl: './artist-discography.component.html',
  styleUrls: ['./artist-discography.component.css']
})
export class ArtistDiscographyComponent implements OnInit {
  albums: any = albumData.albums.items;
  artist: any = artistData;
  artistData: any = artistData;
  

  constructor() { }

  ngOnInit(): void {
    this.artistData = JSON.stringify(this.artistData.default);
    this.artist = JSON.parse(this.artistData);

  }

}
