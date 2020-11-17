export default class Button {
  static from(type, text, options) {
    return new Button(type, text, options)
  }

  static fromPageNumber(type, text, pageNumber) {
    return new Button(type, text, {
      pageNumber
    })
  }

  static fromPageStep(type, text, pageStep) {
    return new Button(type, text, {
      pageStep
    })
  }

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
