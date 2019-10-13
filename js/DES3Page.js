$('.tool_title').text('3DES加解密');
$('#des_3').css({'background':'#404040'});
onModeChange();

function des3Encrypt(msg, key, modeStr, iv, paddingStr) {
    var mode = CryptoJS.mode.ECB;
    var padding = CryptoJS.pad.Pkcs7;
    if(modeStr == "ecb"){
        mode = CryptoJS.mode.ECB;
    }else if(modeStr == "cbc"){
        mode = CryptoJS.mode.CBC;
    }else if(modeStr == "ctr"){
        mode = CryptoJS.mode.CTR;
    }else if(modeStr == "ofb"){
        mode = CryptoJS.mode.OFB;
    }else if(modeStr == "CFB"){
        mode = CryptoJS.mode.CFB;
    }
    if(paddingStr == "pkcs7"){
        padding = CryptoJS.pad.Pkcs7;
    }else if(paddingStr == "ansix923"){
        padding = CryptoJS.pad.AnsiX923;
    }else if(paddingStr == "iso10126"){
        padding = CryptoJS.pad.Iso10126;
    }else if(paddingStr == "iso97971"){
        padding = CryptoJS.pad.Iso97971;
    }else if(paddingStr == "nopadding"){
        padding = CryptoJS.pad.NoPadding;
    }else if(paddingStr == "zeropadding"){
        padding = CryptoJS.pad.ZeroPadding;
    }
    //加密
    return encrypt = CryptoJS.DES.encrypt(msg, CryptoJS.enc.Utf8.parse(key), {
        iv: CryptoJS.enc.Utf8.parse(iv),
        mode: mode,
        padding: padding
    }).toString();
}

function des3Decrypt(msg, key, modeStr, iv, paddingStr) {
    var mode = CryptoJS.mode.ECB;
    var padding = CryptoJS.pad.Pkcs7;
    if(modeStr == "ecb"){
        mode = CryptoJS.mode.ECB;
    }else if(modeStr == "cbc"){
        mode = CryptoJS.mode.CBC;
    }else if(modeStr == "ctr"){
        mode = CryptoJS.mode.CTR;
    }else if(modeStr == "ofb"){
        mode = CryptoJS.mode.OFB;
    }else if(modeStr == "CFB"){
        mode = CryptoJS.mode.CFB;
    }
    if(paddingStr == "pkcs7"){
        padding = CryptoJS.pad.Pkcs7;
    }else if(paddingStr == "ansix923"){
        padding = CryptoJS.pad.AnsiX923;
    }else if(paddingStr == "iso10126"){
        padding = CryptoJS.pad.Iso10126;
    }else if(paddingStr == "iso97971"){
        padding = CryptoJS.pad.Iso97971;
    }else if(paddingStr == "nopadding"){
        padding = CryptoJS.pad.NoPadding;
    }else if(paddingStr == "zeropadding"){
        padding = CryptoJS.pad.ZeroPadding;
    }
    //解密
    return decrypt = CryptoJS.DES.decrypt(msg, CryptoJS.enc.Utf8.parse(key), {
        iv: CryptoJS.enc.Utf8.parse(iv),
        mode: mode,
        padding: padding
    }).toString(CryptoJS.enc.Utf8);
}

$('#encryption').click(function (e) {
    var origin = $.trim($('#input_origin').val());
    var key = $.trim($('#key').val());
    var mode = $('#mode').val();
    var padding = $('#padding').val();
    var iv = $.trim($('#iv').val());
    if(origin == null || origin == ""){
        showTip("请输入待转换文字！");
    }else if(key == null || key == ""){
        showTip("请输入密钥！");
    }else if(key.length != 8 && key.length != 16 && key.length != 32){
        showTip("密钥必须8/16/32位！")
    }else {
        if(result == null || result == ""){
            $('#input_result').val("参数错误！！！");
        }
        var result = des3Encrypt(origin, key, mode, iv, padding);
        $('#input_result').val(result);
    }
});

$('#decryption').click(function (e) {
    var origin = $.trim($('#input_origin').val());
    var key = $.trim($('#key').val());
    var mode = $('#mode').val();
    var padding = $('#padding').val();
    var iv = $.trim($('#iv').val());
    if(origin == null || origin == ""){
        showTip("请输入待转换文字！");
    }else if(key == null || key == ""){
        showTip("请输入密钥！");
    }else if(key.length != 8 && key.length != 16 && key.length != 32){
        showTip("密钥必须8/16/32位！")
    }else {
        if(result == null || result == ""){
            $('#input_result').val("参数错误！！！");
        }
        var result = des3Decrypt(origin, key, mode, iv, padding);
        $('#input_result').val(result);
    }
});

function onModeChange() {
    var mode = $('#mode').val();
    if(mode == "ecb" || mode == "cfb"){
        $('#iv_content').hide();
    }else{
        $('#iv_content').show();
    }
}