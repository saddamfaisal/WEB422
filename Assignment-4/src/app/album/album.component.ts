import { Component, OnInit } from '@angular/core';
import * as data from '../data/SearchResultsAlbum.json';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  data: any = data;
  album: any = data;
  constructor() { }

  ngOnInit(): void {
    this.data = JSON.stringify(this.data.default);
    this.album = JSON.parse(this.data);
  }

}
