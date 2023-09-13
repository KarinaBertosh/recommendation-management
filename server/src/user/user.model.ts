export class User {
  id = crypto.randomUUID()
  constructor(
    public email: string,
    public password: string,
  ) { }
}
