declare type User = {
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  phone: string;
  photo: string | null;
  role: string;
  wishlist: string[];
  addresses: string[];
} & DatabaseFields;

declare type LoginResponse = {
  token: string;
  user: User;
};

declare type SetPasswordFeilds = {
  email: string;
  newPassword: string;
};

declare type SetPasswordResponse = APIResponse<{ message: "success" }>;

declare type VerifyOTPFiled = {
  resetCode: string;
};

declare type VerifyOTPResponse = APIResponse<{ status: "Success" }>;

declare type RegisterForm = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  rePassword: string;
  phone: string;
  gender: "male" | "female";
};
