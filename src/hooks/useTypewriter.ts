import { TFunction } from 'i18next';
import { useContext } from 'react';
import { IntlContext } from '../i18n/context';
import { useTranslation } from 'react-i18next';
import { getStorage } from '../utils/local-storage';

/**
 * Effect for typewriter, write on screen the strings in array given
 * @return {void}
 */
export const useTypeWriterEffectReload = (
  typeWriterStrings: string[],
  divClass: string,
) => {
  const { t } = useContext(IntlContext);
  const { i18n } = useTranslation();

  let isAdding = true;
  let textToBeTypedIndex = 0;
  let index = 0;
  let timeout: NodeJS.Timeout;
  let secondTimeout: NodeJS.Timeout;

  const typeText = document.querySelector(`.${divClass}`);

  const playAnim = (translate: TFunction) => {
    timeout = setTimeout(
      function () {
        if (typeText) {
          typeText.innerHTML = translate(
            typeWriterStrings[textToBeTypedIndex],
          ).slice(0, index);

          if (isAdding) {
            if (
              index > translate(typeWriterStrings[textToBeTypedIndex]).length
            ) {
              isAdding = false;
              secondTimeout = setTimeout(function () {
                playAnim(translate);
              }, 2000);
              return;
            } else {
              index++;
            }
          } else {
            if (index === 0) {
              isAdding = true;
              textToBeTypedIndex =
                (textToBeTypedIndex + 1) % typeWriterStrings.length;
            } else {
              index--;
            }
          }
          playAnim(translate);
        }

        i18n.on('languageChanged', (lg) => {
          if (lg !== getStorage('language')) {
            clearTimeout(timeout);
            clearTimeout(secondTimeout);
          }
        });
      },
      isAdding ? 120 : 60,
    );
  };

  playAnim(t);
};
