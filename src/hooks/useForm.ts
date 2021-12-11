import React, { HTMLProps, useState } from 'react';

interface Props<T> {
  initialValues: T;
  onSubmit: (values: T) => void;
  validate: (errors: T) => T;
}

const useForm = <T>({ initialValues, onSubmit, validate }: Props<T>) => {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    if (name === 'image' && files!.length > 0) {
      setValues({ ...values, [name]: files![0] });
    } else {
      setValues({ ...values, [name]: value });
    }
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e);
    console.log(e.target);
    console.log(e.target.value);
  };
  // 위와 한번에 작성하는 방법이 없는지 물어보기 찾아보기

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    e.preventDefault();
    const newErrors = validate ? validate(values) : {};
    if (Object.keys(newErrors).length === 0) {
      await onSubmit(values);
    }
    console.log(values);
    setErrors(newErrors);
    setIsLoading(false);
  };

  return {
    values,
    errors,
    isLoading,
    handleChange,
    handleSubmit,
    setValues,
    handleSelectChange,
  };
};

export default useForm;
