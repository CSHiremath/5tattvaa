import { Injectable } from '@angular/core';
import {DaoFactory} from './dao/dao.factory'
import {RestDaoFactory} from './dao/rest/rest.dao.factory';


export type InternalStateType = {
  [key: string]: any
};

@Injectable()
export class AppState {
  _state: InternalStateType = {};

  constructor(private _daoFactory:RestDaoFactory) {
  }
  get daoFactory():DaoFactory {
    return this._daoFactory;
  }
  // never allow mutation
  set state(value) {
    throw new Error('do not mutate the `.state` directly');
  }


  get(prop?: any) {
    // use our state getter for the clone
    const state = this._state;
    return state.hasOwnProperty(prop) ? state[prop] : null; //state;
  }

  set(prop: string, value: any) {
    // internally mutate our state
    return this._state[prop] = value;
  }

  
}
