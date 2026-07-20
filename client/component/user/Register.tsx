'use client';

import { Form } from '@/component/lib/form';
import { HandleData } from '@/component/lib/type';

type RegisterData = {
  username: string;
  email: string;
  password: string;
  re_password: string;
};

function Register() {
  const register_handler: HandleData<RegisterData> = (data) => {
    if (!data.username || !data.email || !data.password) {
      alert('Please fill all required fields.');
      return;
    }

    if (data.password !== data.re_password) {
      alert('Passwords do not match.');
      return;
    }

    console.log('Registration data', data);
    alert(`Registered ${data.username}`);
  };

  return (
    <div className="flex justify-center">
      <Form<RegisterData>
        id="user-register"
        name="Register"
        class_name="theme-3 w-70 mt-10 p-4 rounded-xl"
        data={{ username: '', email: '', password: '', re_password: '' }}
        get_data={register_handler}
        fields={[
          { name: 'Username', value: '', attr: 'username', type: 'input' },
          { name: 'Email', value: '', attr: 'email', type: 'input' },
          { name: 'Password', value: '', attr: 'password', type: 'input' },
          { name: 'Re Password', value: '', attr: 're_password', type: 'input' },
        ]}
      />
    </div>
  );
}

export default Register;
