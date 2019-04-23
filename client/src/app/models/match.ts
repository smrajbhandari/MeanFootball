import { Team } from './team';

export class Match {
    _id: String;
    leagueName: String;
    startDateTime: Date;
    homeTeam: Team;
    awayTeam: Team;
}