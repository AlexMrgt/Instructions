import React from 'react'
import { Field, Form, Formik } from 'formik';
import pepe from '../../images/pepe.png';

export const ItemsForm = () => {

    function handleSubmit(values){}

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
      

     
            nails: ''
      

    }

    return (

        <Formik
            initialValues={initialValues}

        >
            {
                ({
                    values,
                    handleChange,
                    handleBlur }) => (

                    <Form className='form' onSubmit={handleSubmit}>

                        <article className='form__part' id='food-instr'>

                            <h3>Перекус</h3>

                            <p className='form-text'> Из питья лучше взять термос с чаем и бутылку-другую воды.</p>
                            <p className='form-text'>  Из еды можно взять фрукты, бутерброды, вареные яйца. Жареное не желательно.</p>

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

                            <h3>Одежда</h3>

                            <p className='form-text'>
                                Одежда должна быть легкой, спортивной и такой, которую не очень жалко слегка запачкать - скалы есть скалы.
                            </p>
                            <p className='form-text'> Кстати утром будет где-то +8, так что куртку/кофту легкую тоже надо не забыть</p>

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
                                <img className='sad-img' src={pepe} />

                            </div>

                        </article>

                    </Form>
                )
            }


        </Formik>
        
    )
}

export default ItemsForm;
