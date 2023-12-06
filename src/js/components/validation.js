import { validateForms } from '../functions/validate-forms';

const rules1 = [
  {
    ruleSelector: '.name',
    rules: [
      {
        rule: 'required',
        errorMessage: 'Вы не ввели имя',
      }
    ]
  },
  {
    ruleSelector: '.tel',
    rules: [
      {
        rule: 'required',
        errorMessage: 'Вы не ввели телефон',
      }
    ]
  },
  {
    ruleSelector: '.email',
    rules: [
      {
        rule: 'required',
        errorMessage: 'Вы не ввели почту',
      },
      {
        rule: 'email',
        errorMessage: 'Недопустимый формат',
      }
    ]
  },
  {
    ruleSelector: '.check',
    rules: [
      {
        rule: 'required',
        errorMessage: 'Подтвердите пользовательское соглашение',
      }
    ]
  }
];

const rules2 = [
  {
    ruleSelector: '.name',
    rules: [
      {
        rule: 'required',
        errorMessage: 'Вы не ввели имя',
      }
    ]
  },
  {
    ruleSelector: '.tel',
    rules: [
      {
        rule: 'required',
        errorMessage: 'Вы не ввели телефон',
      }
    ]
  },
  {
    ruleSelector: '.check',
    rules: [
      {
        rule: 'required',
        errorMessage: 'Подтвердите пользовательское соглашение',
      }
    ]
  }
];

const afterForm = () => {
  console.log('Произошла отправка, тут можно писать любые действия');
};

if (document.querySelector('.contacts-form')) {
  validateForms('.contacts-form', rules1, afterForm);
}

if (document.querySelector('.modal-form')) {
  validateForms('.modal-form', rules2, afterForm);
}

