type PlayerPosition = 'keeper' | 'striker' | 'midfielder';
type Grade = 1 | 2 | 3 | 4 | 5;

let playerPosition = 'striker'

type Player = {
    name: string;
    age: number;
    position: PlayerPosition;
    skill: Grade
};

let pedro: Player = {
    name: 'Pedro',
    age: 29,
    position: 'midfielder',
    skill: 4
};