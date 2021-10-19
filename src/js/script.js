export default class Validator {
  validateUserName(str) {
    this.str = str;
    if (/(^[\d-_]|[^\w-_])/i.test(this.str) || /(\d{4}|[\d-_]$)/i.test(this.str)) {
      throw new Error('Недопустимое имя пользователя');
    } else {
      return 'Принято.';
    }
  }
}
