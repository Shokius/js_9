let a = function(type,message) {
    
    let div = document.createElement('div'),
        span = document.createElement('span');
    
    span.innerHTML = message; 

    div.appendChild(span);
    div.classList.add(type);
    
    document.body.appendChild(div);
    setTimeout(function(){
        div.remove();
    }, 5000);

};

let display = window.location,
    search = display.search,
    url = search.match(/^\?type=([^\s]+)&msg=([^\s]+)$/),
    type = url[1],
    msg = url[2];

a(type, msg);