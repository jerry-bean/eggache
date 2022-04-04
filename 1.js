const divisor_sum = (num, limit) => {
 
    let sum = 0; // 求める合計値
    const sqrtNum = Math.sqrt(num); // num の平方根
    
    for (let d = 1; d <= limit; ++ d) {       
      
      if (d > sqrtNum)  // dがnumの平方根を超えたらループから抜ける
        break;    
      
      if (num % d === 0) {　　// d が num の約数である
        sum += d;　　// sum にdを加算
        const q = num / d;  // sum を d で割った商を求める（整数になる）
        if (q <= limit && q !== d) {  // qがlimit以下であり、かつ qとdが等しくない場合
          sum += q;　　// 商qもsumに加算
        }
      }
    }
    
    return sum;
  }
  console.log(divisor_sum(60, 18));
  console.log(divisor_sum(1234567890, 5000000));
