function addFullScreen() {
  const { body } = document

  body.addEventListener('dblclick', () => {
    if (!document.fullscreenElement) body.requestFullscreen()
  })
}

addFullScreen()
