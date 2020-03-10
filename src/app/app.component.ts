import {Component} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {Router, ActivatedRoute, NavigationEnd, Event} from '@angular/router';
import { AppState } from './app.service';
import { RestUtils } from './dao/rest/rest.http.dao';

declare var jQuery: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'app works!';

  constructor(private titleService: Title, 
    router: Router,
     activatedRoute: ActivatedRoute,
      private _appState: AppState,
      private restUtils: RestUtils) {
        
    this.restUtils.setAppState(this._appState);
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const title = this.getTitle(router.routerState, router.routerState.root).join(' | ');
        titleService.setTitle(title);
      }
    });
  }

  getTitle(state, parent) {
    const data = [];
    if (parent && parent.snapshot.data && parent.snapshot.data.title) {
      data.push(parent.snapshot.data.title);
    }

    if (state && parent) {
      data.push(... this.getTitle(state, state.firstChild(parent)));
    }
    return data;
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}
