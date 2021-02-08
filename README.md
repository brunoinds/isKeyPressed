# isKeyPressed
**A lightweight (398 bytes) way to check if a key is being pressed by the user in the browser.**

Forget using the boring event listeners. Calling a single function `KeyPressing.isKeyPressed()` , you can know if a specific key is being pressed right now by the user.

```js
  if (KeyPressing.isKeyPressed(13)){ //Pass the keyCode integer as parameter
     console.log('The Enter key is being pressed!')
  }else{
     console.log('The Enter key is NOT being pressed!')
  }
```

## Setup
Include the file `isKeyPressed.min.js` to your project and add it as a resource script:

```html
  <script src="path/to/isKeyPressed.min.js"></script>
```

## How to use
```js
   const isEnterKeyBeingPressedRightNow = KeyPressing.isKeyPressed(13) //Returns a Boolean
```
You can access a list of keyCodes in this link: http://gcctech.org/csc/javascript/javascript_keycodes.htm

### Loging when a key is pressed
```js
  setInterval(() => {
    if (KeyPressing.isKeyPressed(13)){
        console.log('The Enter key is being pressed!')
    }else{
        console.log('The Enter key is NOT being pressed!')
    }
  }, 1000) //Update data every 1000ms (1 second)
  
  //Disclaimer: this use is only if you realy need to update every x time. To only fire an event if a key is pressed, use the document.addEventListener('keydown') event
```

## How it works
isKeyPressed uses a eventListener to watch when a key is being pressed and released (`keydown`, `keyup`). When a key is pressed, the event is fired and isKeyPressed add the key to an array with all the others keys being pressed. When some key is released, the keyup event is fired and it removes the key from the pressed keys array. With that algorithm, you can call anytime with a key is being pressed.
**We DO NOT use any `Interval` or `Timeout` to verify if the key is being pressed. It's only eventListener based algorithm.**

## Dependencies
No dependencies!
