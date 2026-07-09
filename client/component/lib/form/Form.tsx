'use client';

import { useState } from 'react';
import { Button } from '../button';
import { Input } from '../input';
import { HandleData } from '../type';

type field = {
  name: string;
  value: string;
  attr: string;
  type?: 'input' | 'choose' | 'img';
  message_error?: string;
};
type Props<T> = {
  fields: field[];
  name: string;
  class_name?: string;
  data: T;
  get_data: HandleData<T>;
  id: string;
};

function Form<T>({ fields, name, class_name, data, get_data, id }: Props<T>) {
  const [form_data, set_form_data] = useState<T>(data);
  return (
    <form
      id={id}
      className={'text-end bg-bg-3' + class_name}
      onSubmit={(e) => {
        e.preventDefault();
        get_data(form_data);
        alert(JSON.stringify(form_data));
      }}
    >
      <h1 className="text-center">{name}</h1>
      {fields.map((field, index) => {
        if (field.type === 'input') {
          return (
            <Input
              set_data={set_form_data}
              key={index}
              name={field.name}
              value={form_data[field.attr as keyof T] as string}
              attr={field.attr}
              message_error={field.message_error}
            />
          );
        }
        if (field.type === 'choose') {
          return (
            <Input
              set_data={set_form_data}
              key={index}
              name={field.name}
              value={field.value}
              attr={field.attr}
              message_error={field.message_error}
            />
          );
        }
        if (field.type === 'img') {
          return (
            <Input
              set_data={set_form_data}
              key={index}
              name={field.name}
              value={field.value}
              attr={field.attr}
            />
          );
        }
      })}
      <Button onSubmit={() => get_data(form_data)} type="submit" className="mt-2 ">
        hello
      </Button>
    </form>
  );
}

export default Form;
