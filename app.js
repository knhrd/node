const { indigo } = require('@material-ui/core/colors');
const http = require('http'),
    fs = require(`fs`),
    ejs = require(`ejs`),
    url = require('url'),
    qs = require('querystring');

const index_page = fs.readFileSync(`./index.ejs`, 'utf8'),
    style_css = fs.readFileSync('./style.css', 'utf8'),
    script_js = fs.readFileSync('./script.js', 'utf8'),
    other_page = fs.readFileSync('./other.ejs', 'utf8');

var server = http.createServer(getFromClient);

server.listen(3000);
console.log('Server start');

function getFromClient(req, res) {
    var url_parts = url.parse(req.url);
    switch (url_parts.pathname) {

        case '/':
            response_index(req, res);
            break;
        
        case '/other':
            response_other(req, res);
            break;
        
        case '/style.css':
            res.writeHead(200, { 'Content-Type': 'text/css' });
            res.write(style_css);
            res.end();
            break;
        
        case '/script.js':
            res.writeHead(200, { 'Content-Type': 'text/js' });
            res.write(script_js);
            res.end();
            break;

        case '/images/logo.png':
            res.writeHead(200, { 'Content-Type': 'image/png; chrset=utf-8' });
            var image = fs.readFileSync("./images/logo.png", "binary"); 
            res.end(image, "binary");
            break;
        case '/images/cafe.jpg':
            res.writeHead(200, { 'Content-Type': 'image/jpg; chrset=utf-8' });
            var image = fs.readFileSync("./images/cafe.jpg", "binary"); 
            res.end(image, "binary");
            break;
        case '/images/cafe1.jpg':
            res.writeHead(200, { 'Content-Type': 'image/jpg; chrset=utf-8' });
            var image = fs.readFileSync("./images/cafe1.jpg", "binary"); 
            res.end(image, "binary");
            break;
        case '/images/cafe2.jpg':
            res.writeHead(200, { 'Content-Type': 'image/jpg; chrset=utf-8' });
            var image = fs.readFileSync("./images/cafe2.jpg", "binary"); 
            res.end(image, "binary");
            break;
        case '/images/cafe3.jpg':
            res.writeHead(200, { 'Content-Type': 'image/jpg; chrset=utf-8' });
            var image = fs.readFileSync("./images/cafe3.jpg", "binary"); 
            res.end(image, "binary");
            break;
        case '/images/cafe4.jpg':
            res.writeHead(200, { 'Content-Type': 'image/jpg; chrset=utf-8' });
            var image = fs.readFileSync("./images/cafe4.jpg", "binary"); 
            res.end(image, "binary");
            break;
        case '/images/cafe5.jpg':
            res.writeHead(200, { 'Content-Type': 'image/jpg; chrset=utf-8' });
            var image = fs.readFileSync("./images/cafe5.jpg", "binary"); 
            res.end(image, "binary");
            break;

        case '/images/cooking.jpg':
            res.writeHead(200, { 'Content-Type': 'image/jpg; chrset=utf-8' });
            var image = fs.readFileSync("./images/cooking.jpg", "binary"); 
            res.end(image, "binary");
            break;
        case '/images/cooking1.jpg':
            res.writeHead(200, { 'Content-Type': 'image/jpg; chrset=utf-8' });
            var image = fs.readFileSync("./images/cooking1.jpg", "binary"); 
            res.end(image, "binary");
            break;
        case '/images/cooking2.jpg':
            res.writeHead(200, { 'Content-Type': 'image/jpg; chrset=utf-8' });
            var image = fs.readFileSync("./images/cooking2.jpg", "binary"); 
            res.end(image, "binary");
            break;
        case '/images/cooking3.jpg':
            res.writeHead(200, { 'Content-Type': 'image/jpg; chrset=utf-8' });
            var image = fs.readFileSync("./images/cooking3.jpg", "binary"); 
            res.end(image, "binary");
            break;
        case '/images/cooking4.jpg':
            res.writeHead(200, { 'Content-Type': 'image/jpg; chrset=utf-8' });
            var image = fs.readFileSync("./images/cooking4.jpg", "binary"); 
            res.end(image, "binary");
            break;
        case '/images/cooking5.jpg':
            res.writeHead(200, { 'Content-Type': 'image/jpg; chrset=utf-8' });
            var image = fs.readFileSync("./images/cooking5.jpg", "binary"); 
            res.end(image, "binary");
            break;

        case '/images/izakaya.jpg':
            res.writeHead(200, { 'Content-Type': 'image/jpg; chrset=utf-8' });
            var image = fs.readFileSync("./images/izakaya.jpg", "binary"); 
            res.end(image, "binary");
            break;
        case '/images/izakaya1.jpg':
            res.writeHead(200, { 'Content-Type': 'image/jpg; chrset=utf-8' });
            var image = fs.readFileSync("./images/izakaya1.jpg", "binary"); 
            res.end(image, "binary");
            break;
        case '/images/izakaya2.jpg':
            res.writeHead(200, { 'Content-Type': 'image/jpg; chrset=utf-8' });
            var image = fs.readFileSync("./images/izakaya2.jpg", "binary"); 
            res.end(image, "binary");
            break;
        case '/images/izakaya3.jpg':
            res.writeHead(200, { 'Content-Type': 'image/jpg; chrset=utf-8' });
            var image = fs.readFileSync("./images/izakaya3.jpg", "binary"); 
            res.end(image, "binary");
            break;
        case '/images/izakaya4.jpg':
            res.writeHead(200, { 'Content-Type': 'image/jpg; chrset=utf-8' });
            var image = fs.readFileSync("./images/izakaya4.jpg", "binary"); 
            res.end(image, "binary");
            break;
        case '/images/izakaya5.jpg':
            res.writeHead(200, { 'Content-Type': 'image/jpg; chrset=utf-8' });
            var image = fs.readFileSync("./images/izakaya5.jpg", "binary"); 
            res.end(image, "binary");
            break;

        case '/images/live.jpg':
            res.writeHead(200, { 'Content-Type': 'image/jpg; chrset=utf-8' });
            var image = fs.readFileSync("./images/live.jpg", "binary"); 
            res.end(image, "binary");
            break;
        case '/images/live1.jpg':
            res.writeHead(200, { 'Content-Type': 'image/jpg; chrset=utf-8' });
            var image = fs.readFileSync("./images/live1.jpg", "binary"); 
            res.end(image, "binary");
            break;
        case '/images/live2.jpg':
            res.writeHead(200, { 'Content-Type': 'image/jpg; chrset=utf-8' });
            var image = fs.readFileSync("./images/live2.jpg", "binary"); 
            res.end(image, "binary");
            break;
        case '/images/live3.jpg':
            res.writeHead(200, { 'Content-Type': 'image/jpg; chrset=utf-8' });
            var image = fs.readFileSync("./images/live3.jpg", "binary"); 
            res.end(image, "binary");
            break;
        case '/images/live4.jpg':
            res.writeHead(200, { 'Content-Type': 'image/jpg; chrset=utf-8' });
            var image = fs.readFileSync("./images/live4.jpg", "binary"); 
            res.end(image, "binary");
            break;
        case '/images/live5.jpg':
            res.writeHead(200, { 'Content-Type': 'image/jpg; chrset=utf-8' });
            var image = fs.readFileSync("./images/live5.jpg", "binary"); 
            res.end(image, "binary");
            break;

        default:
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('no page...');
            break;
    }
}

function response_index(req, res) {
    var content = ejs.render(index_page,　{
        content: content,
    });
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(content);
    res.end();
}

function response_other(req, res) {
    var msg = ""
    if(req.method == 'POST') {
        var body = '';

        req.on('data', (data) => {
            body += data;
        });
        req.on('end', () => {
            data =qs.parse(body);
            setCookie('msg', data.msg, res);
            write_other(req, res);
        });
        } else {
            write_other(req, res);
        }
    }

function response_other(req, res) {
    if (req.method  == 'POST') {
        var body = '';
    req.on('data', (data) => {
        body += data;
    });
    req.on('end', () => {
        data =qs.parse(body);
        setCookie('msg', data.msg, res);
        write_other(req, res);
    });
    } else {
        write_other(req, res);
    }
}

function write_other(req, res) {
    var msg = ""
    var cookie_data = getCookie('msg', req);
    msg += ' メールアドレス' + data.mail +'の' + data.name +'様から'+ data.msg + 'とお問い合わせ頂きました。 ';
            var content = ejs.render(other_page, {
                title: "お問い合わせ",
                content: msg,
                data: data,
                cookie_data: cookie_data,
    });
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(content);
    res.end();
}

function setCookie(key, value, res) {
    var cookie = escape(value);
    res.setHeader('Set-Cookie', [key + '=' + cookie]);
}

function getCookie(key, req) {
    var cookie_data = req.headers.cookie != undefined ?
        req.headers.cookie : '';
        for (var i in data) {
            if (data[i].trim().startsWith(key + '=')) {
                var result = data[i].trin().substring(key.length + 1);
                return unescape(result);
            }
        }
        return '';
}