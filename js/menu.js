document.writeln('<div class="menu">\n' +
    '        <span class="menu_title">对称性加密解密</span>\n' +
    '        <ul>\n' +
    '            <li id="des" onclick="location.href=\'index.html\'">DES</li>\n' +
    '            <li id="des_3" onclick="location.href=\'DES3.html\'">3DES</li>\n' +
    '            <li id="aes" onclick="location.href=\'AES.html\'">AES</li>\n' +
    '        </ul>\n' +
    '        <span class="menu_title">非对称性加密解密</span>\n' +
    '        <ul>\n' +
    '            <li id="rsa" onclick="location.href=\'RSA.html\'">RSA</li>\n' +
    '            <li id="rsa_pri" onclick="showTip(\'需下载文件！下载完成后，请运行run.bat！\');window.open(\'asstes/数字证书.zip\');">数字证书</li>\n' +
    '        </ul>\n' +
    '    </div>');