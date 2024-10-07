import cn from "classnames";
import {useAuth} from "features/auth_forms/lib/useAuth.tsx";
import {Field, Form, Formik} from "formik";
import BdIcon from 'shared/assets/svg/birthdaydAte.svg?react';
import IdIcon from 'shared/assets/svg/id.svg?react';
import PasswordIcon from 'shared/assets/svg/password.svg?react';
import TelIcon from 'shared/assets/svg/tel.svg?react';
import TranscriptIcon from 'shared/assets/svg/transcript.svg?react';
import UserIcon from 'shared/assets/svg/user.svg?react';
import {Button} from "shared/ui/button";
import {Input} from "shared/ui/input";
import {Switch} from "shared/ui/switch/ui/Switch.tsx";
import * as yup from 'yup';
import s from "./RegistrationForm.module.scss";


type Props = {
    className?: string
}

const initialValues = {
    fullName: '',
    phone: '',
    db: '',
    document: '',
    document_numbers: '',
    password: '',
    repeat_password: '',
};

const validationSchema = yup.object({
    fullName: yup.string().required(),
    phone: yup.string().required(),
    db: yup.string().required(),
    document: yup.string().required(),
    document_numbers: yup.string().required(),
    password: yup.string().required(),
    repeat_password: yup.string().required(),
});

export function RegistrationForm({className}: Props) {
    const {onSubmit} = useAuth();

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >{({errors, touched}) =>

            <Form className={cn(s._, className)}>
                <fieldset>
                    <Field
                        as={Input}
                        name={'fullName'}
                        placeholder={'ФИО'}
                        icon={<UserIcon/>}
                        error={errors.fullName && touched.fullName}
                    />

                    <Field
                        as={Input}
                        name={'phone'}
                        placeholder={'Номер телефона'}
                        icon={<TelIcon/>}
                        error={errors.phone && touched.phone}
                    />

                    <Field
                        as={Input}
                        name={'db'}
                        placeholder={'Дата рождения'}
                        icon={<BdIcon/>}
                        error={errors.db && touched.db}
                    />

                    <Field
                        as={Input}
                        name={'document'}
                        placeholder={'Документ'}
                        icon={<IdIcon/>}
                        error={errors.document && touched.document}
                    />

                    <Field
                        as={Input}
                        name={'document_numbers'}
                        placeholder={'Укажите 10 цифр серия и номер'}
                        icon={<TranscriptIcon/>}
                        error={errors.document_numbers && touched.document_numbers}
                    />

                    <Field
                        as={Input}
                        name={'password'}
                        placeholder={'Укажите пароль'}
                        icon={<PasswordIcon/>}
                        error={errors.password && touched.password}
                    />

                    <Field
                        as={Input}
                        name={'repeat_password'}
                        placeholder={'Повторите пароль'}
                        icon={<PasswordIcon/>}
                        error={errors.repeat_password && touched.repeat_password}
                    />
                </fieldset>

                <div className={s.switch_container}>
                    <Switch className={s.switch}/>
                    <p>Я даю свое право на информационную рассылку</p>
                </div>

                <Button type={'submit'} className={s.button}>Зарегистрироваться</Button>
            </Form>

        }</Formik>
    );
}
