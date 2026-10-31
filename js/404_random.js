const result = document.getElementById("random")
const random =["うおｗ","ページが見つかりません。","？？？","＊ しかしだれもこなかった。"]
const number = Math.floor(Math.random() * random.length);
result.textContent = random[number]