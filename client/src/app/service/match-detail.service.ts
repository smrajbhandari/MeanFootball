import { Injectable, EventEmitter } from '@angular/core';
import { MatchService } from './match.service';

//@Injectable({ providedIn: 'root'})
@Injectable()
export class MatchDetailService {
  private matchObj:any;
  constructor(private matchService:MatchService) { }

  emitter = new EventEmitter<Object>();

  minuteEmitter =new EventEmitter<Object>();
  
  
  emitValue(value: string) {
      this.matchService.find(value).subscribe(data=>{
        this.matchObj = data;
        this.emitter.emit(this.matchObj);
        setInterval(()=>{
          this.minuteEmitter.emit(Math.floor(Math.abs(((new Date(this.matchObj.startDateTime).getTime()) - (new Date()).getTime()) / 60000)));
        },500); 
      } ) ;      
      
  }

  getCurrentMatchObj(){
    return this.matchObj;
  }
}
