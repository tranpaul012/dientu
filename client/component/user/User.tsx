'use client';

import { HandleData } from '@/component/lib/type';
import { Form } from '@/component/lib/form';

type Props = { children?: React.ReactNode };
type LoginData = {
  username: string;
  email: string;
  password: string;
};
type RegisterData = {
  username: string;
  email: string;
  password: string;
  re_password: string;
};

function User({}: Props) {
  const login_handler: HandleData<LoginData> = (data) => {
    // Login handler logic here
    console.log(data);
  };
  const register_handler: HandleData<RegisterData> = (data) => {
    // Register handler logic here
    console.log(data);
  };
  return (
    <div className="flex gap-4 flex-wrap justify-center">
      <Form<RegisterData>
        id="user-register"
        data={{ username: '', email: '', password: '', re_password: '' }}
        get_data={register_handler}
        class_name=" theme-3 w-70  mt-10 p-4 rounded-xl"
        name="register user"
        fields={[
          {
            name: 'Username',
            value: '',
            attr: 'username',
            type: 'input',
            // message_error: 'Username is required',
          },
          { name: 'Email', value: '', attr: 'email', type: 'input' },
          { name: 'Password', value: '', attr: 'password', type: 'input' },
          { name: 'Re Password', value: '', attr: 're_password', type: 'input' },
        ]}
      />
      <Form<LoginData>
        id="user-login"
        data={{ username: '', email: '', password: '' }}
        get_data={login_handler}
        class_name=" theme-3 w-70  mt-10 p-4 rounded-xl"
        name="login user"
        fields={[
          {
            name: 'Username',
            value: '',
            attr: 'username',
            type: 'input',
          },
          { name: 'Email', value: '', attr: 'email', type: 'input' },
          { name: 'Password', value: '', attr: 'password', type: 'input' },
        ]}
      />
    </div>
  );
}

export default User;
