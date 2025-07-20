export class Enemy {
  private name: string;
  private maxHitPoint: number;
  private hitPoint: number;
  private attackPoint: number;

  constructor(name: string, maxHitPoint: number, hitPoint: number, attackPoint: number) {
    this.name = name;
    this.hitPoint = hitPoint;
    this.maxHitPoint = maxHitPoint;
    this.attackPoint = attackPoint;
  }

  // アクセサーメソッド (外部からprivateプロパティにアクセスするためのメソッド)

  // ゲッター (プロパティを取得するためのアクセサーメソッド)
  getName(): string {
    return this.name;
  }

  getHitPoint(): number {
    return this.hitPoint;
  }

  getMaxHitPoint(): number {
    return this.maxHitPoint;
  }

  getAttackPoint(): number {
    return this.attackPoint;
  }

  doAttack(allies: any[]): boolean {
    // チェック1 : 自身のHPが0かどうか
    if (this.getHitPoint() <= 0) {
      return false;
    }

    // HPが0より大きい味方のみを取得
    const aliveAllies = allies.filter(ally => ally.getHitPoint() > 0);

    // 生きている味方がいない場合は攻撃できない
    if (aliveAllies.length === 0) {
      return false;
    }

    // 配列からランダムに攻撃対象1体を決定する
    const allyIndex = Math.floor(Math.random() * aliveAllies.length);
    const ally = aliveAllies[allyIndex];

    const randomValue1 = Math.floor(Math.random() * 6) + 1;
    const randomValue2 = Math.floor(Math.random() * 10) + 1;
    const randomValue3 = Math.floor(Math.random() * 3) + 1;

    if (randomValue1 === 6) {
      //強力な技の発動
      console.log(`『${this.getName()}』のはかいこうせん!`);
      console.log(`【 ${ally.getName()} 】に${this.attackPoint * 3} のダメージ!`);
      ally.tookDamage(this.attackPoint * 3);
    } else if (randomValue2 === 10) {
      //ダメージ0技の発動
      console.log(`『${this.getName()}』のはねる!`);
      console.log("しかし何も起こらなかった");
    } else if (randomValue3 === 3) {
      //ノーマル技の発動
      console.log(`『${this.getName()}』のたつまき!`);
      console.log(`【 ${ally.getName()}】に${this.attackPoint * 1.5} のダメージ!`);
      ally.tookDamage(this.attackPoint * 1.5);
    } else {
      //ノーマル技の発動
      console.log(`『${this.getName()}』の体当たり!`);
      console.log(`【 ${ally.getName()}】に${this.attackPoint} のダメージ!`);
      ally.tookDamage(this.attackPoint);
    }
    return true;
  }

  tookDamage(damage: number): void {
    this.hitPoint -= damage;
    // HPが0未満にならないための処理
    if (this.hitPoint < 0) {
      this.hitPoint = 0;
      console.log(`【 ${this.getName()} 】をやっつけた!`);
    }
  }
} 