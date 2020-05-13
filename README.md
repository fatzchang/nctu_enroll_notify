# nctu_enroll_notify
還抱著那麼一點點的希望，相信總有一天會備到自己

於是就這樣每天都看著交大的網頁。

但是因為頁面上沒有順序，只能一個一個算著

有時候媽媽會叫我洗碗，

從小學開始就熟記三字經的我，腦中就會響起：「父母呼，應勿緩」。

儘管我很忙，還是會二話不說就放下手邊算到一半的名次，

之後又要重新來過了。

好幾次想減少看的頻率，但是心裡又覺得：「會不會哪天輪到我了，因為我懶得去算而錯過了大好前程呢？」

「所以我應該要有一個工具」

[請進入](https://exam.fatz.tw/v2)

## v.1
算一算以後用mailgun寄給自己

### 使用方法：
辦一個mailgun帳號，設定好域名

填入configs資料夾底下的secretExample.js

將檔名改成secretExample.js檔名改成secret.js

config底下新建一個secret資料夾，把secret.js放進去


## v.2
新頁面，可以選擇系所，使用上跟交大網頁大同小異，但是多了順序

### 使用方法
```
git clone git@github.com:fatzchang/nctu_enroll_notify.git

cd nctu_enroll_notify/client

npm install // or yarn install

cd ..

npm install

node server.js
```
即可在瀏覽器用localhost:3002/v2進入