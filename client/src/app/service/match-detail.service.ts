import { Injectable, EventEmitter } from '@angular/core';
import { MatchService } from './match.service';

//@Injectable({ providedIn: 'root'})
@Injectable()
export class MatchDetailService {
  private matchObj:any;
  private matchLineUp:any;
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
  getCurrentMatchLineup(){
    if(this.matchObj!=null)
    {
    this.matchLineUp=this.matchObj;
    }
    else{
      this.matchLineUp.homeTeam.coach="n/a" ;
      this.matchLineUp.match.awayTeam.coach="n/a";
    }
    return this.matchLineUp ;
  }
  
}
export interface matchLineUpSTR {
  homeTeamCoach: String,
  homeTeamSubstitutes: [
          {
              minute: Number,
              playerIn: String,
              playerOut: String
          }
      ],
      awayTeamCoach: String,
      awayTeamSubstitutes: [
              {
                  minute: Number,
                  playerIn: String,
                  playerOut: String
              }
          ],      
        };

