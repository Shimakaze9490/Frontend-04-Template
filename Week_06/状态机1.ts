/* Quokka.js */

function match(string: string) {
  let state = start;

  for (const c of string) {
    state = state(c); // 切换到下一个状态

    return state === end; // 进入end状态就意味着找到了
  }

  // 起始状态
  function start(c) {
    if (c === 'a') return foundA;
    else return start(c);
  }

  // 终结状态:注意这里 end状态永远返回end(trap 陷阱)
  function end(c) {
    return end;
  }

  // 依次确定状态
  // 注意:把当前字符传达给下一个状态: reConsume 
  function foundA(c) {
    if (c === 'b') return foundB;
    else return start(c);
  }
  function foundB(c) {
    if (c === 'c') return foundC;
    else return start(c);
  }
  function foundC(c) {
    if (c === 'd') return foundD;
    else return start(c);
  }
  function foundD(c) {
    if (c === 'e') return foundE;
    else return start(c);
  }
  function foundE(c) {
    if (c === 'f') return end; // 返回end状态
    else return start(c);
  }
  // function foundF(c) {
  //   if (c === 'b') return foundB;
  //   else return start;
  // }
}
