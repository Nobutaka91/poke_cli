import { Ally } from './Ally';
import { Enemy } from './Enemy';

export class Message {
  displayFirstMessage(): void {
    console.log("四天王のワタルが勝負を仕掛けてきた!\n");
  }

  // ステータス表示
  displayStatusMessage(objects: (Ally | Enemy)[]): void {
    for (const object of objects) {
      console.log(`${object.getName()} : ${object.getHitPoint()}/${object.getMaxHitPoint()}`);
    }
    console.log("");
  }

  // 攻撃メッセージ
  displayAttackMessage(objects: any[], targets: any[]): void {
    for (const object of objects) {
      // HPが0以下の場合は攻撃処理をスキップ
      if (object.getHitPoint() <= 0) {
        continue;
      }

      let attackResult = false;

      // Esperタイプの場合、味方のオブジェクトも渡す
      if (object.constructor.name === "Esper") {
        attackResult = object.doAttackEsper(targets, objects);
      } else {
        attackResult = object.doAttack(targets);
      }
      // HPが0のときに改行が表示されないようにする処理
      if (attackResult) {
        console.log("");
      }
    }
    console.log("");
  }
}
