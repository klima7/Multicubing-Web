export type Validator<V> = (value: V) => string | undefined;

export const required: Validator<string> = (value: string) =>
  value === undefined || value.length === 0 ? 'Required' : undefined;

export const minLength = (min: number): Validator<string> => (value: string) =>
  value === undefined || value.length >= min ? undefined : `Minimum ${min} characters`;

export const maxLength = (max: number): Validator<string> => (value: string) =>
  value === undefined || value.length <= max ? undefined : `Maximum ${max} characters`;

export function composeValidators<V>(...validators: Validator<V>[]): Validator<V> {
  return (value) => validators.reduce((error: string | undefined, validator) => error || validator(value), undefined);
}
