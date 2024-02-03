var body = $response.body; // 声明一个变量body并以响应消息体赋值
var obj = JSON.parse(body); // JSON.parse()将json形式的body转变成对象处理

obj.svip_level = 2;
obj.vip_level = 2;
obj.is_sign = true;

// {
//   "error" : 0,
//   "data" : {
//     "user_info" : {
//       "avatar_src" : "http://ctimg2018.5fun.net/upload/images/headportrait/public/system_15.png",
//       "uid" : 139963209,
//       "svip_level" : 1,
//       "nickname" : "papa108677690",
//       "officialAccount" : false,
//       "papa_money" : 500,
//       "vip_level" : 1,
//       "unread_message" : 0,
//       "is_sign" : false
//     },
//     "posts_list" : [

//     ]
//   }
// }

body = JSON.stringify(obj); // 重新打包回json字符串
$done(body); // 结束修改






