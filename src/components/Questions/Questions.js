import schedule from '../../images/schedule.jpg';
import Modal from '../Modal/Modal';
import './Questions.css';

function Questions() {

  const questions = [
    {
      id: null,
      question: 'Куда, собсна, собираемся?',
      answer: 'Скалы Петра Гронского. Станция электрички - о.п. 479км',
      additionalAnswer: '',
      img: ''
    },

    {
      id: null,
      question: 'Какого числа выезд?',
      answer: 'На данный момент день выезда - 7 мая 2022 года',
      additionalAnswer: '',
      img: ''
    },

    {
      id: null,
      question: 'Где собираемся?',
      answer: 'В холле пригородных касс на ж/д вокзале г. Екатеринбурга',
      additionalAnswer: '',
      img: '',
      linkData: {
        link: 'https://yandex.ru/maps/54/yekaterinburg/?indoorLevel=1&ll=60.603779%2C56.858331&mode=whatshere&whatshere%5Bpoint%5D=60.603638%2C56.858380&whatshere%5Bzoom%5D=21&z=19.6',
        text: <p className='questions__link-text' >ТЫК сюда телепортирует тебя в <span className='questions__letter-accent'>Я</span>ндекс.Карты. Точкой отмечен вход в пригородные кассы</p>
      },
    },

    {
      id: null,
      question: ' А во-сколько?',
      answer: 'Сбор назначаю на 8:15 утра',
      additionalAnswer: '',
      img: ''
    },

    {
      id: null,
      question: 'Сколько стоят билеты?',
      answer: 'В одну сторону 98 рублей. Так что захватите 200 на туда и обратно',
      additionalAnswer: '',
      img: ''
    },

    {
      id: null,
      question: 'А когда электричка?',
      answer: 'Посадка начинается в 8:55',
      additionalAnswer: '',
      img: ''
    },

    {
      id: null,
      question: 'Почему так рано сбор?',
      answer: ' Я не первый раз собираю группу. Статистически кто-то забудет чего-то, кто-то встанет в пробке, кто-то не покормил кота, внезапно нужно будет победить принцессу и спасти дракона. + нужно билеты купить. Кароче просто поверьте, что нужно собраться в 8:15',
      additionalAnswer: '',
      img: ''
    },

    {
      id: null,
      question: 'Сколько в электричке ехать?',
      answer: ' около 45 минут',
    },

    {
      id: null,
      question: 'Может ли случиться так, что сидячих мест в электричке не будет и придется ехать стоя, обливаясь потом, в относительной духоте с рюкзаком все 45 минут?',
      answer: 'Да, это возможно, т.к. стартовая точка нашего электрона не ж/д вокзал. Скорее всего места будут, но психологически надо быть готовым ко всему.',
    },

    {
      id: null,
      question: 'Сколько от электрички до скал идти?',
      answer: '~30 минут',
    },

    {
      id: null,
      question: 'Во сколько возвращаемся?',
      answer: ' На любой из этих электричек: 12:39 | 15:08 | 15:57 | 18:11 | 19:48 | 21:15  ',
      additionalAnswer: 'Это время отъезда электрички от станции "о.п. 479 километр". Но в целом мой настрой на 6-часовую. Может показаться, что это очень долго - но время в лесу летит очень бысто."',
      // img: schedule
    },

    {
      id: null,
      question: 'Чем будем заниматься?',
      answer: 'Будем учиться лазать по простым и невысоким скальным трассам со страховкой. На тебе будет скалолазная система, к ней будет привязана веревка. Я буду страховать тебя пока ты лезешь. Этот тип страховки безопасен: если ты сорвешься, то останешься на том же месте, где и сорвался, все безопасно.',
      additionalAnswer: '',
      img: ''
    },

    {
      id: null,
      question: 'Насколько ты вообще компетентен, чтобы я доверил(а) тебе свою жизнь тебе на трассе?',
      answer: 'В прошлом я профессиональный скалолаз, даже 2 разряд заработал. Я занимаюсь этим уже около 15 лет, теперь уже как любитель. Я собирал довольно много групп - ни один человек за все это время не пострадал.',
      additionalAnswer: '',
      img: ''
    },

    {
      id: null,
      question: 'Я в общем-то человек не очень сильный, это как-то повлияет на лазание и в целом возможность пройти трассу ?',
      answer: 'Сила на тех трассах, которые мы будем пытаться пройти, ничего не значит, гораздо важнее техника лазания. Может быть, чуть-чуть будет полезна некоторая растяжка. Я подскажу как правильно все делать.',
      additionalAnswer: '',
      img: ''
    },

    {
      id: null,
      question: 'Высоты вот боюсь...Это же не очень хорошо, да ?',
      answer: 'Страх высоты заложен в каждом из нас - это нормальный инстинкт. Я вот тоже очень высоты боюсь, но тут есть страховка, поэтому мы с тобой будем побеждать этот страх на трассе, последовательно, шаг за шагом.',
      additionalAnswer: '',
      img: ''
    },

    {
      id: null,
      question: 'А если я упаду...',
      answer: 'Это возможно. Для этого нужно посередине трассы отвязать от себя веревку и прыгнуть вниз. Иных вариантов нет. Пока вы на страховке - вам ничего не угрожает.',
      additionalAnswer: '',
      img: ''
    },


    {
      id: null,
      question: 'А если там людей много будет...',
      answer: 'Эта проблема, к сожалению, реальна. Да, время предпраздничное, много туристов, много скалолазов. Если первые нам неинтересны, то вот со вторыми надо будет договариваться. Дело в том, что для нас в приципе там есть лишь 2 маршрута, они идеальны для новичков и, ессесна, очень популярны. Остальные либо слишком короткие, либо слишком тяжелые. Чтобы 100% забить маршрут, нужно выезжать на 7часовой электричке - но такое мы не потянем. В принципе скалолазное комьюнити всегда было доброжелательным - так что договоримся, если что. ',
      additionalAnswer: '',
      img: ''
    },

    {
      id: null,
      question: 'Так получилось, что у меня есть ребенок. Его бы тоже хотелось на природу вывезти... Как там с этим?',
      answer: 'По поводу лазания: если ребенок младше 12-14 лет - я не гарантирую, что сможем утянуть систему под него, но попробовать можно. Если не сможем - то ребенку скорее всего будет скучновато. Так что возможно вам придется эвакуироваться на электричке (машине) относительно рано, если чадо не выдержит созерцания камней и сосен.',
    },

    {
      id: null,
      question: 'Что мне нужно с собой взять?',
      answer: 'Там внизу список есть - погляди',

    },
  ];

  function onImagelick() {
    console.log('ивент улетает наверх')
  }


  return (
    <section className='questions'>

      {questions.map((question, index) =>

        <article key={index} className='questions__item'>

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
                <img onClick={onImagelick} className='questions__img' src={question.img} />
              </div>
              : null}
            {question.additionalAnswer ? <h2 className='questions__subtitle'>  {question.additionalAnswer} </h2> : null}
            {question.linkData ? <a target='_blank' href={question.linkData.link} className='questions__link'>{question.linkData.text}</a> : null}

          </div>

        </article>
      )}


    </section>
  );
}

export default Questions;
