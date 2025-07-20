import { Ally } from './Ally';

export class Esper extends Ally {
  private specialAttack: number = 70; // 特殊攻撃

  constructor(name: string) {
    super(name, 90, 90, 30);
    this.specialAttack = 70;
  }

  doAttackEsper(enemies: any[], allies: any[]): boolean {
    // チェック1 : 自身のHPが0かどうか
    if (this.getHitPoint() <= 0) {
      return false;
    }

    // HPが0より大きい敵のみを取得
    const aliveEnemies = enemies.filter(enemy => enemy.getHitPoint() > 0);

    // HPが0より大きい味方のみを取得
    const aliveAllies = allies.filter(ally => ally.getHitPoint() > 0);

    // 敵が全滅している場合は何もしない（戦闘終了状態）
    if (aliveEnemies.length === 0) {
      return false;
    }

    const randomValue1 = Math.floor(Math.random() * 2) + 1;
    const randomValue2 = Math.floor(Math.random() * 3) + 1;

    if (randomValue1 === 2 && aliveAllies.length > 0) {
      //回復技 - 生きている味方がいる場合のみ
      const allyIndex = Math.floor(Math.random() * aliveAllies.length);
      const ally = aliveAllies[allyIndex];

      console.log(`『${this.getName()}』の いやしのはどう!`);
      console.log(`【 ${ally.getName()} 】のHPを${this.specialAttack}回復した`);
      ally.recoveryDamage(this.specialAttack, ally);
    } else if (randomValue2 === 3 && aliveEnemies.length > 0) {
      //ノーマル技の発動 - サイコキネシス
      const enemyIndex = Math.floor(Math.random() * aliveEnemies.length);
      const enemy = aliveEnemies[enemyIndex];

      console.log(`『${this.getName()}』のサイコキネシス!`);
      console.log(`【 ${enemy.getName()} 】に${this.specialAttack} のダメージ!`);
      enemy.tookDamage(this.specialAttack);
    } else if (aliveEnemies.length > 0) {
      // 通常攻撃 - 生きている敵がいる場合のみ
      super.doAttack(enemies);
    }
    // 攻撃対象がいない場合は何もしない
    return true;
  }
} 