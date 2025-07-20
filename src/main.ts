#!/usr/bin/env node

import { Ally } from './Ally';
import { Enemy } from './Enemy';
import { Electric } from './Electric';
import { Ice } from './Ice';
import { Esper } from './Esper';
import { Message } from './Message';

// 終了条件の判定
function isFinish(objects: (Ally | Enemy)[]): boolean {
  // 味方の全滅チェック
  let deathCnt = 0; // HPが0以下の仲間の数

  for (const object of objects) {
    // 1人でもHPが0を超えていたらfalseを返す
    if (object.getHitPoint() > 0) {
      return false;
    }
    deathCnt++;
  }

  // 死亡数(HPが0以下の数)と仲間数が同じであればtrueを返す
  if (deathCnt === objects.length) {
    return true;
  }

  return false;
}

function main(): void {
  // インスタンス化
  const members: (Electric | Ice | Esper)[] = [];
  members.push(new Electric("ピカチュウ"));
  members.push(new Ice("フリーザ"));
  members.push(new Esper("ミュウ"));

  const enemies: Enemy[] = [];
  enemies.push(new Enemy("ギャラドス", 100, 100, 20));
  enemies.push(new Enemy("カイリュウ", 120, 120, 20));
  enemies.push(new Enemy("レックウザ", 130, 130, 30));

  let turn = 1;
  let isFinishFig = false;

  const messageObj = new Message();

  // 戦闘開始のメッセージを出力
  messageObj.displayFirstMessage();

  // どちらかのHPが0になるまで戦闘を繰り返す
  let message = "";

  while (!isFinishFig) {
    console.log(`*** ${turn} ターン目 ***\n`);

    // 仲間の表示
    messageObj.displayStatusMessage(members);
    // 敵の表示
    messageObj.displayStatusMessage(enemies);

    // 仲間の攻撃
    messageObj.displayAttackMessage(members, enemies);
    // 敵の攻撃
    messageObj.displayAttackMessage(enemies, members);

    // 戦闘終了条件のチェック 仲間全員のHPが0 または 敵全員のHPが0
    isFinishFig = isFinish(members);
    if (isFinishFig) {
      message = "もう戦えるポケモンが居ない...！\n 主人公は目の前が真っ白になった。\n";
      break;
    }

    isFinishFig = isFinish(enemies);
    if (isFinishFig) {
      message = "♪♪♪ 四天王のワタルとのたたかいに勝った！ ♪♪♪\n\n";
      break;
    }

    turn++;
  }

  console.log("");
  console.log(message);

  // 仲間の表示
  messageObj.displayStatusMessage(members);

  // 敵の表示
  messageObj.displayStatusMessage(enemies);
}

// 実行
main(); 