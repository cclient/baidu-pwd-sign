# baidu-pwd-sign
#项目已报废，功能没有问题。登录逻辑是，从百度电脑端从浏览器逆向出来，比较复杂
#但有更简单的登录方式，没有token,pubkey,加密pwd的步骤，直接传账号密码便可登录
#路径为http://wappass.baidu.com/wp/login?uname_login=1
#因该路径有效，所以此项目无用。


##百度登录方式
###1获取token
###2由token获取pubkey和key
###3用pubkey加密密码
###4登录(需要数据，加密后密码,key,token,username)

##该项目为提取的百度加密算法。实现第3步，用公钥加密密码，返回加密后的密码。
