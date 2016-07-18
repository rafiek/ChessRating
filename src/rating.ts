import {Player} from './player';
import {Game} from "./game";

export class Rating {
  public player: Player;

  constructor(){
    this.player = new Player(0, [new Game()]);
  }

  public getAverageOpponentRating(): number{
    return this.player.averageOpponentRating();
  }

  public getNumberOfGames(): number{
    return this.player.games.length;
  }

  public getTotalScore(): number{
    return this.player.totalScore();
  }

  public getExpectedScore(): number{
    return this.player.expectedScore();
  }

  public getTPR(): number{
    return this.player.TPR();
  }
}
