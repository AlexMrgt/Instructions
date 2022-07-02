// import schedule from '../../images/schedule.jpg';
import Modal from '../Modal/Modal';
import { QuestionInterface } from './interfaces/question.interface';
import './Questions.css';

const Questions = () => {

  const questions: QuestionInterface[] = [
    {
      id: 1,
      question: 'Куда, собсна, собираемся?',
      answer: 'Скалы Чертово городице. Станция электрички - Исеть',
    },

    {
      id: 2,
      question: 'Какого числа выезд?',
      answer: 'На данный момент день выезда - 2 июля 2022 года',
    },

    {
      id: 3,
      question: 'Где собираемся?',
      answer: 'В холле пригородных касс на ж/д вокзале г. Екатеринбурга',
      linkData: {
        link: 'https://yandex.ru/maps/54/yekaterinburg/?indoorLevel=1&ll=60.603779%2C56.858331&mode=whatshere&whatshere%5Bpoint%5D=60.603638%2C56.858380&whatshere%5Bzoom%5D=21&z=19.6',
        text: <p className='questions__link-text' >ТЫК сюда телепортирует тебя в <span className='questions__letter-accent'>Я</span>ндекс.Карты. Точкой отмечен вход в пригородные кассы</p>
      },
    },

    {
      id: 4,
      question: ' А во-сколько?',
      answer: 'Сбор назначаю на 8:15 утра',
    },

    {
      id: 5,
      question: 'Сколько стоят билеты?',
      answer: 'Туда и обратно вместе - 172 рубля. Я возьму сразу на всех, потом на карту можно будет кинуть',
    },

    {
      id: 6,
      question: 'А когда электричка?',
      answer: 'Посадка начинается в 8:55',
    },

    {
      id: 7,
      question: 'Почему так рано сбор?',
      answer: ' Я не первый раз собираю группу. Статистически кто-то забудет чего-то, кто-то встанет в пробке, кто-то не покормил кота, внезапно нужно будет победить принцессу и спасти дракона. + нужно билеты купить. Кароче просто поверьте, что нужно собраться в 8:15',
    },

    {
      id: 8,
      question: 'Сколько в электричке ехать?',
      answer: ' около 35 минут',
    },

    {
      id: 9,
      question: 'Может ли случиться так, что сидячих мест в электричке не будет и придется ехать стоя, обливаясь потом, в относительной духоте с рюкзаком все 35 минут?',
      answer: 'Да, это возможно, т.к. стартовая точка нашего электрона не ж/д вокзал. Скорее всего места будут, но психологически надо быть готовым ко всему.',
    },

    {
      id: 10,
      question: 'Сколько от электрички до скал идти?',
      answer: '~ Полтора часа',
    },
    {
      id: 11,
      question: 'А я не умру, пока иду?',
      answer: 'Ты будешь идти по амортизирующей поверхности, пинать шишки и дышать относительно чистым воздухом - у нас все получится',
    },

    {
      id: 12,
      question: 'Во сколько возвращаемся?',
      answer: ' На любой из этих электричек: 12:45 | 15:14 | 16:03 | 18:32 | 19:54 | 21:21  ',
      additionalAnswer: 'Это время отъезда электрички от станции "Исеть". Но в целом мой настрой на 6-часовую. Может показаться, что это очень долго - но время в лесу летит очень бысто."',
    },

    {
      id: 13,
      question: 'Чем будем заниматься?',
      answer: 'Будем лазать по простым и не очень высоким скальным трассам со страховкой. На тебе будет скалолазная система, к ней будет привязана веревка. Я буду страховать тебя пока ты лезешь. Этот тип страховки безопасен: если ты сорвешься, то останешься на том же месте, где и сорвался, все безопасно.',
    },

    {
      id: 14,
      question: 'Насколько ты вообще компетентен, чтобы я доверил(а) тебе свою жизнь тебе на трассе?',
      answer: 'В прошлом я профессиональный скалолаз, даже 2 разряд заработал. Я занимаюсь этим уже около 15 лет, теперь уже как любитель. Я собирал довольно много групп - ни один человек за все это время не пострадал.',
    },

    {
      id: 15,
      question: 'Я в общем-то человек не очень сильный, это как-то повлияет на лазание и в целом возможность пройти трассу ?',
      answer: 'Сила на тех трассах, которые мы будем пытаться пройти, ничего не значит, гораздо важнее техника лазания. Может быть, чуть-чуть будет полезна некоторая растяжка. Я подскажу как правильно все делать.',
    },

    {
      id: 16,
      question: 'Высоты вот боюсь...Это же не очень хорошо, да ?',
      answer: 'Страх высоты заложен в каждом из нас - это нормальный инстинкт. Я вот тоже очень высоты боюсь, но тут есть страховка, поэтому мы с тобой будем побеждать этот страх на трассе, последовательно, шаг за шагом.',
    },

    {
      id: 17,
      question: 'А если я упаду...',
      answer: 'Это возможно. Для этого нужно посередине трассы отвязать от себя веревку и прыгнуть вниз. Иных вариантов нет. Пока вы на страховке - вам ничего не угрожает.',
    },

    {
      id: 18,
      question: 'А если там людей много будет...',
      answer: 'Эта проблема, к сожалению, реальна. Да, скалолазов там обычно много. В принципе скалолазное комьюнити всегда было доброжелательным - так что договоримся, если что. ',
    },

    {
      id: 19,
      question: 'Что мне нужно с собой взять?',
      answer: 'Там внизу список есть - погляди',
    },
  ];


  return (
    <section className='questions'>

      {questions.map((question) =>

        <article key={question.id} className='questions__item'>

          <div className='questions__question-container'>

            <div className='questions__main-text-container'>
              <h2 className='questions__title questions__title-letter' >Q: </h2>
              <h2 className='questions__title questions__title-question'>{question.question}</h2>
            </div>
          </div>

          <div className='questions__answer-container'>

            <div className='questions__main-text-container'>
              <h2 className='questions__title questions__title-letter '>A:</h2>
              <h2 className='questions__title questions__title-answer'>{question.answer}</h2>
            </div>


            {question.img
              ?
              <div className='questions__img-container'>
                <img className='questions__img' alt='изображение' src={question.img} />
              </div>
              : null}
            {question.additionalAnswer ? <h2 className='questions__subtitle'>  {question.additionalAnswer} </h2> : null}
            {question.linkData ? <a target='_blank' rel="noreferrer" href={question.linkData.link} className='questions__link'>{question.linkData.text}</a> : null}

          </div>

        </article>
      )}


    </section>
  );
}

export default Questions;

