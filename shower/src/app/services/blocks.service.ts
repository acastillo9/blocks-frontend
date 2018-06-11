import { Injectable } from '@angular/core';
import { Block } from '../common/block';
import { Observable } from 'rxjs/Observable';
import { RestangularModule, Restangular } from 'ngx-restangular';

@Injectable()
export class BlocksService {

  constructor(private restangular: Restangular) { }

  getAll(): Observable<Block[]> {
    return this.restangular.all('block').getList();
  }

  getByName(name: string): Observable<Block> {
    return this.restangular.one('block/byname', name).get();
  }

}
