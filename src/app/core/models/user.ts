export interface IRoles {
    reader: boolean;
    writer?: boolean;
    admin?: boolean;
}

export class User {
    uid: string;
    displayName: string;
    email: string;
    phoneNumber: string;
    photoURL: string;
    providerId: string;
    roles: IRoles;

    constructor(authData) {
      this.uid = authData.uid;
      this.displayName = authData.displayName;
      this.email = authData.email;
      this.phoneNumber = authData.phoneNumber;
      this.photoURL = authData.photoURL;
      this.providerId = authData.providerId;
      this.roles = { reader: true };
    }
}
