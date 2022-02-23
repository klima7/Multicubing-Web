import { FC } from 'react';
import { Field } from 'react-final-form'
import { TextField, Switch, FormControlLabel } from "@mui/material"
import { FieldRenderProps } from 'react-final-form';
import CubeSelector from '../components/CubeSelector';


export const Condition: FC<{when: string, is: any, children: JSX.Element|JSX.Element[]}> = 
({ when, is, children }) => (
  <Field name={when} subscription={{ value: true }}>
    {({ input: { value } }) => (value === is ? children : null)}
  </Field>
)


export const TextFieldAdapter: FC<FieldRenderProps<string, HTMLElement>> = 
({ input, meta, helper='', ...rest }) => (
  <TextField
    error={meta.touched && meta.error}
    {...input}
    {...rest}
    onChange={(value) => input.onChange(value)}
    helperText={meta.touched && meta.error ? meta.error : helper}
  />
)


export const SwitchAdapter: FC<FieldRenderProps<string, HTMLElement>> = 
({ input, meta, defaultChecked=false, label='', ...rest }) => {
  return (
    <FormControlLabel control={
      <Switch
        {...input}
        {...rest}
        onChange={(value) => input.onChange(value)}
      />
    } label={label} />
  )
}


export const CubeSelectorAdapter: FC<FieldRenderProps<string, HTMLElement>> = 
({ input, meta, ...rest }) => {
  return (
    <CubeSelector
      {...input}
      {...rest}
      onChange={(value) => input.onChange(value)} 
    />
  )
}
