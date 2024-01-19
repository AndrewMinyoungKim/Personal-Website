document.getElementById("contact__email__clipboard").onclick = function() {copyClipboard("andrew.minyoung.kim@gmail.com")};
document.getElementById("contact__phone__clipboard").onclick = function() {copyClipboard("6474668621")};

function copyClipboard () {
    copyText = arguments[0];
    navigator.clipboard.writeText(copyText);
}