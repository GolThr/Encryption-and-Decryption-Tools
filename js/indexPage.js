$('.tool_title').text('DES加解密');
$('#des').css({'background':'#404040'});

function desEncrypt(msg, key) {
    //加密
    return encrypt = CryptoJS.DES.encrypt(msg, CryptoJS.enc.Utf8.parse(key), {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    }).toString();
    console.log(encrypt);
}

function desDecrypt(msg, key) {
    //解密
    return decrypt = CryptoJS.DES.decrypt(msg, CryptoJS.enc.Utf8.parse(key), {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    }).toString(CryptoJS.enc.Utf8);
    console.log(decrypt);
}

$('#encryption').click(function (e) {
    var origin = $.trim($('#input_origin').val());
    var key = $.trim($('#key').val());
    var result = desEncrypt(origin, key);
    $('#input_result').text(result);
});

$('#decryption').click(function (e) {
    var origin = $.trim($('#input_origin').val());
    var key = $.trim($('#key').val());
    var result = desDecrypt(origin, key);
    $('#input_result').text(result);
});