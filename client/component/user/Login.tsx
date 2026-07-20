'use client';

import { Form } from '@/component/lib/form';
import { HandleData } from '@/component/lib/type';

type LoginData = {
  username: string;
  email: string;
  password: string;
};

function Login() {
  const login_handler: HandleData<LoginData> = (data) => {
    if (!data.username || !data.password) {
      alert('Username and password are required.');
      return;
    }

    console.log('Sign in data', data);
    alert(`Signed in as ${data.username}`);
  };

  return (
    <div className="flex justify-center">
      <Form<LoginData>
        id="user-login"
        name="Sign in"
        class_name="theme-3 w-70 mt-10 p-4 rounded-xl"
        data={{ username: '', email: '', password: '' }}
        get_data={login_handler}
        fields={[
          { name: 'Username', value: '', attr: 'username', type: 'input' },
          { name: 'Email', value: '', attr: 'email', type: 'input' },
          { name: 'Password', value: '', attr: 'password', type: 'input' },
        ]}
      />
    </div>
  );
}

export default Login;
