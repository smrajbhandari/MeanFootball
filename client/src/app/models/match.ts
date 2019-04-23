import { Team } from './team';

export class Match {
    _id: String;
    leagueName: string;
    startDateTime: string;
    homeTeam: Team;
    awayTeam: Team;
}