function down_pop_ap_block() {
    let a = document.querySelectorAll('.pop_ap_block');
for(let i = 0, l = a.length; i < l; i++){
if ( a[i].style.display == 'block' )
a[i].style.display = 'none'
else
a[i].style.display = 'block';
}
}

function schow_block() {
    let a = document.querySelectorAll('.pop_accept_block, .pop_ap_block');
for(let i = 0, l = a.length; i < l; i++){
if ( a[i].style.display == 'block' )
a[i].style.display = 'none'
else
a[i].style.display = 'block';
}
}

function close_block() {
    let a = document.querySelectorAll('.pop_accept_block');
for(let i = 0, l = a.length; i < l; i++){
if ( a[i].style.display == 'block' )
a[i].style.display = 'none'
else
a[i].style.display = 'block';
}
}