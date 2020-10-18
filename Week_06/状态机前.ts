/* Quokka.js */

// 在一个字符串中,找到字符‘a’
// o(n) 算法,时间跟string长度成正比
{
  function find (str: string, string: string): boolean {
    for (const iterator of string) {
      if (str === iterator) return true;
    }
    return false;
  }
  
  let res = find('a', 'ddpoeujmacje');
  
  console.log(res);
}

{
  function find2 (str: string, string: string): boolean {
    let stringCopy = string.slice(); // 避免直接操作形参
    let tempStr;
    while (tempStr = stringCopy.substring(0, str.length)) {
      if (str === tempStr) return true;
      stringCopy = stringCopy.substring(1); // 每次前进一个字符
    }

    return false

    // for (let i = 0; i < string.length - 1; i++) {
    //   if (str ===`${string[i]}${string[i+1]}`) return true;
    // }
    // return false;
  }

  let res = find2('ab', 'derr1 r2teab 3ee');

  console.log(res);


  function match2(string) {
    let foundA = false;
    for (const c of string) {
      if (c === 'a') foundA = true;
      else if (foundA && c === 'b') return true; // 保证'ab' 相邻才会return true
      else foundA = false; // 第二次不满足,重置
    }
  }

  console.log(match2('iam aboy'));
}


{
  function find3(str: string, string: string): boolean {
    // let tempStr;
    // while(tempStr = string.substring(0, str.length)) {
    //   if (tempStr === str) return true;
    //   string = string.substring(1); // 每次前进一个字符
    // }
    // return false;
    
    for (let i = 0; i < string.length - str.length; i++) {
      if (str === `${string[i]}${string[i+1]}${string[i+2]}${string[i+3]}${string[i+4]}${string[i+5]}`) return true;
    }
  }
  console.log(find3('abcdef', 'Skdeh*&99abcdef29k'));
}