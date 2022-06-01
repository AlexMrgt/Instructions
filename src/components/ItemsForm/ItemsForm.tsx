import React from 'react'
import { Field, Form, Formik } from 'formik';
import pepe from '../../images/pepe.png';

import './ItemsForm.css'

export const ItemsForm: React.FC = () => {

    function handleSubmit(values: any) { }

    let initialValues = {


        water: '',
        food: '',

        top: '',
        bottom: '',
        shoes: '',
        comfortableShoes: '',

        backpack: '',
        repellent: '',
        adhesivePlaster: '',
        painkiller: '',
        mat: '',
        disinfectantLiquid:'',


        nails: ''


    }

    function calcCheckParts(...args: boolean[]) {

        // если все true
        if (!args.some(arg => arg === false)) {
            return 100
        }

        const part = Math.floor(100 / args.length);
        let res = 0;

        args.forEach((arg) => {
            if (arg === true) {
                res = res + part;
            }
        })

        return res;
    }

    return (

        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
        >
            {
                ({
                    values,
                    handleChange,
                    handleBlur }) => (

                    <Form className='form' >

                        <article className='form__part' id='food-instr'>

                            <div className='form__filler' style={{ height: `${calcCheckParts(!!values.water, !!values.food)}%` }} ></div>

                            <h3>Перекус</h3>

                            <p className='form-text'> Из питья лучше взять термос с чаем и бутылку-другую воды.</p>
                            <p className='form-text'>  Из еды можно взять фрукты, бутерброды, вареные яйца, рис. Жареное не желательно.</p>

                            <div className='controlls'>

                                <div className='control-container'>
                                    <label className='label-text' htmlFor='water'>
                                        Питье
                                    </label>
                                    <Field
                                        id='water'
                                        type="checkbox"
                                        name="water"
                                        checked={!!values.water}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.water}
                                    />

                                </div>

                                <div className='control-container'>
                                    <label className='label-text' htmlFor='food'>
                                        Еда
                                    </label>
                                    <Field
                                        id='food'
                                        type="checkbox"
                                        name="food"
                                        checked={!!values.food}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.food}
                                    />

                                </div>

                            </div>

                        </article>

                        <article className='form__part' id='wear-instr'>

                        <div className='form__filler' style={{ height: `${calcCheckParts(!!values.top, !!values.bottom, !!values.shoes, !!values.comfortableShoes)}%` }} ></div>

                            <h3>Одежда</h3>

                            <p className='form-text'>
                                Одежда должна быть легкой, спортивной и такой, которую не очень жалко слегка запачкать - скалы есть скалы.
                            </p>
                            <p className='form-text'> Кстати утром будет где-то +7-10, так что куртку/кофту легкую тоже надо не забыть</p>

                            <div className='controlls'>

                                <div className='control-container'>
                                    <label className='label-text' htmlFor='top'>
                                        Верх
                                    </label>
                                    <Field
                                        id='top'
                                        type="checkbox"
                                        name="top"
                                        checked={!!values.top}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.top}
                                    />

                                </div>

                                <div className='control-container'>
                                    <label className='label-text' htmlFor='bottom'>
                                        Низ
                                    </label>
                                    <Field
                                        id='bottom'
                                        type="checkbox"
                                        name="bottom"
                                        checked={!!values.bottom}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.bottom}
                                    />

                                </div>

                                <div className='control-container'>
                                    <label className='label-text' htmlFor='shoes'>
                                        Удобная обувь
                                    </label>
                                    <Field
                                        id='shoes'
                                        type="checkbox"
                                        name="shoes"
                                        checked={!!values.shoes}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.shoes}
                                    />

                                </div>

                                <div className='control-container'>
                                    <label className='label-text' htmlFor='comfortableShoes'>
                                        Опционально взять самую тонкую и удобную обувь на переодеть, чтобы удобнее лазать было
                                    </label>
                                    <Field
                                        id='comfortableShoes'
                                        type="checkbox"
                                        name="comfortableShoes"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        checked={!!values.comfortableShoes}
                                        value={values.comfortableShoes}
                                    />

                                </div>

                            </div>

                        </article>

                        <article className='form__part' id='other-instr'>

                        <div className='form__filler' style={{ height: `${calcCheckParts(!!values.backpack, !!values.repellent, !!values.adhesivePlaster, !!values.disinfectantLiquid, !!values.painkiller, !!values.mat )}%` }} ></div>

                            <h3>Другое</h3>

                            <p className='form-text'>
                                Просто полезные штуки
                            </p>

                            <div className='controlls'>

                                <div className='control-container'>
                                    <label className='label-text' htmlFor='backpack'>
                                        Рюкзак
                                    </label>
                                    <Field
                                        id='backpack'
                                        type="checkbox"
                                        name="backpack"
                                        checked={!!values.backpack}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.backpack}
                                    />

                                </div>

                                <div className='control-container'>
                                    <label className='label-text' htmlFor='repellent'>
                                        Репелент от клещей
                                    </label>
                                    <Field
                                        id='repellent'
                                        type="checkbox"
                                        name="repellent"
                                        checked={!!values.repellent}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.repellent}
                                    />

                                </div>

                                <div className='control-container'>
                                    <label className='label-text' htmlFor='adhesivePlaster'>
                                        Пластырь
                                    </label>
                                    <Field
                                        id='adhesivePlaster'
                                        type="checkbox"
                                        name="adhesivePlaster"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        checked={!!values.adhesivePlaster}
                                        value={values.adhesivePlaster}
                                    />

                                </div>

                                <div className='control-container'>
                                    <label className='label-text' htmlFor='painkiller'>
                                        Какое-нибудь обезболивающее (не помню случаев применения, но на всякий случай можно кинуть)
                                    </label>
                                    <Field
                                        id='painkiller'
                                        type="checkbox"
                                        name="painkiller"
                                        onChange={handleChange}
                                        checked={!!values.painkiller}
                                        onBlur={handleBlur}
                                        value={values.painkiller}
                                    />

                                </div>

                                <div className='control-container'>
                                    <label className='label-text' htmlFor='disinfectantLiquid'>
                                        Йод/зеленка/иная обеззараживающая жидкость (тож на всякий)
                                    </label>
                                    <Field
                                        id='disinfectantLiquid'
                                        type="checkbox"
                                        name="disinfectantLiquid"
                                        onChange={handleChange}
                                        checked={!!values.disinfectantLiquid}
                                        onBlur={handleBlur}
                                        value={values.disinfectantLiquid}
                                    />

                                </div>

                                <div className='control-container'>
                                    <label className='label-text' htmlFor='mat'>
                                        Туристический коврик/жоппер чтобы присесть. Там есть подобия скамеек из бревен, но вдруг кому не хватит
                                    </label>
                                    <Field
                                        id='mat'
                                        type="checkbox"
                                        name="mat"
                                        onChange={handleChange}
                                        checked={!!values.mat}
                                        onBlur={handleBlur}
                                        value={values.mat}
                                    />

                                </div>
                            </div>
                        </article>

                        <article className='form__part' id='girl-instr'>

                        <div className='form__filler' style={{ height: `${calcCheckParts(!!values.nails )}%` }} ></div>

                            <h3>Девушкам</h3>

                            <div className='controlls'>

                                <div className='control-container'>

                                    <label className='label-text' htmlFor='nails'>
                                        Нужно отпилить ногти :(
                                    </label>
                                    <Field
                                        id='nails'
                                        type="checkbox"
                                        name="nails"
                                        checked={!!values.nails}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.nails}
                                    />

                                </div>

                            </div>

                            <div className='sad-container' >
                                <img className='sad-img' src={pepe} alt='sad pepe' />

                            </div>

                        </article>

                    </Form>
                )
            }


        </Formik>

    )
}

export default ItemsForm;
