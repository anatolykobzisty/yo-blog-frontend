import { useState } from 'react';

const useForm = () => {
  const [values, setValues] = useState({ email: '' });
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  const captureInput = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = async e => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setMessage(null);

    // 1. Отправляем Email
    const res = await fetch(`${process.env.GATSBY_SERVERLESS_URL}/sendEmail`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: values.email }),
    });

    const responseText = JSON.parse(await res.text());

    console.log(responseText);

    // 2. Проверяем ответ от сервера
    if (res.status >= 400 && res.status < 600) {
      setLoading(false);
      setError(responseText.message);
    } else {
      // 3. Email успешно отправлен
      setLoading(false);
      setValues({
        ...values,
        email: '',
      });
      setMessage('Вы успешно подписались на нашу рассылку!');
    }
  };

  return {
    values,
    captureInput,
    submitForm,
    isLoading,
    error,
    message,
  };
};

export default useForm;
