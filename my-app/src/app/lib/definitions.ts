export type State = {
  message?: string | null;
  errors?: {
    title?: string;
    price?: string;
    description?: string;
    imageURL?: string;
  };
};

export type LoginState = {
    message?: string;
    success: boolean;
    errors?: {
      email?: string;
      password?: string;
    };
  };

  export type SignupState = {
    message?: string;
    errors?: {
      name?: string;
      email?: string;
      password?: string;
      role?: string;
    };
  
  }