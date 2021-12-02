import React, { useState } from 'react';

interface Props<T> {
  initialValues: T;
  onSubmit: (values: T) => void;
  validate: (values: T) => T;
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    e.preventDefault();
    const newErrors = validate ? validate(values) : {};
    if (Object.keys(newErrors).length === 0) {
      await onSubmit(values);
    }
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
  };
};

export default useForm;
