const {ipcRenderer} = require('electron')

window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('hello').innerHTML = process.versions.node
  document.getElementById('send').addEventListener('click', () => {
    ipcRenderer.send('msg', 'hello from renderer')
  })
  ipcRenderer.on('reply', (event, arg) => {
    alert(arg)
  })
})