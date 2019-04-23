export class Team {
  _id: String;
  name: String;
  coach: String;
  players: [{
    name: String;
    position: String;
    number: Number;
    substitute: Boolean;
  }]
}