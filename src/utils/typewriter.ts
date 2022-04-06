import { TypewriterClass } from 'typewriter-effect';

/**
 * Effect for typewriter, write on screen the strings in array given
 * @param typewriter {TypewriterClass}
 * @param typeWriterStrings {string[]}
 * @return {void}
 */
export function typeWriterEffectReload(
  typewriter: TypewriterClass,
  typeWriterStrings: string[],
) {
  for (const typeWriterString of typeWriterStrings) {
    typewriter.typeString(typeWriterString).pauseFor(100).deleteAll();
  }
  typewriter.pauseFor(100).start();
}
