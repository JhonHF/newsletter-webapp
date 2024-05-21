export type User = {
  name: string;
  email: string;
};

export type NewsletterFields = {
  name: string;
  users: User[];
  bulkData?: File;
};
