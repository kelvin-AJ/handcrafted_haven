export type State = {
  message?: string | null;
  errors?: {
    title?: string;
    price?: string;
    description?: string;
    imageURL?: string;
  };
};