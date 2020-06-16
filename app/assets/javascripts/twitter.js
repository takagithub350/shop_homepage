const fs = require("fs");
let Twitter = require('twitter');
// require('credentials').);

// $.ajax({
//   {
//     name: "twitter_test",
//     dependencies: {},
//     devDependencies: {
//     fs: "0.0.1-security",
//     twitter: "^1.7.1",
//     dataType: "json"
//     }
//   }
// })

let client = new Twitter({
      consumer_key = Rails.application.credentials.CONSUMER_KEY,
      consumer_secret = Rails.applicaiton.credentials.CONSUMER_SECRET,
      access_token = Rails.application.credentials.ACCESS_TOKEN,
      access_token_secret = Rails.application.credentials.ACCESS_TOKEN_SECRET,
});


// const main = async () => {
//     const stream = await client.stream('statuses/filter', {'track':'一やのごはん'});
//     stream.on('data', async data => {
//         try {
//             fs.appendFile("tweet/tweet.csv", JSON.stringify(data) + "\n", (err) => {
//                 if (err) throw err;
//                 console.log("正常に書き込みが完了しました");
//             });

//         } catch (error) {
//             console.log(error);
//         }
//     });
// };

// main();