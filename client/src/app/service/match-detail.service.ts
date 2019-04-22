import { Injectable, EventEmitter } from '@angular/core';
import { MatchService } from './match.service';

//@Injectable({ providedIn: 'root'})
@Injectable()
export class MatchDetailService {
  private matchObj: Object = {};
  constructor(private matchService:MatchService) { }

  emitter = new EventEmitter<Object>();
  
  emitValue(value: string) {
      this.matchService.find(value).subscribe(data=>{
        this.matchObj = data;
        this.emitter.emit(this.matchObj);
        //console.log(data);
      } ) ;      
      
  }
}
