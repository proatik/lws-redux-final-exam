/***
 * Title : Truncate string.
 * Author : Atik Ullah Khan.
 * Description : Truncate string if it exceeded the given length.
 * Date : 27/03/2023.
 ***/

const name = "";

function truncateString(str = "", n = 55) {
  if (str.length <= n) return str;

  const subString = str.slice(0, n - 1);
  return subString.slice(0, subString.lastIndexOf(" ")) + " ...";
}

export default truncateString;
