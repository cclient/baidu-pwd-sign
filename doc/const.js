'use strict';

module.exports.baiduSignErrorCode = {
    "-1": {
        msg: '系统错误,请您稍后再试,<a href="http://passport.baidu.com/v2/?ucenterfeedback#{urldata}#login"  target="_blank">\u95ee\u9898\u53cd\u9988</a>',
        field: ""
    },
    "1": {
        msg: "您输入的帐号格式不正确",
        field: "userName"
    },
    "2": {
        msg: "您输入的帐号不存在，可<a href='http://passport.baidu.com/v2/?ucenterfeedback#{urldata}#login_7' target='_blank'>查看帮助</a>或<a href='http://passport.baidu.com/v2/?reg#{urldata}' target='_blank'>立即注册</a>",
        field: "userName"
    },
    "3": {
        msg: "验证码不存在或已过期,请重新输入",
        field: ""
    },
    "4": {
        msg: '您输入的帐号或密码有误,<a href="http://passport.baidu.com/?getpassindex#{urldata}"  target="_blank" >忘记密码</a>？',
        field: "password"
    },
    "5": {
        msg: "请在弹出的窗口操作,或重新登录",
        field: ""
    },
    "6": {
        msg: "您输入的验证码有误",
        field: "verifyCode"
    },
    "7": {
        msg: '密码错误，可以试试<a onclick="var smDom=document.getElementsByClassName(\'pass-sms-btn\');if(smDom.length>0){smDom[0].click();}" >短信登录</a>,或者<a href="http://passport.baidu.com/?getpassindex#{urldata}"  target="_blank" >找回密码</a>',
        field: "password"
    },
    "16": {
        msg: '您的帐号因安全问题已被限制登录,<a href="http://passport.baidu.com/v2/?ucenterfeedback#{urldata}#login"  target="_blank" >问题反馈</a>',
        field: ""
    },
    "257": {
        msg: "请输入验证码",
        field: "verifyCode"
    },
    "100027": {
        msg: "百度正在进行系统升级，暂时不能提供服务，敬请谅解",
        field: ""
    },
    "120016": {
        msg: "",
        field: ""
    },
    "18": {
        msg: "",
        field: ""
    },
    "400031": {
        msg: "请在弹出的窗口操作,或重新登录",
        field: ""
    },
    "400032": {
        msg: "",
        field: ""
    },
    "400034": {
        msg: "",
        field: ""
    },
    "401007": {
        msg: "您的手机号关联了其他帐号，请选择登录",
        field: ""
    },
    "120021": {
        msg: "登录失败,请在弹出的窗口操作,或重新登录",
        field: ""
    },
    "500010": {
        msg: "登录过于频繁,请24小时后再试",
        field: ""
    },
    "200010": {
        msg: "验证码不存在或已过期",
        field: ""
    },
    "100005": {
        msg: "系统错误,请您稍后再试",
        field: ""
    },
    "120019": {
        msg: "请在弹出的窗口操作,或重新登录",
        field: "userName"
    },
    "110024": {
        msg: '此帐号暂未激活,<a href="#{gotourl}" >重发验证邮件</a>',
        field: ""
    },
    "100023": {
        msg: '开启Cookie之后才能登录,<a href="http://passport.baidu.com/v2/?ucenterfeedback#{urldata}#login"  target="_blank" >如何开启</a>?',
        field: ""
    },
    "17": {
        msg: "您的帐号已锁定,请<a href='http://passport.baidu.com/v2/?ucenterfeedback#login_10' target='_blank'>解锁</a>后登录",
        field: "userName"
    },
    "400401": {
        msg: "",
        field: ""
    },
    "400037": {
        msg: "",
        field: ""
    }
};
