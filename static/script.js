// static/script.js
async function sendData() {
    // 1. 取得網頁上輸入框的值
    const n1 = document.getElementById('num1').value;
    const n2 = document.getElementById('num2').value;

    // 2. 使用 fetch 把資料送到後端的 /calculate 路由
    const response = await fetch('/calculate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ n1: n1, n2: n2 }) // 把數字打包成 JSON
    });

    // 3. 等待 Python 後端算完回傳結果
    const data = await response.json();

    // 4. 把結果顯示在網頁的 h2 標籤上
    document.getElementById('result-display').innerText = "計算結果是：" + data.sum;
}