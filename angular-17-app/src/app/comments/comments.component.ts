import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [],
  template: `
    <h3>Comentarios</h3>
    <img
      src="https://media.npr.org/assets/img/2023/01/14/this-is-fine_custom-dcb93e90c4e1548ffb16978a5a8d182270c872a9.jpg"
      alt="Foto this is fine meme"
    />
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
      assumenda expedita necessitatibus rerum temporibus quaerat labore beatae
      facere iste aliquid. Eum illo autem in magnam dolore similique odio ut
      tempora.
    </p>
  `,
  styles: `img {
    width: 100%;
    height: auto;
  }`,
})
export class CommentsComponent {}
