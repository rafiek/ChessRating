import {Game} from "./game";

export class Player {

  constructor(public rating?: number,  public games?: Array<Game>){ }

  averageOpponentRating(): number{
    let total: number = 0;
    for (let game of this.games){
      total += game.ratingOpponent;
    }
    return total == 0 ? total : total / this.games.length;
  }

  totalScore(): number{
    let total: number = 0;
    for (let game of this.games){
      total += Number(game.result);
    }
    return total;
  }

  expectedScore(): number{
    let total: number = 0;
    for (let game of this.games){
      total += (1 / (1+Math.pow(10,(game.ratingOpponent-this.rating)/400)));
    }
    return total;
  }

  TPR(): number{
    let tpr: number;
    let totalScore: number = this.totalScore();
    let fictitiousScore: boolean = false;

    if(totalScore <= 0 || (totalScore == this.games.length)){
      fictitiousScore = true;
      totalScore += 0.5;
      this.games.push(
        new Game(this.rating, 0.5)
      );
    }

    let averageOpponentRating: number = this.averageOpponentRating();

    tpr = Math.abs((Math.log((this.games.length/totalScore)-1) / Math.log(10)) * 400 - averageOpponentRating);

    if(fictitiousScore){
      this.games.pop();
    }

    return tpr;
  }
}
