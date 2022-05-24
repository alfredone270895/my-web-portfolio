import { createContext, Dispatch, SetStateAction } from 'react';

export type InteractionContextType = {
  interactionMessage:
    | {
        message: string;
        type: 'error' | 'success';
      }
    | undefined;

  setInteractionMessage: Dispatch<
    SetStateAction<
      | {
          message: string;
          type: 'error' | 'success';
        }
      | undefined
    >
  >;
};

export const InteractionContext = createContext<InteractionContextType>({
  interactionMessage: undefined,
  setInteractionMessage: () => {},
});
