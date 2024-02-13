var body = $response.body; // 声明一个变量body并以响应消息体赋值
var obj = JSON.parse(body); // JSON.parse()将json形式的body转变成对象处理

obj.is_vip = "9A0684792021D73BE42B71491469ADFA";

// {
//     "error" : 0,
//         "data" : {
//         "user_info" : {
//             "reg_time" : "1611934605",
//                 "expired_time" : 0,
//                     "member_state" : 0,
//                         "is_vip" : "8F8CBF4D4F96CF9B18E232903B5409FE"
//         },
//         "error_code" : "",
//             "data_info" : [

//             ],
//                 "is_success" : true,
//                     "error_msg" : ""
//     }
// }

// {
//     "error" : 0,
//         "data" : {
//         "user_info" : {
//             "reg_time" : "1630032617",
//                 "expired_time" : 0,
//                     "member_state" : 2,
//                         "is_vip" : "9A0684792021D73BE42B71491469ADFA"
//         },
//         "error_code" : "",
//             "data_info" : [

//             ],
//                 "is_success" : true,
//                     "error_msg" : ""
//     }
// }

body = JSON.stringify(obj); // 重新打包回json字符串
$done(body); // 结束修改






