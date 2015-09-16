# baidu-pwd-sign

百度登录方式
1获取token
2由token获取pubkey和key
3用pubkey加密密码
4登录(需要数据，加密后密码,key,token,username)

该项目为提取的百度加密算法。实现第3步分，用公钥加密密码，返回加密后的密码。
