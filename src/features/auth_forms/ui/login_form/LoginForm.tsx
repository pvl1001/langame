import cn from "classnames";
import {useAuth} from "features/auth_forms/lib/useAuth.tsx";
import {Field, Form, Formik} from "formik";
import {Link} from "react-router-dom";
import PassIcon from 'shared/assets/svg/password.svg?react';
import TelIcon from 'shared/assets/svg/tel.svg?react';
import {Button} from "shared/ui/button";
import {Input} from "shared/ui/input";
import * as yup from 'yup';
import s from "./LoginForm.module.module.scss";


type Props = {
    className?: string
}

const initialValues = {
    login: '',
    password: '',
};

const validationSchema = yup.object({
    login: yup.string().required(),
    password: yup.string().required(),
});

export function LoginForm({className}: Props) {
    const {onSubmit} = useAuth();

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >{({errors, touched, isValid, dirty}) =>

            <Form className={cn(s._, className)}>
                <fieldset>
                    <Field
                        as={Input}
                        name={'login'}
                        placeholder={'Введите номер телефона'}
                        icon={<TelIcon/>}
                        error={errors.login && touched.login}
                    />

                    <Field
                        as={Input}
                        type={'password'}
                        name={'password'}
                        icon={<PassIcon/>}
                        placeholder={'Введите пароль'}
                        error={errors.password && touched.password}
                    />
                </fieldset>


                <div className={s.forgot}>
                    <Link to={'/'}>Забыли пароль?</Link>
                </div>

                <Button
                    type={'submit'}
                    className={s.button}
                    disabled={!(isValid && dirty)}
                >
                    Войти
                </Button>
            </Form>

        }</Formik>
    );
}
