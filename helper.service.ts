/*
* Date: 2017-11-30
* Author: https://github.com/baldonharris
* Dependency: Angular, Underscore.js
* */

import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import * as _ from 'underscore';

@Injectable()
export class HelperService {

  private routeDataSubscriber: any;

  constructor() { }

  /*
  * @date 2017-11-30
  * @param Router
  * @param callback function
  * @description Extract data from Router.
  *   Data is passed through the callback,
  *   as well as the subscriber variable that
  *   should be chained with unsubscribe method in the callback.
  * */
  getRouteData(router: Router, cb): void {
    this.routeDataSubscriber = router.events.subscribe(
      (event) => {
        if (event instanceof NavigationEnd === true) {
          let url = event['url'].split('/')[1];
          let currentRoute = _.find(router.config, {path: url});

          if (_.has(currentRoute, 'redirectTo')) {
            url = currentRoute.redirectTo.split('/')[1];
            currentRoute = _.find(router.config, {path: url});
          }

          if (_.isFunction(cb)) {
            cb(currentRoute.data, this.routeDataSubscriber);
          }
        }
      }
    );
  }

}
