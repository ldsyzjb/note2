
// 生成一个length长度的数组，填充1-100的随机数
function newArray(length){
    return new Array(length).fill(0).map( i => Math.floor(Math.random()*100));
}


// function, times, array-length
function test(func, times=20, length=1000){
    let err = 0;
        console.time('test ');
    for(let i=0; i<times; i++){
        let ary = newArray(length)

        func(ary)
        let result = ary.reduce( (total, item) => {
            return typeof total == 'number' && total <= item ? item : false;
        })
        if(result === false) err++;

    }
        console.timeEnd('test ');
    console.log(err +  ' / ' + times)
}

// 交换数组arr中i和j的位置
function swap(arr, i, j){
    [arr[i], arr[j]] = [arr[j], arr[i]]
}

// 对html特殊字符进行转义
function escapeHtml(text) {
    var map = { 
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };

    return text.replace(/[<>"']/g, function(m) { return map[m]; });
}

// 将selector标签的内容，渲染到body下，新的id为newid
let render = (function(){
    let keyWord = ["break","else","new","var","case","finally","return","void","catch","for","switch","while","continue","function","this","with","default","if","throw","delete","in","try","do","instranceof","typeof","abstract","enum","int","short","boolean","export","interface","static","byte","extends","long","super","char","final","native","synchronized","class","float","package","throws","const","goto","private","transient","debugger","implements","protected","volatile","double","import","public"];

    function getStrBySelector(selector){
        console.log('in fun ' + selector)
        return document.querySelector(selector).innerHTML;
    }

    function genHTML(str){
        let reg = new RegExp(`(${keyWord.join('|')})`,'gi');
        let ary = str.split('\n');
            ary = ary.map(element => {
                let new_str = element.replace(/ /g, '&nbsp')
                    new_str = escapeHtml(new_str)
                    // console.log(escapeHtml(new_st/r))
                    new_str = new_str.replace(reg, '<span class="keyword">$1</span>');
                    new_str = `<p>${new_str}</p>`;
                return new_str
            });
        return ary.join('');
    }
    function genEl(type, id, html){
        let el = document.createElement(type)
        el.id = id;
        el.innerHTML = html;
        return el;
    }
    return function(selector, newId){
        let str = getStrBySelector(selector);
        let html = genHTML(str);
        let root = genEl('div', newId, html);
        let style = genEl('style', '', `p{margin:0;padding:0;}span{color:#1111a7;}#${newId}{background:#d8bdbd;outline:#ceafafdouble3px;}`)
        document.body.appendChild(root);
        document.body.appendChild(style)
    }
})();