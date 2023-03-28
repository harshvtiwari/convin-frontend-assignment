export interface BucketCardsPropsInterface {
  name: string;
  link: string;
}

export interface BucketPropsInterface {
  bucketTitle: string;
  bucketCards: BucketCardsPropsInterface[];
}

export interface MediaCardInterface {
  bucket: string;
  name: string;
  link: string;
  mediaType: 'video' | 'audio';
}

export interface ActionInterface {
  actionType: ActionType;
  modalState: boolean;
  setModalState: (state: boolean) => void;
  actionData?: MediaCardInterface;
  data: { bucketTitle: string; cardTitle: string; cardLink: string };
}

export type ActionType = 'edit' | 'delete' | 'move' | 'video' | 'none';

export interface MediaCardIconsInterface {
  setModalState: (state: boolean) => void;
  setActionType: (type: ActionType) => void;
}

export interface ErrorAlertInterface {
  error: Error | null;
}

export interface EditCardInterface {
  setFooterStatus: (state: boolean) => void;
  data: { bucketTitle: string; cardTitle: string; cardLink: string };
}
export type BucketsObjectType = Record<string, BucketCardsPropsInterface[]>;

export type UseGetDataReturnType = {
  buckets: BucketsObjectType;
  loading: boolean;
  error: Error | null;
};

export interface AddCardInterface {
  bucket: string;
  name: string;
  link: string;
}
