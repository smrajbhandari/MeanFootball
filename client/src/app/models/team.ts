export class Team {
  _id: String;
  name: string;
  coach: string;
  players: [{
    name: String;
    position: String;
    number: Number;
    substitute: Boolean;
  }]
}