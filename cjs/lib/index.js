const Helper = require('@darkwolf/helper.cjs')
const types = require('./types')
const constants = require('./constants')
const {
  Button
} = types
const {
  Mode,
  Display,
  ButtonType
} = constants

class Pagination {
  constructor(options = {}) {
    this
      .setMode(options.mode)
      .setPageCount(options.pageCount)
      .setPageNumber(options.pageNumber)
      .setPageStep(options.pageStep)
      .setMaxPageButtons(options.maxPageButtons)
      .setHasFirstPage(options.hasFirstPage)
      .setHasPreviousPage(options.hasPreviousPage)
      .setHasNextPage(options.hasNextPage)
      .setHasLastPage(options.hasLastPage)
      .setPageSteps(options.pageSteps)
      .setFirstPageButtonDisplay(options.firstPageButtonDisplay)
      .setPreviousPageButtonDisplay(options.previousPageButtonDisplay)
      .setCurrentPageButtonDisplay(options.currentPageButtonDisplay)
      .setNextPageButtonDisplay(options.nextPageButtonDisplay)
      .setLastPageButtonDisplay(options.lastPageButtonDisplay)
      .setPreviousPageNumberButtonsDisplay(options.previousPageNumberButtonsDisplay)
      .setNextPageNumberButtonsDisplay(options.nextPageNumberButtonsDisplay)
      .setPageStepButtonsDisplay(options.pageStepButtonsDisplay)
      .setFirstPageButtonText(options.firstPageButtonText)
      .setPreviousPageButtonText(options.previousPageButtonText)
      .setCurrentPageButtonText(options.currentPageButtonText)
      .setNextPageButtonText(options.nextPageButtonText)
      .setLastPageButtonText(options.lastPageButtonText)
      .setShowFirstPageNumber(options.showFirstPageNumber)
      .setShowPreviousPageNumber(options.showPreviousPageNumber)
      .setShowCurrentPageNumber(options.showCurrentPageNumber)
      .setShowNextPageNumber(options.showNextPageNumber)
      .setShowLastPageNumber(options.showLastPageNumber)
      .setShowAllPageStepButtons(options.showAllPageStepButtons)
  }

  setMode(mode) {
    this.mode = mode || Pagination.mode
    return this
  }

  setPageCount(count) {
    this.pageCount = count || Pagination.pageCount
    return this
  }

  setPageNumber(number) {
    this.pageNumber = number || Pagination.pageNumber
    return this
  }

  setPageStep(step) {
    this.pageStep = step || Pagination.pageStep
    return this
  }

  setMaxPageButtons(value) {
    this.maxPageButtons = value || Pagination.maxPageButtons
    return this
  }

  setHasFirstPage(boolean) {
    this.hasFirstPage = Helper.exists(boolean) ? boolean : Pagination.hasFirstPage
    return this
  }

  setHasPreviousPage(boolean) {
    this.hasPreviousPage = Helper.exists(boolean) ? boolean : Pagination.hasPreviousPage
    return this
  }

  setHasNextPage(boolean) {
    this.hasNextPage = Helper.exists(boolean) ? boolean : Pagination.hasNextPage
    return this
  }

  setHasLastPage(boolean) {
    this.hasLastPage = Helper.exists(boolean) ? boolean : Pagination.hasLastPage
    return this
  }

  setPageSteps(steps) {
    this.pageSteps = steps || Pagination.pageSteps
    return this
  }

  setFirstPageButtonDisplay(display) {
    this.firstPageButtonDisplay = display || Pagination.firstPageButtonDisplay
    return this
  }

  setPreviousPageButtonDisplay(display) {
    this.previousPageButtonDisplay = display || Pagination.previousPageButtonDisplay
    return this
  }

  setCurrentPageButtonDisplay(display) {
    this.currentPageButtonDisplay = display || Pagination.currentPageButtonDisplay
    return this
  }

  setNextPageButtonDisplay(display) {
    this.nextPageButtonDisplay = display || Pagination.nextPageButtonDisplay
    return this
  }

  setLastPageButtonDisplay(display) {
    this.lastPageButtonDisplay = display || Pagination.lastPageButtonDisplay
    return this
  }

  setPreviousPageNumberButtonsDisplay(display) {
    this.previousPageNumberButtonsDisplay = display || Pagination.previousPageNumberButtonsDisplay
    return this
  }

  setNextPageNumberButtonsDisplay(display) {
    this.nextPageNumberButtonsDisplay = display || Pagination.nextPageNumberButtonsDisplay
    return this
  }

  setPageStepButtonsDisplay(display) {
    this.pageStepButtonsDisplay = display || Pagination.pageStepButtonsDisplay
    return this
  }

  setFirstPageButtonText(text) {
    this.firstPageButtonText = text
    return this
  }

  setPreviousPageButtonText(text) {
    this.previousPageButtonText = text
    return this
  }

  setCurrentPageButtonText(text) {
    this.currentPageButtonText = text
    return this
  }

  setNextPageButtonText(text) {
    this.nextPageButtonText = text
    return this
  }

  setLastPageButtonText(text) {
    this.lastPageButtonText = text
    return this
  }

  setShowFirstPageNumber(boolean) {
    this.showFirstPageNumber = Helper.exists(boolean) ? boolean : Pagination.showFirstPageNumber
    return this
  }

  setShowPreviousPageNumber(boolean) {
    this.showPreviousPageNumber = Helper.exists(boolean) ? boolean : Pagination.showPreviousPageNumber
    return this
  }

  setShowCurrentPageNumber(boolean) {
    this.showCurrentPageNumber = Helper.exists(boolean) ? boolean : Pagination.showCurrentPageNumber
    return this
  }

  setShowNextPageNumber(boolean) {
    this.showNextPageNumber = Helper.exists(boolean) ? boolean : Pagination.showNextPageNumber
    return this
  }

  setShowLastPageNumber(boolean) {
    this.showLastPageNumber = Helper.exists(boolean) ? boolean : Pagination.showLastPageNumber
    return this
  }

  setShowAllPageStepButtons(boolean) {
    this.showAllPageStepButtons = Helper.exists(boolean) ? boolean : Pagination.showAllPageStepButtons
    return this
  }

  paginator(options = {}) {
    return Pagination.paginator({
      mode: options.mode || this.mode,
      pageCount: Helper.exists(options.pageCount) ? options.pageCount : this.pageCount,
      pageNumber: Helper.exists(options.pageNumber) ? options.pageNumber : this.pageNumber,
      pageStep: Helper.exists(options.pageStep) ? options.pageStep : this.pageStep,
      maxPageButtons: options.maxPageButtons || this.maxPageButtons,
      firstPageButtonDisplay: options.firstPageButtonDisplay || this.firstPageButtonDisplay,
      previousPageButtonDisplay: options.previousPageButtonDisplay || this.previousPageButtonDisplay,
      currentPageButtonDisplay: options.currentPageButtonDisplay || this.currentPageButtonDisplay,
      nextPageButtonDisplay: options.nextPageButtonDisplay || this.nextPageButtonDisplay,
      lastPageButtonDisplay: options.lastPageButtonDisplay || this.lastPageButtonDisplay,
      previousPageNumberButtonsDisplay: options.previousPageNumberButtonsDisplay || this.previousPageNumberButtonsDisplay,
      nextPageNumberButtonsDisplay: options.nextPageNumberButtonsDisplay || this.nextPageNumberButtonsDisplay,
      showFirstPageNumber: Helper.exists(options.showFirstPageNumber) ? options.showFirstPageNumber : this.showFirstPageNumber,
      showPreviousPageNumber: Helper.exists(options.showPreviousPageNumber) ? options.showPreviousPageNumber : this.showPreviousPageNumber,
      showCurrentPageNumber: Helper.exists(options.showCurrentPageNumber) ? options.showCurrentPageNumber : this.showCurrentPageNumber,
      showNextPageNumber: Helper.exists(options.showNextPageNumber) ? options.showNextPageNumber : this.showNextPageNumber,
      showLastPageNumber: Helper.exists(options.showLastPageNumber) ? options.showLastPageNumber : this.showLastPageNumber,
      firstPageButtonText: Helper.exists(options.firstPageButtonText) ? options.firstPageButtonText : this.firstPageButtonText,
      previousPageButtonText: Helper.exists(options.previousPageButtonText) ? options.previousPageButtonText : this.previousPageButtonText,
      currentPageButtonText: Helper.exists(options.currentPageButtonText) ? options.currentPageButtonText : this.currentPageButtonText,
      nextPageButtonText: Helper.exists(options.nextPageButtonText) ? options.nextPageButtonText : this.nextPageButtonText,
      lastPageButtonText: Helper.exists(options.lastPageButtonText) ? options.lastPageButtonText : this.lastPageButtonText
    })
  }

  navigator(options = {}) {
    return Pagination.navigator({
      hasFirstPage: Helper.exists(options.hasFirstPage) ? options.hasFirstPage : this.hasFirstPage,
      hasPreviousPage: Helper.exists(options.hasPreviousPage) ? options.hasPreviousPage : this.hasPreviousPage,
      hasNextPage: Helper.exists(options.hasNextPage) ? options.hasNextPage : this.hasNextPage,
      hasLastPage: Helper.exists(options.hasLastPage) ? options.hasLastPage : this.hasLastPage,
      firstPageButtonDisplay: options.firstPageButtonDisplay || this.firstPageButtonDisplay,
      previousPageButtonDisplay: options.previousPageButtonDisplay || this.previousPageButtonDisplay,
      currentPageButtonDisplay: options.currentPageButtonDisplay || this.currentPageButtonDisplay,
      nextPageButtonDisplay: options.nextPageButtonDisplay || this.nextPageButtonDisplay,
      lastPageButtonDisplay: options.lastPageButtonDisplay || this.lastPageButtonDisplay,
      firstPageButtonText: Helper.exists(options.firstPageButtonText) ? options.firstPageButtonText : this.firstPageButtonText,
      previousPageButtonText: Helper.exists(options.previousPageButtonText) ? options.previousPageButtonText : this.previousPageButtonText,
      currentPageButtonText: Helper.exists(options.currentPageButtonText) ? options.currentPageButtonText : this.currentPageButtonText,
      nextPageButtonText: Helper.exists(options.nextPageButtonText) ? options.nextPageButtonText : this.nextPageButtonText,
      lastPageButtonText: Helper.exists(options.lastPageButtonText) ? options.lastPageButtonText : this.lastPageButtonText
    })
  }

  stepper(options = {}) {
    return Pagination.stepper({
      pageCount: Helper.exists(options.pageCount) ? options.pageCount : this.pageCount,
      pageNumber: Helper.exists(options.pageNumber) ? options.pageNumber : this.pageNumber,
      pageStep: Helper.exists(options.pageStep) ? options.pageStep : this.pageStep,
      pageSteps: options.pageSteps || this.pageSteps,
      pageStepButtonsDisplay: options.pageStepButtonsDisplay || this.pageStepButtonsDisplay,
      showAllPageStepButtons: Helper.exists(options.showAllPageStepButtons) ? options.showAllPageStepButtons : this.showAllPageStepButtons
    })
  }
}
Pagination.BULLET_CHAR = '•'
Pagination.LEFT_ARROW_CHAR = '‹'
Pagination.RIGHT_ARROW_CHAR = '›'
Pagination.LEFT_DOUBLE_ARROW_CHAR = '«'
Pagination.RIGHT_DOUBLE_ARROW_CHAR = '»'
Pagination.ELLIPSIS_CHAR = '…'
Pagination.mode = Mode.STANDART
Pagination.pageCount = 0
Pagination.pageNumber = 1
Pagination.pageStep = 1
Pagination.maxPageButtons = 10
Pagination.hasFirstPage = false
Pagination.hasPreviousPage = false
Pagination.hasNextPage = false
Pagination.hasLastPage = false
Pagination.pageSteps = [1, 5, 10, 25, 100]
Pagination.firstPageButtonDisplay = Display.AUTO
Pagination.previousPageButtonDisplay = Display.AUTO
Pagination.currentPageButtonDisplay = Display.AUTO
Pagination.nextPageButtonDisplay = Display.AUTO
Pagination.lastPageButtonDisplay = Display.AUTO
Pagination.previousPageNumberButtonsDisplay = Display.AUTO
Pagination.nextPageNumberButtonsDisplay = Display.AUTO
Pagination.pageStepButtonsDisplay = Display.AUTO
Pagination.showFirstPageNumber = true
Pagination.showPreviousPageNumber = true
Pagination.showCurrentPageNumber = true
Pagination.showNextPageNumber = true
Pagination.showLastPageNumber = true
Pagination.showAllPageStepButtons = false
Pagination.types = types
Pagination.Button = Button
Pagination.constants = constants
Pagination.Mode = Mode
Pagination.Display = Display
Pagination.ButtonType = ButtonType
Pagination.pageNumbersWindow = (options = {}) => {
  const pageCount = options.pageCount || Pagination.pageCount
  const pageNumber = Math.min(options.pageNumber, pageCount) || Pagination.pageNumber
  const pageStep = Math.min(options.pageStep, pageCount) || Pagination.pageStep
  const maxPageButtons = options.maxPageButtons || Pagination.maxPageButtons
  const window = [pageNumber]
  let previousPageNumber
  let nextPageNumber
  for (let i = 1; i < maxPageButtons; i++) {
    const step = pageStep * i
    const previousPageNumber = pageNumber - step
    const nextPageNumber = pageNumber + step
    if (previousPageNumber > 0) {
      window.unshift(previousPageNumber)
    }
    if (nextPageNumber <= pageCount) {
      window.push(nextPageNumber)
    }
  }
  return window
}
Pagination.paginator = (options = {}) => {
  const mode = options.mode || Pagination.mode
  const pageCount = options.pageCount || Pagination.pageCount
  const pageNumber = Math.min(options.pageNumber, pageCount) || Pagination.pageNumber
  const pageStep = Math.min(options.pageStep, pageCount) || Pagination.pageStep
  const previousPageNumber = Math.min(pageNumber - pageStep, pageCount) || Pagination.pageNumber
  const nextPageNumber = Math.min(pageNumber + pageStep, pageCount) || Pagination.pageNumber
  const maxPageButtons = options.maxPageButtons || Pagination.maxPageButtons
  const firstPageButtonDisplay = options.firstPageButtonDisplay || Pagination.firstPageButtonDisplay
  const previousPageButtonDisplay = options.previousPageButtonDisplay || Pagination.previousPageButtonDisplay
  const currentPageButtonDisplay = options.currentPageButtonDisplay || Pagination.currentPageButtonDisplay
  const nextPageButtonDisplay = options.nextPageButtonDisplay || Pagination.nextPageButtonDisplay
  const lastPageButtonDisplay = options.lastPageButtonDisplay || Pagination.lastPageButtonDisplay
  const previousPageNumberButtonsDisplay = options.previousPageNumberButtonsDisplay || Pagination.previousPageNumberButtonsDisplay
  const nextPageNumberButtonsDisplay = options.nextPageNumberButtonsDisplay || Pagination.nextPageNumberButtonsDisplay
  const showFirstPageNumber = Helper.exists(options.showFirstPageNumber) ? options.showFirstPageNumber : Pagination.showFirstPageNumber
  const showPreviousPageNumber = Helper.exists(options.showPreviousPageNumber) ? options.showPreviousPageNumber : Pagination.showPreviousPageNumber
  const showCurrentPageNumber = Helper.exists(options.showCurrentPageNumber) ? options.showCurrentPageNumber : Pagination.showCurrentPageNumber
  const showNextPageNumber = Helper.exists(options.showNextPageNumber) ? options.showNextPageNumber : Pagination.showNextPageNumber
  const showLastPageNumber = Helper.exists(options.showLastPageNumber) ? options.showLastPageNumber : Pagination.showLastPageNumber
  const hasFirstPageButton = firstPageButtonDisplay === Display.ALWAYS || firstPageButtonDisplay === Display.AUTO && pageNumber > 1
  const hasPreviousPageButton = previousPageButtonDisplay === Display.ALWAYS || previousPageButtonDisplay === Display.AUTO && previousPageNumber > 1
  const hasCurrentPageButton = currentPageButtonDisplay === Display.ALWAYS || currentPageButtonDisplay === Display.AUTO && pageCount > 1
  const hasNextPageButton = nextPageButtonDisplay === Display.ALWAYS || nextPageButtonDisplay === Display.AUTO && nextPageNumber < pageCount
  const hasLastPageButton = lastPageButtonDisplay === Display.ALWAYS || lastPageButtonDisplay === Display.AUTO && pageNumber < pageCount
  const buttons = []
  if (mode === Mode.NAVIGATION) {
    if (hasFirstPageButton) {
      const button = Button.fromPageNumber(ButtonType.FIRST_PAGE, Helper.exists(options.firstPageButtonText) ? options.firstPageButtonText :
        `${Pagination.LEFT_DOUBLE_ARROW_CHAR}${showFirstPageNumber ? ' 1' : ''}`, 1)
      buttons.push(button)
    }
    if (hasPreviousPageButton) {
      const button = Button.fromPageNumber(ButtonType.PREVIOUS_PAGE, Helper.exists(options.previousPageButtonText) ? options.previousPageButtonText :
        `${firstPageButtonDisplay !== Display.HIDE ? Pagination.LEFT_ARROW_CHAR : Pagination.LEFT_DOUBLE_ARROW_CHAR}${showPreviousPageNumber ? ` ${previousPageNumber}` : ''}`, previousPageNumber)
      buttons.push(button)
    }
    if (hasCurrentPageButton) {
      const button = Button.fromPageNumber(ButtonType.CURRENT_PAGE, Helper.exists(options.currentPageButtonText) ? options.currentPageButtonText :
        `${Pagination.BULLET_CHAR}${showCurrentPageNumber ? ` ${pageNumber} ${Pagination.BULLET_CHAR}` : ''}`, pageNumber)
      buttons.push(button)
    }
    if (hasNextPageButton) {
      const button = Button.fromPageNumber(ButtonType.NEXT_PAGE, Helper.exists(options.nextPageButtonText) ? options.nextPageButtonText :
        `${showNextPageNumber ? `${nextPageNumber} ` : ''}${lastPageButtonDisplay !== Display.HIDE ? Pagination.RIGHT_ARROW_CHAR : Pagination.RIGHT_DOUBLE_ARROW_CHAR}`, nextPageNumber)
      buttons.push(button)
    }
    if (hasLastPageButton) {
      const button = Button.fromPageNumber(ButtonType.LAST_PAGE, Helper.exists(options.lastPageButtonText) ? options.lastPageButtonText :
        `${showLastPageNumber ? `${pageCount} ` : ''}${Pagination.RIGHT_DOUBLE_ARROW_CHAR}`, pageCount)
      buttons.push(button)
    }
    if (previousPageNumberButtonsDisplay !== Display.HIDE || nextPageNumberButtonsDisplay !== Display.HIDE) {
      const window = Pagination.pageNumbersWindow({
        pageCount,
        pageNumber,
        pageStep,
        maxPageButtons
      }).filter(pageNumber =>
        hasFirstPageButton && pageNumber === 1 ? firstPageButtonDisplay === Display.ALWAYS :
        hasPreviousPageButton && pageNumber === previousPageNumber ? previousPageButtonDisplay === Display.ALWAYS :
        hasNextPageButton && pageNumber === nextPageNumber ? nextPageNumberButtonsDisplay === Display.ALWAYS :
        hasLastPageButton && pageNumber === pageCount ? lastPageButtonDisplay === Display.ALWAYS : true
      )
      const currentPageIndex = window.indexOf(pageNumber)
      if (currentPageIndex >= 0) {
        let previousPageNumbers
        let nextPageNumbers
        if (previousPageNumberButtonsDisplay !== Display.HIDE) {
          previousPageNumbers = window.slice(0, currentPageIndex).reverse()
        }
        if (nextPageNumberButtonsDisplay !== Display.HIDE) {
          nextPageNumbers = window.slice(currentPageIndex + 1)
        }
        for (let i = 0; buttons.length < maxPageButtons; i++) {
          const length = buttons.length
          if (nextPageNumbers) {
            const nextPageNumber = nextPageNumbers[i]
            if (nextPageNumber <= pageCount) {
              const button = Button.fromPageNumber(ButtonType.PAGE_NUMBER, nextPageNumber, nextPageNumber)
              if (hasLastPageButton) {
                buttons.splice(buttons.length - 1, 0, button)
              } else {
                buttons.push(button)
              }
            }
          }
          if (previousPageNumbers && buttons.length < maxPageButtons) {
            const previousPageNumber = previousPageNumbers[i]
            if (previousPageNumber > 0) {
              const button = Button.fromPageNumber(ButtonType.PAGE_NUMBER, previousPageNumber, previousPageNumber)
              if (hasFirstPageButton) {
                buttons.splice(1, 0, button)
              } else {
                buttons.unshift(button)
              }
            }
          }
          if (length === buttons.length) {
            break
          }
        }
      }
    }
  } else {
    if (hasPreviousPageButton) {
      const button = Button.fromPageNumber(ButtonType.PREVIOUS_PAGE, Helper.exists(options.previousPageButtonText) ? options.previousPageButtonText :
        Pagination.LEFT_DOUBLE_ARROW_CHAR, previousPageNumber)
      buttons.push(button)
    }
    if (hasFirstPageButton) {
      const button = Button.fromPageNumber(ButtonType.FIRST_PAGE, Helper.exists(options.firstPageButtonText) ? options.firstPageButtonText : 1, 1)
      buttons.push(button)
    }
    if (hasCurrentPageButton) {
      const button = Button.fromPageNumber(ButtonType.CURRENT_PAGE, Helper.exists(options.currentPageButtonText) ? options.currentPageButtonText :
        `${Pagination.BULLET_CHAR}${showCurrentPageNumber ? ` ${pageNumber} ${Pagination.BULLET_CHAR}` : ''}`, pageNumber)
      buttons.push(button)
    }
    if (hasLastPageButton) {
      const button = Button.fromPageNumber(ButtonType.LAST_PAGE, Helper.exists(options.lastPageButtonText) ? options.lastPageButtonText : pageCount, pageCount)
      buttons.push(button)
    }
    if (hasNextPageButton) {
      const button = Button.fromPageNumber(ButtonType.NEXT_PAGE, Helper.exists(options.nextPageButtonText) ? options.nextPageButtonText :
        Pagination.RIGHT_DOUBLE_ARROW_CHAR, nextPageNumber)
      buttons.push(button)
    }
    if (previousPageNumberButtonsDisplay !== Display.HIDE || nextPageNumberButtonsDisplay !== Display.HIDE) {
      const window = Pagination.pageNumbersWindow({
        pageCount,
        pageNumber,
        pageStep,
        maxPageButtons
      }).filter(pageNumber =>
        hasFirstPageButton && pageNumber === 1 ? firstPageButtonDisplay === Display.ALWAYS :
        hasLastPageButton && pageNumber === pageCount ? lastPageButtonDisplay === Display.ALWAYS : true
      )
      const currentPageIndex = window.indexOf(pageNumber)
      if (currentPageIndex >= 0) {
        let previousPageNumbers
        let nextPageNumbers
        if (previousPageNumberButtonsDisplay !== Display.HIDE) {
          previousPageNumbers = window.slice(0, currentPageIndex).reverse()
        }
        if (nextPageNumberButtonsDisplay !== Display.HIDE) {
          nextPageNumbers = window.slice(currentPageIndex + 1)
        }
        for (let i = 0; buttons.length < maxPageButtons; i++) {
          const length = buttons.length
          if (nextPageNumbers) {
            const nextPageNumber = nextPageNumbers[i]
            if (nextPageNumber <= pageCount) {
              const button = Button.fromPageNumber(ButtonType.PAGE_NUMBER, nextPageNumber, nextPageNumber)
              if (hasNextPageButton || hasLastPageButton) {
                buttons.splice(buttons.length - (hasNextPageButton && hasLastPageButton ? 2 : 1), 0, button)
              } else {
                buttons.push(button)
              }
            }
          }
          if (previousPageNumbers && buttons.length < maxPageButtons) {
            const previousPageNumber = previousPageNumbers[i]
            if (previousPageNumber > 0) {
              const button = Button.fromPageNumber(ButtonType.PAGE_NUMBER, previousPageNumber, previousPageNumber)
              if (hasFirstPageButton || hasPreviousPageButton) {
                buttons.splice(hasFirstPageButton && hasPreviousPageButton ? 2 : 1, 0, button)
              } else {
                buttons.unshift(button)
              }
            }
          }
          if (length === buttons.length) {
            break
          }
        }
      }
      if (hasFirstPageButton && !Helper.exists(options.firstPageButtonText)) {
        const index = buttons.findIndex(button => button.type === ButtonType.FIRST_PAGE)
        const button = buttons[index]
        const nextButton = buttons[index + 1]
        if (nextButton && nextButton.pageNumber - 1 > pageStep) {
          button.text = `1${Pagination.ELLIPSIS_CHAR}`
        }
      }
      if (hasLastPageButton && !Helper.exists(options.lastPageButtonText)) {
        const index = buttons.findIndex(button => button.type === ButtonType.LAST_PAGE)
        const button = buttons[index]
        const previousButton = buttons[index - 1]
        if (previousButton && pageCount - previousButton.pageNumber > pageStep) {
          button.text = `${Pagination.ELLIPSIS_CHAR}${pageCount}`
        }
      }
    }
  }
  return buttons
}
Pagination.navigator = (options = {}) => {
  const hasFirstPage = Helper.exists(options.hasFirstPage) ? options.hasFirstPage : Pagination.hasFirstPage
  const hasPreviousPage = Helper.exists(options.hasPreviousPage) ? options.hasPreviousPage : Pagination.hasPreviousPage
  const hasNextPage = Helper.exists(options.hasNextPage) ? options.hasNextPage : Pagination.hasNextPage
  const hasLastPage = Helper.exists(options.hasLastPage) ? options.hasLastPage : Pagination.hasLastPage
  const firstPageButtonDisplay = options.firstPageButtonDisplay || Pagination.firstPageButtonDisplay
  const previousPageButtonDisplay = options.previousPageButtonDisplay || Pagination.previousPageButtonDisplay
  const currentPageButtonDisplay = options.currentPageButtonDisplay || Pagination.currentPageButtonDisplay
  const nextPageButtonDisplay = options.nextPageButtonDisplay || Pagination.nextPageButtonDisplay
  const lastPageButtonDisplay = options.lastPageButtonDisplay || Pagination.lastPageButtonDisplay
  const hasFirstPageButton = firstPageButtonDisplay === Display.ALWAYS || firstPageButtonDisplay === Display.AUTO && hasFirstPage
  const hasPreviousPageButton = previousPageButtonDisplay === Display.ALWAYS || previousPageButtonDisplay === Display.AUTO && hasPreviousPage
  const hasCurrentPageButton = currentPageButtonDisplay === Display.ALWAYS || currentPageButtonDisplay === Display.AUTO && (
    hasFirstPage ||
    hasPreviousPage ||
    hasNextPage ||
    hasLastPage
  )
  const hasNextPageButton = nextPageButtonDisplay === Display.ALWAYS || nextPageButtonDisplay === Display.AUTO && hasNextPage
  const hasLastPageButton = lastPageButtonDisplay === Display.ALWAYS || lastPageButtonDisplay === Display.AUTO && hasLastPage
  const buttons = []
  if (hasFirstPageButton) {
    const button = new Button(ButtonType.FIRST_PAGE, Helper.exists(options.firstPageButtonText) ? options.firstPageButtonText : Pagination.LEFT_DOUBLE_ARROW_CHAR)
    buttons.push(button)
  }
  if (hasPreviousPageButton) {
    const button = new Button(ButtonType.PREVIOUS_PAGE, Helper.exists(options.previousPageButtonText) ? options.previousPageButtonText : (
      firstPageButtonDisplay !== Display.HIDE ? Pagination.LEFT_ARROW_CHAR : Pagination.LEFT_DOUBLE_ARROW_CHAR
    ))
    buttons.push(button)
  }
  if (hasCurrentPageButton) {
    const button = new Button(ButtonType.CURRENT_PAGE, Helper.exists(options.currentPageButtonText) ? options.currentPageButtonText : Pagination.BULLET_CHAR)
    buttons.push(button)
  }
  if (hasNextPageButton) {
    const button = new Button(ButtonType.NEXT_PAGE, Helper.exists(options.nextPageButtonText) ? options.nextPageButtonText : (
      lastPageButtonDisplay !== Display.HIDE ? Pagination.RIGHT_ARROW_CHAR : Pagination.RIGHT_DOUBLE_ARROW_CHAR
    ))
    buttons.push(button)
  }
  if (hasLastPageButton) {
    const button = new Button(ButtonType.LAST_PAGE, Helper.exists(options.lastPageButtonText) ? options.lastPageButtonText : Pagination.RIGHT_DOUBLE_ARROW_CHAR)
    buttons.push(button)
  }
  return buttons
}
Pagination.stepper = (options = {}) => {
  const pageCount = options.pageCount || Pagination.pageCount
  const pageNumber = Math.min(options.pageNumber, pageCount) || Pagination.pageNumber
  const pageStep = Math.min(options.pageStep, pageCount) || Pagination.pageStep
  const pageSteps = options.pageSteps || Pagination.pageSteps
  const pageStepButtonsDisplay = options.pageStepButtonsDisplay || Pagination.pageStepButtonsDisplay
  const showAllPageStepButtons = Helper.exists(options.showAllPageStepButtons) ? options.showAllPageStepButtons : Pagination.showAllPageStepButtons
  const steps = showAllPageStepButtons ? pageSteps : pageSteps.filter(step => step < pageCount || step === 1)
  return pageStepButtonsDisplay === Display.ALWAYS || pageStepButtonsDisplay === Display.AUTO && steps.length > 1 ? steps.map(step => step === pageStep ?
    Button.fromPageStep(ButtonType.CURRENT_STEP, `${Pagination.BULLET_CHAR} ${step} ${Pagination.BULLET_CHAR}`, step) :
    Button.fromPageStep(ButtonType.PAGE_STEP, step, step)
  ) : []
}
Pagination.from = options => new Pagination(options)

module.exports = Pagination
