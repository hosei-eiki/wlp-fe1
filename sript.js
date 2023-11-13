function postData() {
    // テキストボックスの値を取得
    const textInputValue = document.getElementById('textInput1','textInput2','textInput3').value;

    // JSON形式に変換
    const data = { 'word': 'textInput1' , 'meaning': 'textInput2' , 'wordsID' : 'textInput3'
    };

    // Fetch APIを使用してPOSTリクエストを送信
    fetch('https://4pev16rhda.execute-api.ap-southeast-2.amazonaws.com/WordLearningProject/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
