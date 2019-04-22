import { Injectable, EventEmitter } from '@angular/core';

//@Injectable({ providedIn: 'root'})
@Injectable()
export class MatchDetailService {
  private data: string[] = [];
  constructor() { }

  emitter = new EventEmitter<string>();
  
  emitValue(value: string) {
      this.emitter.emit(value);
  }
}
