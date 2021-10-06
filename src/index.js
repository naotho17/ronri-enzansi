//論理演算子の本当の意味を知ろう　&& ||
// &&…かつ　||…または　　ではない！！！

// ||は　"左側がfalseなら右側を返す"　という意味

const num = null;
//　↓JSではnullはfaise判定になるため,右側(金額未設定~が返ってくる)↓
//numに100とか数値を入れるとtrue判定で左側が帰ってくるよ
const fee = num || "金額未設定です";
console.log(fee);

// &&は　"左側がtrueなら右側を返す"　という意味

// num2にfalse判定されるもの(nullとか)を入れるとそのまま返ってくる
const num2 = 100;
const fee2 = num2 && "何か設定されました";
console.log(fee2);
