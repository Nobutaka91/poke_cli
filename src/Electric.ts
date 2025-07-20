import { Ally } from './Ally';

export class Electric extends Ally {
  private specialAttack: number = 50; // 特殊攻撃

  constructor(name: string) {
    super(name, 100, 100, 40);
    this.specialAttack = 50;
  }

  doAttack(enemies: any[]): boolean {
    // チェック1 : 自身のHPが0かどうか
    if (this.getHitPoint() <= 0) {
      return false;
    }

    // HPが0より大きい敵のみを取得
    const aliveEnemies = enemies.filter(enemy => enemy.getHitPoint() > 0);

    // 生きている敵がいない場合は攻撃できない
    if (aliveEnemies.length === 0) {
      return false;
    }

    // 配列からランダムに敵1体を決定する
    const enemyIndex = Math.floor(Math.random() * aliveEnemies.length);
    const enemy = aliveEnemies[enemyIndex];

    const randomValue1 = Math.floor(Math.random() * 5) + 1;
    const randomValue2 = Math.floor(Math.random() * 3) + 1;

    if (randomValue1 === 5) {
      //強力な技の発動
      console.log(`『${this.getName()}』のかみなり!`);
      console.log("効果はばつぐんだ!");
      console.log(`【 ${enemy.getName()} 】に${this.specialAttack * 3} のダメージ!`);
      enemy.tookDamage(this.specialAttack * 3);
    } else if (randomValue2 === 3) {
      //ノーマル技の発動
      console.log(`『${this.getName()}』の電気ショック!`);
      console.log("効果はばつぐんだ!");
      console.log(`【 ${enemy.getName()} 】に${this.specialAttack * 2} のダメージ!`);
      enemy.tookDamage(this.specialAttack * 2);
    } else {
      super.doAttack(enemies);
    }
    return true;
  }
} 