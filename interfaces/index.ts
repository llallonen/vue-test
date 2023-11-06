export interface ContactData {
  name: String;
  type: any;
  phone: String;
  source: any;
//   createdAt: Date;
//   updatedAt: Date;
}

export interface Contact {
  id: Number;
  data: ContactData;
  createdAt: String;
  updatedAt: String;
}
