export class Ally {
  private name: string; // 自パーティのポケモンの名前
  private maxHitPoint: number = 100; // 最大HP
  private hitPoint: number = 100; // 現在のHP
  private attackPoint: number = 10; // 攻撃力

  constructor(name: string, maxHitPoint: number, hitPoint: number, attackPoint: number) {
    this.name = name;
    this.maxHitPoint = maxHitPoint;
    this.hitPoint = hitPoint;
    this.attackPoint = attackPoint;
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

    console.log(`『${this.getName()}』のでんこうせっか!`);
    console.log(`【${enemy.getName()}】に${this.attackPoint}のダメージ!`);
    enemy.tookDamage(this.attackPoint);
    return true;
  }

  tookDamage(damage: number): void {
    this.hitPoint -= damage;
    // HPが0未満にならないための処理
    if (this.hitPoint < 0) {
      this.hitPoint = 0;
      console.log(`【 ${this.getName()} 】はたおれた!`);
    }
  }

  recoveryDamage(heal: number, target: any): void {
    this.hitPoint += heal;
    if (this.hitPoint > target.maxHitPoint) {
      this.hitPoint = target.maxHitPoint;
    }
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
} 