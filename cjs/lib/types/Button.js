class Button {
  constructor(type, text, options = {}) {
    this
      .setType(type)
      .setText(text)
      .setPageNumber(options.pageNumber)
      .setPageStep(options.pageStep)
  }

  setType(type) {
    this.type = type
    return this
  }

  setText(text) {
    this.text = `${text}`
    return this
  }

  setPageNumber(number) {
    this.pageNumber = number
    return this
  }

  setPageStep(step) {
    this.pageStep = step
    return this
  }
}
Button.from = (type, text, options) => new Button(type, text, options)
Button.fromPageNumber = (type, text, pageNumber) => new Button(type, text, {
  pageNumber
})
Button.fromPageStep = (type, text, pageStep) => new Button(type, text, {
  pageStep
})

module.exports = Button
