/**
 * Effect for typewriter, write on screen the strings in array given
 * @param typeWriterStrings {string[]}
 * @param isAdding
 * @param textToBeTypedIndex
 * @param index
 * @return {void}
 */
export function typeWriterEffectReload(
  typeWriterStrings: string[],
  isAdding: boolean = true,
  textToBeTypedIndex: number = 0,
  index: number = 0,
) {
  const typeText = document.querySelector('.type-text');
  setTimeout(
    function () {
      if (typeText) {
        typeText.innerHTML = typeWriterStrings[textToBeTypedIndex].slice(
          0,
          index,
        );
        if (isAdding) {
          if (index > typeWriterStrings[textToBeTypedIndex].length) {
            isAdding = false;
            typeText.classList.add('showAnim');
            // break: wait 2s before playing again
            setTimeout(function () {
              typeText.classList.remove('showAnim');
              typeWriterEffectReload(
                typeWriterStrings,
                isAdding,
                textToBeTypedIndex,
                index,
              );
            }, 2000);
            return;
          } else {
            index++;
          }
        } else {
          // removing text
          if (index === 0) {
            isAdding = true;
            textToBeTypedIndex =
              (textToBeTypedIndex + 1) % typeWriterStrings.length;
          } else {
            index--;
          }
        }
        typeWriterEffectReload(
          typeWriterStrings,
          isAdding,
          textToBeTypedIndex,
          index,
        );
      }
    },
    isAdding ? 120 : 60,
  );
}
