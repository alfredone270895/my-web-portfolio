import React from 'react';

type LineBreakProps = {
  numberOfLines?: number;
};
/**
 * Line break for adding more br
 * @param numberOfLines
 * @constructor
 */
export const LineBreak: React.FC<LineBreakProps> = ({ numberOfLines }) => {
  return (
    <>
      {Array.from(Array(numberOfLines ?? 1).keys()).map(() => (
        <br />
      ))}
    </>
  );
};
