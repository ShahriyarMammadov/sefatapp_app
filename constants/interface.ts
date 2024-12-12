interface LoginResponse {
  access_token: string;
  id: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  profileImageUrl?: string;
}

interface Doctors {
  _id: string;
  name: string;
  surname: string;
  hospitalName: string;
  workExperience: number;
  rating: number;
  imageURL: string;
  certificates: null;
  portfolio: null;
  specialty: string;
  about: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export { LoginResponse, Doctors };
