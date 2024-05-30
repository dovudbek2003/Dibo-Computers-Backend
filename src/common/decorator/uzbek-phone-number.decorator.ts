import { registerDecorator, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';

@ValidatorConstraint({ async: false })
class IsUzbekPhoneNumberConstraint implements ValidatorConstraintInterface {
  validate(phoneNumber: any) {
    const regex = /^\+998\d{9}$/;
    return typeof phoneNumber === 'string' && regex.test(phoneNumber);
  }

  defaultMessage() {
    return 'Phone number must be a valid Uzbekistan number (+998XXXXXXXXX)';
  }
}

export function IsUzbekPhoneNumber(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsUzbekPhoneNumberConstraint,
    });
  };
}
