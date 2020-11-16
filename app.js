function makeAjaxRequest(url, fn) {
    let httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = fn;
    httpRequest.open('GET', url);
    httpRequest.send();
}

function insertTable() {
    if (this.readyState === 4) {
        if (this.status === 200) {
        document.getElementById('content').innerHTML = this.responseText;
        }
    }
}

function insertFooter() {
    if (this.readyState === 4) {
        if (this.status === 200) {
            let parser = new DOMParser();
            let htmlDoc = parser.parseFromString(this.responseText, 'text/html');
            let el = htmlDoc.body.getElementsByTagName('footer')[0];
            document.body.append(el);
        }
    }
}

window.addEventListener('DOMContentLoaded', function () {
    makeAjaxRequest('./index.html', insertFooter);
    makeAjaxRequest('./table.html', insertTable);

});