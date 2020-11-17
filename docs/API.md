[boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type
[number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type
[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type
[Object]: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object
[Array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

# API
### class: Pagination
#### `static` Pagination.BULLET_CHAR
* returns: <[string][string]> Defaults to `'•'`.

#### `static` Pagination.LEFT_ARROW_CHAR
* returns: <[string][string]> Defaults to `'‹'`.

#### `static` Pagination.RIGHT_ARROW_CHAR
* returns: <[string][string]> Defaults to `'›'`.

#### `static` Pagination.LEFT_DOUBLE_ARROW_CHAR
* returns: <[string][string]> Defaults to `'«'`.

#### `static` Pagination.RIGHT_DOUBLE_ARROW_CHAR
* returns: <[string][string]> Defaults to `'»'`.

#### `static` Pagination.ELLIPSIS_CHAR
* returns: <[string][string]> Defaults to `'…'`.

#### `static` Pagination.mode
* returns: <[string][string]> Defaults to `'standart'`.

#### `static` Pagination.pageCount
* returns: <[number][number]> Defaults to `0`.

#### `static` Pagination.pageNumber
* returns: <[number][number]> Defaults to `1`.

#### `static` Pagination.pageStep
* returns: <[number][number]> Defaults to `1`.

#### `static` Pagination.maxPageButtons
* returns: <[number][number]> Defaults to `10`.

#### `static` Pagination.hasFirstPage
* returns: <[boolean][boolean]> Defaults to `false`.

#### `static` Pagination.hasPreviousPage
* returns: <[boolean][boolean]> Defaults to `false`.

#### `static` Pagination.hasNextPage
* returns: <[boolean][boolean]> Defaults to `false`.

#### `static` Pagination.hasLastPage
* returns: <[boolean][boolean]> Defaults to `false`.

#### `static` Pagination.pageSteps
* returns: <[Array][Array]<[number][number]>> Defaults to `[1, 5, 10, 25, 100]`.

#### `static` Pagination.firstPageButtonDisplay
* returns: <[string][string]> Defaults to `'auto'`.

#### `static` Pagination.previousPageButtonDisplay
* returns: <[string][string]> Defaults to `'auto'`.

#### `static` Pagination.currentPageButtonDisplay
* returns: <[string][string]> Defaults to `'auto'`.

#### `static` Pagination.nextPageButtonDisplay
* returns: <[string][string]> Defaults to `'auto'`.

#### `static` Pagination.lastPageButtonDisplay
* returns: <[string][string]> Defaults to `'auto'`.

#### `static` Pagination.previousPageNumberButtonsDisplay
* returns: <[string][string]> Defaults to `'auto'`.

#### `static` Pagination.nextPageNumberButtonsDisplay
* returns: <[string][string]> Defaults to `'auto'`.

#### `static` Pagination.pageStepButtonsDisplay
* returns: <[string][string]> Defaults to `'auto'`.

#### `static` Pagination.showFirstPageNumber
* returns: <[boolean][boolean]> Defaults to `true`.

#### `static` Pagination.showPreviousPageNumber
* returns: <[boolean][boolean]> Defaults to `true`.

#### `static` Pagination.showCurrentPageNumber
* returns: <[boolean][boolean]> Defaults to `true`.

#### `static` Pagination.showNextPageNumber
* returns: <[boolean][boolean]> Defaults to `true`.

#### `static` Pagination.showLastPageNumber
* returns: <[boolean][boolean]> Defaults to `true`.

#### `static` Pagination.showAllPageStepButtons
* returns: <[boolean][boolean]> Defaults to `false`.

#### `static` Pagination.types
* returns: <[Types](#class-types)>

#### `static` Pagination.Button
* returns: <[Button](#class-button)>

#### `static` Pagination.constants
* returns: <[Constants](#class-constants)>

#### `static` Pagination.Mode
* returns: <[Mode](#class-mode)>

#### `static` Pagination.Display
* returns: <[Display](#class-display)>

#### `static` Pagination.ButtonType
* returns: <[ButtonType](#class-buttontype)>

#### `static` Pagination.pageNumbersWindow([options])
* `options` <[Object][Object]>
  * `pageCount` <?[number][number]> Defaults to `0`.
  * `pageNumber` <?[number][number]> Defaults to `1`.
  * `pageStep` <?[number][number]> Defaults to `1`.
  * `maxPageButtons` <?[number][number]> Defaults to `10`.
* returns: <[Array][Array]<[number][number]>>

#### `static` Pagination.paginator([options])
* `options` <[Object][Object]>
  * `mode` <?[string][string]<[Mode](#class-mode)>> Must be `'standart'` or `'navigation'`. Defaults to `'standart'`.
  * `pageCount` <?[number][number]> Defaults to `0`.
  * `pageNumber` <?[number][number]> Defaults to `1`.
  * `pageStep` <?[number][number]> Defaults to `1`.
  * `maxPageButtons` <?[number][number]> Defaults to `10`.
  * `firstPageButtonDisplay` <?[string][string]<[Display](#class-display)>> Defaults to `'auto'`.
  * `previousPageButtonDisplay` <?[string][string]<[Display](#class-display)>> Defaults to `'auto'`.
  * `currentPageButtonDisplay` <?[string][string]<[Display](#class-display)>> Defaults to `'auto'`.
  * `nextPageButtonDisplay` <?[string][string]<[Display](#class-display)>> Defaults to `'auto'`.
  * `lastPageButtonDisplay` <?[string][string]<[Display](#class-display)>> Defaults to `'auto'`.
  * `previousPageNumberButtonsDisplay` <?[string][string]<[Display](#class-display)>> Defaults to `'auto'`.
  * `nextPageNumberButtonsDisplay` <?[string][string]<[Display](#class-display)>> Defaults to `'auto'`.
  * `firstPageButtonText` <?[string][string]>
  * `previousPageButtonText` <?[string][string]>
  * `currentPageButtonText` <?[string][string]>
  * `nextPageButtonText` <?[string][string]>
  * `lastPageButtonText` <?[string][string]>
  * `showFirstPageNumber` <?[boolean][boolean]> Defaults to `true`.
  * `showPreviousPageNumber` <?[boolean][boolean]> Defaults to `true`.
  * `showCurrentPageNumber` <?[boolean][boolean]> Defaults to `true`.
  * `showNextPageNumber` <?[boolean][boolean]> Defaults to `true`.
  * `showLastPageNumber` <?[boolean][boolean]> Defaults to `true`.
* returns: <[Array][Array]<[Button](#class-button)>>

#### `static` Pagination.navigator([options])
* `options` <[Object][Object]>
  * `hasFirstPage` <?[boolean][boolean]> Defaults to `false`.
  * `hasPreviousPage` <?[boolean][boolean]> Defaults to `false`.
  * `hasNextPage` <?[boolean][boolean]> Defaults to `false`.
  * `hasLastPage` <?[boolean][boolean]> Defaults to `false`.
  * `firstPageButtonDisplay` <?[string][string]<[Display](#class-display)>> Defaults to `'auto'`.
  * `previousPageButtonDisplay` <?[string][string]<[Display](#class-display)>> Defaults to `'auto'`.
  * `currentPageButtonDisplay` <?[string][string]<[Display](#class-display)>> Defaults to `'auto'`.
  * `nextPageButtonDisplay` <?[string][string]<[Display](#class-display)>> Defaults to `'auto'`.
  * `lastPageButtonDisplay` <?[string][string]<[Display](#class-display)>> Defaults to `'auto'`.
  * `firstPageButtonText` <?[string][string]>
  * `previousPageButtonText` <?[string][string]>
  * `currentPageButtonText` <?[string][string]>
  * `nextPageButtonText` <?[string][string]>
  * `lastPageButtonText` <?[string][string]>
* returns: <[Array][Array]<[Button](#class-button)>>

#### `static` Pagination.stepper([options])
* `options` <[Object][Object]>
  * `pageCount` <?[number][number]> Defaults to `0`.
  * `pageNumber` <?[number][number]> Defaults to `1`.
  * `pageStep` <?[number][number]> Defaults to `1`.
  * `pageSteps` <?[Array][Array]<[number][number]>> Defaults to `[1, 5, 10, 25, 100]`
  * `pageStepButtonsDisplay` <?[string][string]<[Display](#class-display)>> Defaults to `'auto'`.
  * `showAllPageStepButtons` <?[boolean][boolean]> Defaults to `false`.
* returns: <[Array][Array]<[Button](#class-button)>>

#### `static` Pagination.from([options])
* `options` <[Object][Object]>
  * `mode` <?[string][string]<[Mode](#class-mode)>> Must be `'standart'` or `'navigation'`. Defaults to `'standart'`.
  * `pageCount` <?[number][number]> Defaults to `0`.
  * `pageNumber` <?[number][number]> Defaults to `1`.
  * `pageStep` <?[number][number]> Defaults to `1`.
  * `maxPageButtons` <?[number][number]> Defaults to `10`.
  * `hasFirstPage` <?[boolean][boolean]> Defaults to `false`.
  * `hasPreviousPage` <?[boolean][boolean]> Defaults to `false`.
  * `hasNextPage` <?[boolean][boolean]> Defaults to `false`.
  * `hasLastPage` <?[boolean][boolean]> Defaults to `false`.
  * `pageSteps` <?[Array][Array]<[number][number]>> Defaults to `[1, 5, 10, 25, 100]`
  * `firstPageButtonDisplay` <?[string][string]<[Display](#class-display)>> Defaults to `'auto'`.
  * `previousPageButtonDisplay` <?[string][string]<[Display](#class-display)>> Defaults to `'auto'`.
  * `currentPageButtonDisplay` <?[string][string]<[Display](#class-display)>> Defaults to `'auto'`.
  * `nextPageButtonDisplay` <?[string][string]<[Display](#class-display)>> Defaults to `'auto'`.
  * `lastPageButtonDisplay` <?[string][string]<[Display](#class-display)>> Defaults to `'auto'`.
  * `previousPageNumberButtonsDisplay` <?[string][string]<[Display](#class-display)>> Defaults to `'auto'`.
  * `nextPageNumberButtonsDisplay` <?[string][string]<[Display](#class-display)>> Defaults to `'auto'`.
  * `pageStepButtonsDisplay` <?[string][string]<[Display](#class-display)>> Defaults to `'auto'`.
  * `firstPageButtonText` <?[string][string]>
  * `previousPageButtonText` <?[string][string]>
  * `currentPageButtonText` <?[string][string]>
  * `nextPageButtonText` <?[string][string]>
  * `lastPageButtonText` <?[string][string]>
  * `showFirstPageNumber` <?[boolean][boolean]> Defaults to `true`.
  * `showPreviousPageNumber` <?[boolean][boolean]> Defaults to `true`.
  * `showCurrentPageNumber` <?[boolean][boolean]> Defaults to `true`.
  * `showNextPageNumber` <?[boolean][boolean]> Defaults to `true`.
  * `showLastPageNumber` <?[boolean][boolean]> Defaults to `true`.
  * `showAllPageStepButtons` <?[boolean][boolean]> Defaults to `false`.
* returns: <[Pagination](#class-pagination)>

#### `init` new Pagination([options])
* `options` <[Object][Object]>
  * `mode` <?[string][string]<[Mode](#class-mode)>> Must be `'standart'` or `'navigation'`. Defaults to `'standart'`.
  * `pageCount` <?[number][number]> Defaults to `0`.
  * `pageNumber` <?[number][number]> Defaults to `1`.
  * `pageStep` <?[number][number]> Defaults to `1`.
  * `maxPageButtons` <?[number][number]> Defaults to `10`.
  * `hasFirstPage` <?[boolean][boolean]> Defaults to `false`.
  * `hasPreviousPage` <?[boolean][boolean]> Defaults to `false`.
  * `hasNextPage` <?[boolean][boolean]> Defaults to `false`.
  * `hasLastPage` <?[boolean][boolean]> Defaults to `false`.
  * `pageSteps` <?[Array][Array]<[number][number]>> Defaults to `[1, 5, 10, 25, 100]`
  * `firstPageButtonDisplay` <?[string][string]<[Display](#class-display)>> Defaults to `'auto'`.
  * `previousPageButtonDisplay` <?[string][string]<[Display](#class-display)>> Defaults to `'auto'`.
  * `currentPageButtonDisplay` <?[string][string]<[Display](#class-display)>> Defaults to `'auto'`.
  * `nextPageButtonDisplay` <?[string][string]<[Display](#class-display)>> Defaults to `'auto'`.
  * `lastPageButtonDisplay` <?[string][string]<[Display](#class-display)>> Defaults to `'auto'`.
  * `previousPageNumberButtonsDisplay` <?[string][string]<[Display](#class-display)>> Defaults to `'auto'`.
  * `nextPageNumberButtonsDisplay` <?[string][string]<[Display](#class-display)>> Defaults to `'auto'`.
  * `pageStepButtonsDisplay` <?[string][string]<[Display](#class-display)>> Defaults to `'auto'`.
  * `firstPageButtonText` <?[string][string]>
  * `previousPageButtonText` <?[string][string]>
  * `currentPageButtonText` <?[string][string]>
  * `nextPageButtonText` <?[string][string]>
  * `lastPageButtonText` <?[string][string]>
  * `showFirstPageNumber` <?[boolean][boolean]> Defaults to `true`.
  * `showPreviousPageNumber` <?[boolean][boolean]> Defaults to `true`.
  * `showCurrentPageNumber` <?[boolean][boolean]> Defaults to `true`.
  * `showNextPageNumber` <?[boolean][boolean]> Defaults to `true`.
  * `showLastPageNumber` <?[boolean][boolean]> Defaults to `true`.
  * `showAllPageStepButtons` <?[boolean][boolean]> Defaults to `false`.
* returns: <[Pagination](#class-pagination)>

#### pagination.setMode([mode])
* `mode` <[string][string]<[Mode](#class-mode)>> Must be `'standart'` or `'navigation'`. Defaults to `'standart'`.
* returns: <[this](#class-pagination)>

#### pagination.setPageCount([count])
* `count` <[number][number]> Defaults to `0`.
* returns: <[this](#class-pagination)>

#### pagination.setPageNumber(\[number])
* `number` <[number][number]> Defaults to `1`.
* returns: <[this](#class-pagination)>

#### pagination.setPageStep([step])
* `step` <[number][number]> Defaults to `1`.
* returns: <[this](#class-pagination)>

#### pagination.setMaxPageButtons([value])
* `value` <[number][number]> Defaults to `10`.
* returns: <[this](#class-pagination)>

#### pagination.setHasFirstPage(\[boolean])
* `boolean` <[boolean][boolean]> Defaults to `false`.
* returns: <[this](#class-pagination)>

#### pagination.setHasPreviousPage(\[boolean])
* `boolean` <[boolean][boolean]> Defaults to `false`.
* returns: <[this](#class-pagination)>

#### pagination.setHasNextPage(\[boolean])
* `boolean` <[boolean][boolean]> Defaults to `false`.
* returns: <[this](#class-pagination)>

#### pagination.setHasLastPage(\[boolean])
* `boolean` <[boolean][boolean]> Defaults to `false`.
* returns: <[this](#class-pagination)>

#### pagination.setPageSteps([steps])
* `steps` <[Array][Array]<[number][number]>> Defaults to `[1, 5, 10, 25, 100]`
* returns: <[this](#class-pagination)>

#### pagination.setFirstPageButtonDisplay([display])
* `display` <[string][string]<[Display](#class-display)>> Defaults to `'auto'`.
* returns: <[this](#class-pagination)>

#### pagination.setPreviousPageButtonDisplay([display])
* `display` <[string][string]<[Display](#class-display)>> Defaults to `'auto'`.
* returns: <[this](#class-pagination)>

#### pagination.setCurrentPageButtonDisplay([display])
* `display` <[string][string]<[Display](#class-display)>> Defaults to `'auto'`.
* returns: <[this](#class-pagination)>

#### pagination.setNextPageButtonDisplay([display])
* `display` <[string][string]<[Display](#class-display)>> Defaults to `'auto'`.
* returns: <[this](#class-pagination)>

#### pagination.setLastPageButtonDisplay([display])
* `display` <[string][string]<[Display](#class-display)>> Defaults to `'auto'`.
* returns: <[this](#class-pagination)>

#### pagination.setPreviousPageNumberButtonsDisplay([display])
* `display` <[string][string]<[Display](#class-display)>> Defaults to `'auto'`.
* returns: <[this](#class-pagination)>

#### pagination.setNextPageNumberButtonsDisplay([display])
* `display` <[string][string]<[Display](#class-display)>> Defaults to `'auto'`.
* returns: <[this](#class-pagination)>

#### pagination.setPageStepButtonsDisplay([display])
* `display` <[string][string]<[Display](#class-display)>> Defaults to `'auto'`.
* returns: <[this](#class-pagination)>

#### pagination.setFirstPageButtonText(text)
* `text` <[string][string]>
* returns: <[this](#class-pagination)>

#### pagination.setPreviousPageButtonText(text)
* `text` <[string][string]>
* returns: <[this](#class-pagination)>

#### pagination.setCurrentPageButtonText(text)
* `text` <[string][string]>
* returns: <[this](#class-pagination)>

#### pagination.setNextPageButtonText(text)
* `text` <[string][string]>
* returns: <[this](#class-pagination)>

#### pagination.setLastPageButtonText(text)
* `text` <[string][string]>
* returns: <[this](#class-pagination)>

#### pagination.setShowFirstPageNumber(\[boolean])
* `boolean` <[boolean][boolean]> Defaults to `true`.
* returns: <[this](#class-pagination)>

#### pagination.setShowPreviousPageNumber(\[boolean])
* `boolean` <[boolean][boolean]> Defaults to `true`.
* returns: <[this](#class-pagination)>

#### pagination.setShowCurrentPageNumber(\[boolean])
* `boolean` <[boolean][boolean]> Defaults to `true`.
* returns: <[this](#class-pagination)>

#### pagination.setShowNextPageNumber(\[boolean])
* `boolean` <[boolean][boolean]> Defaults to `true`.
* returns: <[this](#class-pagination)>

#### pagination.setShowLastPageNumber(\[boolean])
* `boolean` <[boolean][boolean]> Defaults to `true`.
* returns: <[this](#class-pagination)>

#### pagination.setShowAllPageStepButtons(\[boolean])
* `boolean` <[boolean][boolean]> Defaults to `false`.
* returns: <[this](#class-pagination)>

#### pagination.paginator([options])
* `options` <[Object][Object]>
  * `mode` <?[string][string]<[Mode](#class-mode)>> Must be `'standart'` or `'navigation'`.
  * `pageCount` <?[number][number]>
  * `pageNumber` <?[number][number]>
  * `pageStep` <?[number][number]>
  * `maxPageButtons` <?[number][number]>
  * `firstPageButtonDisplay` <?[string][string]<[Display](#class-display)>>
  * `previousPageButtonDisplay` <?[string][string]<[Display](#class-display)>>
  * `currentPageButtonDisplay` <?[string][string]<[Display](#class-display)>>
  * `nextPageButtonDisplay` <?[string][string]<[Display](#class-display)>>
  * `lastPageButtonDisplay` <?[string][string]<[Display](#class-display)>>
  * `previousPageNumberButtonsDisplay` <?[string][string]<[Display](#class-display)>>
  * `nextPageNumberButtonsDisplay` <?[string][string]<[Display](#class-display)>>
  * `firstPageButtonText` <?[string][string]>
  * `previousPageButtonText` <?[string][string]>
  * `currentPageButtonText` <?[string][string]>
  * `nextPageButtonText` <?[string][string]>
  * `lastPageButtonText` <?[string][string]>
  * `showFirstPageNumber` <?[boolean][boolean]>
  * `showPreviousPageNumber` <?[boolean][boolean]>
  * `showCurrentPageNumber` <?[boolean][boolean]>
  * `showNextPageNumber` <?[boolean][boolean]>
  * `showLastPageNumber` <?[boolean][boolean]>
* returns: <[Array][Array]<[Button](#class-button)>>

#### pagination.navigator([options])
* `options` <[Object][Object]>
  * `hasFirstPage` <?[boolean][boolean]>
  * `hasPreviousPage` <?[boolean][boolean]>
  * `hasNextPage` <?[boolean][boolean]>
  * `hasLastPage` <?[boolean][boolean]>
  * `firstPageButtonDisplay` <?[string][string]<[Display](#class-display)>>
  * `previousPageButtonDisplay` <?[string][string]<[Display](#class-display)>>
  * `currentPageButtonDisplay` <?[string][string]<[Display](#class-display)>>
  * `nextPageButtonDisplay` <?[string][string]<[Display](#class-display)>>
  * `lastPageButtonDisplay` <?[string][string]<[Display](#class-display)>>
  * `firstPageButtonText` <?[string][string]>
  * `previousPageButtonText` <?[string][string]>
  * `currentPageButtonText` <?[string][string]>
  * `nextPageButtonText` <?[string][string]>
  * `lastPageButtonText` <?[string][string]>
* returns: <[Array][Array]<[Button](#class-button)>>

#### pagination.stepper([options])
* `options` <[Object][Object]>
  * `pageCount` <?[number][number]>
  * `pageNumber` <?[number][number]>
  * `pageStep` <?[number][number]>
  * `pageSteps` <?[Array][Array]<[number][number]>>
  * `pageStepButtonsDisplay` <?[string][string]<[Display](#class-display)>>
  * `showAllPageStepButtons` <?[boolean][boolean]>
* returns: <[Array][Array]<[Button](#class-button)>>

### class: Types
#### `static` Types.Button
* returns: <[Button](#class-button)>

### class: Button
#### `static` Button.from(type, text[, options])
* `type` <[string][string]<[ButtonType](#class-buttontype)>>
* `text` <[string][string]>
* `options` <[Object][Object]>
  * `pageNumber` <?[number][number]>
  * `pageStep` <?[number][number]>
* returns: <[Button](#class-button)>

#### `static` Button.fromPageNumber(type, text, pageNumber)
* `type` <[string][string]<[ButtonType](#class-buttontype)>>
* `text` <[string][string]>
* `pageNumber` <[number][number]>
* returns: <[Button](#class-button)>

#### `static` Button.fromPageStep(type, text, pageStep)
* `type` <[string][string]<[ButtonType](#class-buttontype)>>
* `text` <[string][string]>
* `pageStep` <[number][number]>
* returns: <[Button](#class-button)>

#### `init` new Button(type, text[, options])
* `type` <[string][string]<[ButtonType](#class-buttontype)>>
* `text` <[string][string]>
* `options` <[Object][Object]>
  * `pageNumber` <?[number][number]>
  * `pageStep` <?[number][number]>
* returns: <[Button](#class-button)>

#### button.setType(type)
* `type` <[string][string]<[ButtonType](#class-buttontype)>>
* returns: <[this](#class-button)>

#### button.setText(text)
* `text` <[string][string]>
* returns: <[this](#class-button)>

#### button.setPageNumber(number)
* `number` <[number][number]>
* returns: <[this](#class-button)>

#### button.setPageStep(step)
* `step` <[number][number]>
* returns: <[this](#class-button)>

### class: Constants
#### `static` Constants.Mode
* returns: <[Mode](#class-mode)>

#### `static` Constants.Display
* returns: <[Display](#class-display)>

#### `static` Constants.ButtonType
* returns: <[ButtonType](#class-buttontype)>

### class: Mode
#### `static` Mode.STANDART
* returns: <[string][string]> Defaults to `'standart'`.

#### `static` Mode.NAVIGATION
* returns: <[string][string]> Defaults to `'navigation'`.

### class: Display
#### `static` Display.ALWAYS
* returns: <[string][string]> Defaults to `'always'`.

#### `static` Display.AUTO
* returns: <[string][string]> Defaults to `'auto'`.

#### `static` Display.HIDE
* returns: <[string][string]> Defaults to `'hide'`.

### class: ButtonType
#### `static` ButtonType.FIRST_PAGE
* returns: <[string][string]> Defaults to `'first_page'`.

#### `static` ButtonType.PREVIOUS_PAGE
* returns: <[string][string]> Defaults to `'previous_page'`.

#### `static` ButtonType.CURRENT_PAGE
* returns: <[string][string]> Defaults to `'current_page'`.

#### `static` ButtonType.NEXT_PAGE
* returns: <[string][string]> Defaults to `'next_page'`.

#### `static` ButtonType.LAST_PAGE
* returns: <[string][string]> Defaults to `'last_page'`.

#### `static` ButtonType.PAGE_NUMBER
* returns: <[string][string]> Defaults to `'page_number'`.

#### `static` ButtonType.CURRENT_STEP
* returns: <[string][string]> Defaults to `'current_step'`.

#### `static` ButtonType.PAGE_STEP
* returns: <[string][string]> Defaults to `'page_step'`.
