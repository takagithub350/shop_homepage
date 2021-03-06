
<!-- ◎READMEを書く理由
・企業側へ現在どのような学習に取り組んでいるのかアピールするため
・書類選考では、現在どのような学習に取り組んでいるのか、意欲的に開発に取り組んでいるのかが伝わらないため
◎READMEに記載する項目※下記項目は必ず記載しましょう！ -->
# ■アプリ名
口コミ集約型店舗ホームページ

## ■概要(このアプリでできることを書いて下さい)

instagramでの店舗口コミを見られる

Googleの地図で店舗位置が見られる

## ■制作背景(意図)
<!-- ⇒どんな課題や不便なことを解決するためにこのアプリを作っろうと思ったのか。 -->
とてもいいお店ですが、歴史が長い建物と看板のため一見さんが入りにくいので中身を知ってもらいたいと思ったことがきっかけでした。

実際製作者が知り合いに口頭でお勧めしてみましたが、外観で中に入るのをためらった、との意見がありました。

店主に制作意図を伝えたところ、店主もライバル店が実際にホームページを制作していて興味はあったがどうすればいいのかと考えていたところでした。

## ■店舗側の要望

SNSで良質な口コミが多いからシンプルにお客様の反応を集約したホームページにしたい

更新頻度が少ないと逆効果になることが考えられるので、最初はお店側からの発信（ブログやメニュー更新、お知らせ通知）はしない方向で後から実装

## ■制作期間
2020/05/02 依頼主に相談・打ち合わせ

2020/05/19 TwitterAPI,instagra API, googleAPIについて学習

・有料登録が必要であったため打ち合わせの結果、現状はリンク先の埋め込みのみに止める

2020/06/13 プログラミングスクールTECH CAMP卒業

2020/06/17 本リポジトリ作成

2020/06/26 依頼主と打ち合わせ２回目

・権限者アカウント作成して写真の入れ替えを行えるようにする

・アルバイト募集欄を作って欲しい（こちらも編集可能にする）

・Twitterのハッシュタグ内容を表示できれば嬉しい

現在

### 仕様
macOS Catalina 10.15.5
ruby 2.5.1
Rails 5.2.4.3
AWS

## ■DEMO

http://54.92.91.206/
<img width="1088" src="https://user-images.githubusercontent.com/60635421/85493986-d7897d80-b612-11ea-80b5-0ed0166b72f9.png">

<img width="1068" src="https://user-images.githubusercontent.com/60635421/85493979-d5272380-b612-11ea-9c95-ca251fd2ba1b.png">

<img width="1089" src="https://user-images.githubusercontent.com/60635421/85493977-d3f5f680-b612-11ea-8170-d165a2295485.png">

<img width="1073" src="https://user-images.githubusercontent.com/60635421/85493968-cf314280-b612-11ea-8dcb-8ed07d0088ff.png">


<!-- ⇒できている範囲で貼り付けましょう。 -->
## 実装予定の内容

Twiiterのハッシュタグの埋め込み

ブログ機能

店舗側お知らせ機能

・ブログ機能は写真画像付きで投稿できるものを店主と相談しながら実装していきます。

## DB設計
現状なし

追加実装予定(commentやuserなど)