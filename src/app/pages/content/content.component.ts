import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  photoCover: string = '';
  contentTitle: string = '';
  contentDescription: string = '';
  private id: string | null = '0';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    //Recuperando parâmetro da url.
    this.route.paramMap.subscribe((value) => (this.id = value.get('id'))); // através do ActivatedRoute consigo acessar a rota.
    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id: string | null) {
    //Filtrando o parâmetro dos dataFake.
    const result = dataFake.filter(
      article =>
        // artcle.id: id do dataFake.ts
        article.id.toString() == id
    )[0];
    
    this.contentTitle = result.title;
    this.contentDescription = result.description;
    this.photoCover = result.photoCover;
    // this.contentTitle = result.title;
  }
}
