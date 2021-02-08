class KeyPressing{
    static _keyPresseds = [];
    static _init(){
        document.addEventListener('keydown', (e) => {
            const keyCode = e.keyCode;
            if (KeyPressing._keyPresseds.includes(keyCode) == false){
                KeyPressing._keyPresseds.push(keyCode)
            }
        })
        document.addEventListener('keyup', (e) => {
            const keyCode = e.keyCode;
            if (KeyPressing._keyPresseds.includes(keyCode) == true){
                const index = KeyPressing._keyPresseds.indexOf(keyCode);
                if (index !== -1) {
                    KeyPressing._keyPresseds.splice(index, 1);
                }
            }
        })
    }
    static isKeyPressed(keyCode){
        return KeyPressing._keyPresseds.includes(keyCode)
    }
}
KeyPressing._init();
setInterval(() => {
    console.log(KeyPressing.isKeyPressed(13));
}, 1000)