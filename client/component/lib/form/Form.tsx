'use client';

import { useState } from 'react';
import { Button } from '../button';
import { Input } from '../input';
import { HandleData } from '../type';

type Field<T extends Record<string, unknown>> = {
  name: string;
  value: string;
  attr: keyof T & string;
  type?: 'input' | 'choose' | 'img';
  message_error?: string;
};
type Props<T extends Record<string, unknown>> = {
  fields: Field<T>[];
  name: string;
  class_name?: string;
  data: T;
  get_data: HandleData<T>;
  id: string;
};

function Form<T extends Record<string, unknown>>({ fields, name, class_name, data, get_data, id }: Props<T>) {
  const [form_data, set_form_data] = useState<T>(data);
  return (
    <form
      id={id}
      className={'text-end bg-bg-3' + (class_name ?? '')}
      onSubmit={(e) => {
        e.preventDefault();
        get_data(form_data);
      }}
    >
      <h1 className="text-center">{name}</h1>
      {fields.map((field, index) => (
        <Input
          set_data={set_form_data}
          key={index}
          name={field.name}
          value={form_data[field.attr] as string}
          attr={field.attr}
          message_error={field.message_error}
        />
      ))}
      <Button type="submit" className="mt-2 ">
        Submit
      </Button>
    </form>
  );
}

export default Form;
