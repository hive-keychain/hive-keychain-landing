/**
 * Function used to get a tag from a title by removing spaces and adding - instead
 * @param title : title to change
 */
export function tagFromTitle(title) {
  return title.replace(/\s+/g, "-").toLowerCase();
}

/**
 * Function used to add comas in a long number
 * @param x : Number
 */
export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
