import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { New } from './new.model';
import * as NewActions from './new.actions';
import * as NewSelectors from './new.selector';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewService {

  constructor(
    private store: Store<New>
  ) {}

  public getNews(): void {
      this.store.dispatch(NewActions.GET_NEWS());
  }

  public getNews$(): Observable<Array<New>> {
      return this.store.select(NewSelectors.getNew).pipe(
        map(news => news.map(item => {
          return Object.assign({}, item, {slug: this.slugify(item.title)});
        }))
      );
  }

  private slugify(text: string): string {
    const a = 'àáäâãåèéëêìíïîòóöôùúüûñçßÿœæŕśńṕẃǵǹḿǘẍźḧ·/_,:;'
    const b = 'aaaaaaeeeeiiiioooouuuuncsyoarsnpwgnmuxzh------'
    const p = new RegExp(a.split('').join('|'), 'g')
    return text.toString().toLowerCase()
      .replace(/\s+/g, '-') // Replace spaces with -
      .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters in a with b
      .replace(/&/g, '-and-') // Replace & with ‘and’
      .replace(/[^\w-]+/g, '') // Remove all non-word characters such as spaces or tabs
      .replace(/--+/g, '-') // Replace multiple — with single -
      .replace(/^-+/, '') // Trim — from start of text
      .replace(/-+$/, ''); // Trim — from end of text
  }
}
