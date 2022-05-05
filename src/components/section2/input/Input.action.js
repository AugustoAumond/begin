
export function EmailStorage (){
    let value = document.querySelector('#input');
    let emails = localStorage.getItem('emails') ? JSON.parse(localStorage.getItem('emails')) : [];
    let p = document.querySelector('#txt');

    if (value !== ''){
        if ((value.indexOf ('@') !== - 1) &&  (value.indexOf ('.') !== -1)){
            emails.push(value);
            localStorage.setItem('emails', JSON.stringify(emails));
            p.style.display = 'flex';
            value = '';
        } else {
            window.alert('Insira um email válido');
        }
    }
}


