export class Email {
  constructor(
    public fromEmail: string,
    public body: string,
    public subject?: string
  ) {}
}
