let options = {
    width: 1200,
    height: 768,
    background: 'red',
    font: {
        size: '16px',
        color: '#fff'
    }
};

console.log(JSON.stringify(options)); //конвертация в JSON
console.log(JSON.parse(JSON.stringify(options))); //в объект JS
