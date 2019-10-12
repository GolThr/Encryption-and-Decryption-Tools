$('.tool_title').text('AES加解密');
$('#aes').css({'background':'#404040'});

function aesEncrypt(msg, key) {
    //加密
    return encrypt = CryptoJS.AES.encrypt(msg, CryptoJS.enc.Utf8.parse(key), {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    }).toString();
    console.log(encrypt);
}

function aesDecrypt(msg, key) {
    //解密
    return decrypt = CryptoJS.AES.decrypt(msg, CryptoJS.enc.Utf8.parse(key), {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    }).toString(CryptoJS.enc.Utf8);
    console.log(decrypt);
}

$('#encryption').click(function (e) {
    var origin = $.trim($('#input_origin').val());
    var key = $.trim($('#key').val());
    var result = aesEncrypt(origin, key);
    $('#input_result').text(result);
});

$('#decryption').click(function (e) {
    var origin = $.trim($('#input_origin').val());
    var key = $.trim($('#key').val());
    var result = aesDecrypt(origin, key);
    $('#input_result').text(result);
});