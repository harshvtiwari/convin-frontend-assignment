export interface BucketCardsPropsInterface {
  name: string;
  link: string;
}

export interface BucketPropsInterface {
  bucketTitle: string;
  bucketCards: BucketCardsPropsInterface[];
}

export interface MediaCardInterface {
  name: string;
  link: string;
  mediaType: 'video' | 'audio';
}

export interface ActionInterface {
  actionType: ActionType;
  modalState: boolean;
  setModalState: (state: boolean) => void;
  actionData?: MediaCardInterface;
}

export type ActionType = 'edit' | 'delete' | 'move' | 'video' | 'none';

export interface MediaCardIconsInterface {
  setModalState: (state: boolean) => void;
  setActionType: (type: ActionType) => void;
}

export interface ErrorAlertInterface {
  error: [boolean, string];
}
